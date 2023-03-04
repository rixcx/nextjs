import Link from "next/link";
import styles from '../styles/Header.module.scss';

export default function Header() {
  return (
  <header className={styles.header}>
<h1>
  <Link href="/">
    <a>r.blog</a>
  </Link>
</h1>
  </header>
  )
}