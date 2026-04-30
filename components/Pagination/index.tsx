import Link from "next/link";
import "./index.css";

interface Props {
  currentPage: number;
  totalPages: number;
}

export default function Pagination({ currentPage, totalPages }: Props) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav className="pagination">
      {currentPage > 1 ? (
        <Link href={`/?page=${currentPage - 1}`} className="nav-button">
          ← Prev
        </Link>
      ) : (
        <span className="nav-button nav-button-disabled">← Prev</span>
      )}
      {pages.map((page) => (
        <Link
          key={page}
          href={`/?page=${page}`}
          className={`page-button ${page === currentPage ? "page-button-active" : ""}`}
        >
          {page}
        </Link>
      ))}
      {currentPage < totalPages ? (
        <Link href={`/?page=${currentPage + 1}`} className="nav-button">
          Next →
        </Link>
      ) : (
        <span className="nav-button nav-button-disabled"> Next →</span>
      )}
    </nav>
  );
}
