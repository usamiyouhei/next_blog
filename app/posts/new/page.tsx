import PostForm from "@/components/PostForm";
import "./page.css";
import { createPost } from "@/lib/actions";

export default function NewPostPage() {
  return (
    <div className="page">
      <h1 className="page-title">新規記事作成</h1>
      <PostForm action={createPost} />
    </div>
  );
}
