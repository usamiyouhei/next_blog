import PostCard from "@/components/PostCard";
import Pagination from "@/components/Pagination";
import "./page.css";
import { getPosts } from "@/lib/queries";

export default async function HomePage() {
  const { posts } = await getPosts();
  console.log(posts);

  return (
    <main>
      <section className="hero">
        <h1 className="hero-title">
          Stories for developers,
          <br />
          by developers.
        </h1>
        <p className="hero-subtitle">
          Next.js 16で構築されたモダンなブログプラットフォーム
        </p>
      </section>

      {/* 記事がない場合はこちらをコメントイン、下のグリッドをコメントアウト */}
      {/*
      <p className="empty">まだ記事がありません</p>
      */}
      <div className="grid">
        <PostCard />
        <PostCard />
        <PostCard />
      </div>

      <Pagination />
    </main>
  );
}
