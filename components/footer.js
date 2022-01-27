import Link from "next/link";
import styles from '../styles/Footer.module.scss';

export default function Footer() {
  return (
  <footer className={styles.footer}>
    <p  className={styles.privacypolicy}>
      <Link href={`/privacypolicy`}>
        <a>Privacy Policy</a>
      </Link>
    </p>
    <small>&copy; 2022 r.blog</small>
  </footer>
  )
}