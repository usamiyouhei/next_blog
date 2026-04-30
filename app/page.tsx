import PostCard from "@/components/PostCard";
import Pagination from "@/components/Pagination";
import "./page.css";
import { getPosts } from "@/lib/queries";

interface Props {
  searchParams: Promise<{ page?: string }>;
}

export default async function HomePage({ searchParams }: Props) {
  const { page: PageStr } = await searchParams;
  const page = parseInt(PageStr || "1");
  const { posts, totalPages } = await getPosts({ page });
  console.log(posts);

  return (
    <main>
      <section className="hero">
        <h1 className="hero-title">
          Stories for developers,
          <br />
          by developers.
        </h1>
        <p className="hero-subtitle">
          Next.js 16で構築されたモダンなブログプラットフォーム
        </p>
      </section>

      {posts.length === 0 ? (
        <p className="empty">まだ記事がありません</p>
      ) : (
        <div className="grid">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      )}
      {totalPages > 1 && (
        <Pagination currentPage={page} totalPages={totalPages} />
      )}
    </main>
  );
}
