import Link from "next/link";
import "./index.css";

export default function PostCard() {
  return (
    <Link href="" className="card">
      <div className="thumbnail">
        <span className="tag">Article</span>
      </div>
      <div className="body">
        <h2 className="title">Reactの最新機能を試してみた</h2>
        <div className="meta">
          <span>testuser</span>
          <span className="meta-dot" />
          <span>2025年3月19日</span>
        </div>
        <p className="excerpt">Reactの最新バージョンには多くの新機能が含まれています。この記事では実際に手を動かしながら...</p>
        <span className="read-more">
          Read more <span className="read-more-arrow">→</span>
        </span>
      </div>
    </Link>
  );
}
