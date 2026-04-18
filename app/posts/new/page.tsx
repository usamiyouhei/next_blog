import PostForm from "@/components/PostForm";
import "./page.css";

export default function NewPostPage() {
  return (
    <div className="page">
      <h1 className="page-title">新規記事作成</h1>
      <PostForm />
    </div>
  );
}
