import Link from "next/link";
import { client } from "../libs/client";
import styles from '../styles/Index.module.scss';

export default function Index({ news }) {
  return (
    <div className={styles.main}>
      <ul className={styles.posts}>
        {news.map((news) => (
          <li key={news.id} className={styles.post}>
            <Link href={`/news/${news.id}`}>
              <a>
                <h2 className={styles.title}>{news.title}</h2>
                <p className={styles.time}>{news.publishedAt}</p>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "news" });

  return {
    props: {
      news: data.contents,
    },
  };
};