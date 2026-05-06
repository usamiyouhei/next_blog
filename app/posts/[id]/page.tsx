import Link from "next/link";
import "./page.css";
import { getPostById } from "@/lib/queries";
import { notFound } from "next/navigation";
import { cookies } from "next/headers";
import { verifyToken } from "@/lib/jwt";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function PostDetailPage({ params }: Props) {
  const { id } = await params;
  const post = await getPostById(parseInt(id));

  if (!post) notFound();
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;
  const user = verifyToken(token);
  const isAuthor = user.id === post.id;

  return (
    <article className="article">
      <span className="tag">Article</span>

      <h1 className="article-title">{post.title}</h1>

      <div className="article-meta">
        <div className="author-avatar">
          {post.user.name.charAt(0).toUpperCase()}
        </div>
        <span>{post.user.name}</span>
        <span>·</span>
        <span>{post.updatedAt.toLocaleDateString("jp-JP")}</span>
      </div>

      <div className="divider" />

      <div className="content">
        <p>{post.content}</p>
      </div>

      {isAuthor && (
        <div className="actions">
          <Link href={`/posts/${post.id}/edit`} className="button-edit">
            編集する
          </Link>
          <form>
            <button type="submit" className="button-delete">
              削除する
            </button>
          </form>
        </div>
      )}

      <Link href="/" className="back-link">
        ← 一覧に戻る
      </Link>
    </article>
  );
}
