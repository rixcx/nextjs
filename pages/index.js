import Link from "next/link";
import { client } from "../libs/client";
import styles from '../styles/Index.module.scss';

export default function Index({ news }) {
  return (
    <div className={styles.main}>
      <ul>
        {news.map((news) => (
          <li key={news.id}>
            <Link href={`/news/${news.id}`}>
              <a>
                <p>{news.title}</p>
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