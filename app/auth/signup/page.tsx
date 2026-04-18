import Link from "next/link";
import "./index.css";

export default function SignupPage() {
  return (
    <div className="page">
      <Link href="/" className="logo">
        Next<span className="logo-accent">Blog</span>
      </Link>

      <div className="form-card">
        <h1 className="form-title">アカウント作成</h1>
        <p className="form-subtitle">NextBlog へようこそ</p>

        {/* エラーメッセージ表示（コメントインで確認可能） */}
        {/*
        <div className="error-message">このメールアドレスまたはユーザー名は既に使用されています</div>
        */}

        <form>
          <div className="input-group">
            <label className="label" htmlFor="name">
              ユーザー名
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="input"
              placeholder="username"
              required
            />
          </div>

          <div className="input-group">
            <label className="label" htmlFor="email">
              メールアドレス
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="input"
              placeholder="you@example.com"
              required
            />
          </div>

          <div className="input-group">
            <label className="label" htmlFor="password">
              パスワード
            </label>
            <input
              id="password"
              name="password"
              type="password"
              className="input"
              placeholder="6文字以上"
              required
            />
          </div>

          <button
            type="submit"
            className="submit-button"
          >
            アカウントを作成
          </button>
          {/* ローディング中の表示（コメントインで確認可能） */}
          {/*
          <button
            type="submit"
            className="submit-button submit-button-loading"
          >
          </button>
          */}
        </form>

        <p className="form-footer">
          すでにアカウントをお持ちの方は{" "}
          <Link href="/auth/signin" className="form-footer-link">
            サインイン →
          </Link>
        </p>
      </div>
    </div>
  );
}
