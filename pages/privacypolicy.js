import Link from "next/link";
import styles from '../styles/Privacypolicy.module.scss';

export default function PrivacyPolicy() {
  return (
    <div className={styles.main}>
      <h1 className={styles.title}>Privacy Policy</h1>
      
      <h2 className={styles.subtitle}>当サイトが使用しているアクセス解析ツールについて</h2>
      <p>当サイトでは、Googleによるアクセス解析ツール「Googleアナリティクス」を使用しています。このGoogleアナリティクスはデータの収集のためにCookieを使用しています。このデータは匿名で収集されており、個人を特定するものではありません。</p>
      <p>この機能はCookieを無効にすることで収集を拒否することが出来ますので、お使いのブラウザの設定をご確認ください。この規約に関しての詳細は
      <Link href={`https://policies.google.com/technologies/partner-sites?hl=ja`} target="_blank">
        <a>Googleのポリシーと規約</a>
      </Link>
      をご覧ください。</p>
      
      <h2 className={styles.subtitle}>免責事項</h2>
      <p>当サイトで紹介した内容によって生じたいかなる障害に、当サイトは一切の責任を負いません。</p>
    </div>
  );
}