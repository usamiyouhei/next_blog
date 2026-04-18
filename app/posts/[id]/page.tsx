import Link from "next/link";
import "./page.css";

export default function PostDetailPage() {
  return (
    <article className="article">
      <span className="tag">Article</span>

      <h1 className="article-title">Reactの最新機能を試してみた</h1>

      <div className="article-meta">
        <div className="author-avatar">T</div>
        <span>testuser</span>
        <span>·</span>
        <span>2025年3月19日</span>
      </div>

      <div className="divider" />

      <div className="content">
        <p>Reactの最新バージョンには多くの新機能が含まれています。この記事では実際に手を動かしながら、新しいAPIの使い方を解説します。</p>
        <p>サーバーコンポーネントやサーバーアクションを活用することで、より少ないJavaScriptで高パフォーマンスなアプリケーションを構築できます。</p>
      </div>

      {/* 記事の著者の場合は編集・削除ボタンを表示（コメントインで確認可能） */}
      {/*
      <div className="actions">
        <Link href="" className="button-edit">
          編集する
        </Link>
        <form>
          <button type="submit" className="button-delete">
            削除する
          </button>
        </form>
      </div>
      */}

      <Link href="/" className="back-link">
        ← 一覧に戻る
      </Link>
    </article>
  );
}
