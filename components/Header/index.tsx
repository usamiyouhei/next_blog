import Link from "next/link";
import "./index.css";

export default function Header() {
  return (
    <header className="header">
      <Link href="/" className="logo">
        Next<span className="logoAccent">Blog</span>
      </Link>

      <nav className="nav">
        {/* ログイン済みの場合はこちらをコメントイン、下の未ログイン部分をコメントアウト */}
        {/*
        <>
          <Link href="/dashboard" className="navLink">
            Dashboard
          </Link>
          <div className="userMenu">
            <div className="avatar">T</div>
            <div className="dropdown">
              <span className="dropdownName">testuser</span>
              <form>
                <button type="submit" className="signOutButton">
                  Sign out
                </button>
              </form>
            </div>
          </div>
        </>
        */}
        {/* 未ログインの場合はこちらをコメントイン（デフォルト） */}
        <>
          <Link href="/auth/signin" className="navLink">
            Sign in
          </Link>
          <Link href="/auth/signup" className="signInButton">
            Sign up
          </Link>
        </>
      </nav>
    </header>
  );
}
