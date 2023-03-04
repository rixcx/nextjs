import Link from "next/link";
import { client } from "../libs/client";
import Date from "../libs/date";
import styles from '../styles/Index.module.scss';

export default function Index({ blog }) {
  return (
    <div className={styles.main}>
      <ul className={styles.posts}>
        {blog.map((blog) => (
          <li key={blog.id} className={styles.post}>
            <Link href={`/blog/${blog.id}`}>
              <a>
                <h2 className={styles.title}>{blog.title}</h2>
                <p className={styles.time}><Date dateString={blog.date} /></p>
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
  const data = await client.get({ endpoint: "blog", queries: {fields: 'id,title,date',limit: 20 } });
  return {
    props: {
      blog: data.contents,
    },
  };
  
};
