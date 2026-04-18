import Link from "next/link";
import "./index.css";

export default function SigninPage() {
  return (
    <div className="page">
      <Link href="/" className="logo">
        Next<span className="logo-accent">Blog</span>
      </Link>

      <div className="form-card">
        <h1 className="form-title">Welcome back</h1>
        <p className="form-subtitle">サインインしてください</p>

        {/* エラーメッセージ表示（コメントインで確認可能） */}
        {/*
        <div className="error-message">メールアドレスまたはパスワードが正しくありません</div>
        */}

        <form>
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
              placeholder="パスワード"
              required
            />
          </div>

          <button
            type="submit"
            className="submit-button"
          >
            Sign in
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
          アカウントをお持ちでない方は{" "}
          <Link href="/auth/signup" className="form-footer-link">
            ユーザー登録 →
          </Link>
        </p>
      </div>
    </div>
  );
}
