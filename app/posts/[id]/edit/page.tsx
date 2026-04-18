import PostForm from "@/components/PostForm";
import "./page.css";

export default function EditPostPage() {
  return (
    <div className="page">
      <h1 className="page-title">記事を編集</h1>
      <PostForm />
    </div>
  );
}
