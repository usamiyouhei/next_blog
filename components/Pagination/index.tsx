import Link from 'next/link';
import './index.css';

export default function Pagination() {
  return (
    <nav className="pagination">
      <Link href="/?page=1" className="nav-button">
        ← Prev
      </Link>
      <Link href="/?page=1" className="page-button">
        1
      </Link>
      <Link href="/?page=2" className="page-button page-button-active">
        2
      </Link>
      <Link href="/?page=3" className="page-button">
        3
      </Link>
      <Link href="/?page=4" className="page-button">
        4
      </Link>
      <Link href="/?page=5" className="page-button">
        5
      </Link>
      <Link href="/?page=3" className="nav-button">
        Next →
      </Link>
    </nav>
  );
}
