import Link from "next/link";
import "./page.css";

export default function DashboardPage() {
  return (
    <div className="page">
      <div className="dashboard-header">
        <h1 className="page-title">My Articles</h1>
        <Link href="/posts/new" className="new-post-button">
          ＋ 新規作成
        </Link>
      </div>

      {/* 記事がない場合はこちらをコメントイン、下のリストをコメントアウト */}
      {/*
      <p className="empty">まだ記事がありません。最初の記事を書いてみましょう。</p>
      */}
      <div className="article-list">
        <div className="article-row">
          <span className="status-badge status-published">
            <span className="status-dot status-dot-published" />
            公開
          </span>
          <Link href="" className="article-title">
            Reactの最新機能を試してみた
          </Link>
          <span className="article-date">2025年3月19日</span>
          <div className="article-actions">
            <Link href="" className="icon-button" title="編集">
              ✎
            </Link>
            <form>
              <button type="submit" className="icon-button icon-button-danger" title="削除">
                🗑
              </button>
            </form>
          </div>
        </div>

        <div className="article-row">
          <span className="status-badge status-published">
            <span className="status-dot status-dot-published" />
            公開
          </span>
          <Link href="" className="article-title">
            Next.js App Routerの使い方
          </Link>
          <span className="article-date">2025年3月10日</span>
          <div className="article-actions">
            <Link href="" className="icon-button" title="編集">
              ✎
            </Link>
            <form>
              <button type="submit" className="icon-button icon-button-danger" title="削除">
                🗑
              </button>
            </form>
          </div>
        </div>

        <div className="article-row">
          <span className="status-badge status-draft">
            <span className="status-dot status-dot-draft" />
            下書き
          </span>
          <Link href="" className="article-title">
            TypeScriptの型システム入門（下書き）
          </Link>
          <span className="article-date">2025年3月1日</span>
          <div className="article-actions">
            <Link href="" className="icon-button" title="編集">
              ✎
            </Link>
            <form>
              <button type="submit" className="icon-button icon-button-danger" title="削除">
                🗑
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
