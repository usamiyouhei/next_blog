import PostForm from "@/components/PostForm";
import "./page.css";
import { getPostById } from "@/lib/queries";
import { notFound, redirect } from "next/navigation";
import { cookies } from "next/headers";
import { verifyToken } from "@/lib/jwt";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function EditPostPage({ params }: Props) {
  const { id } = await params;
  const post = await getPostById(parseInt(id));

  if (!post) return notFound();

  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;
  const user = verifyToken(token);

  if (!user || user.id !== post.userId) redirect("/dashboard");

  return (
    <div className="page">
      <h1 className="page-title">記事を編集</h1>
      <PostForm />
    </div>
  );
}
