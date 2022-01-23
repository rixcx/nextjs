import { client } from "../../libs/client";
import Date from "../../libs/date";
import cheerio from 'cheerio';
import hljs from 'highlight.js';

import styles from '../../styles/Blog-detail.module.scss';
import 'highlight.js/styles/hybrid.css';

export default function blogId({ blog, highlightedBody }) {
  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <h1 className={styles.title}>{blog.title}</h1>
        <p className={styles.time}><Date dateString={blog.date} /></p>
      </div>
      <div dangerouslySetInnerHTML={{ __html: highlightedBody }} className={styles.body}></div>
    </div>
  );
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "blog" });

  const paths = data.contents.map((content) => `/blog/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "blog", contentId: id });

  const $ = cheerio.load(data.body);
  $("pre code").each((_, elm) => {
    const result = hljs.highlightAuto($(elm).text());
    $(elm).html(result.value);
    $(elm).addClass("hljs");
  });

  return {
    props: {
      blog: data,
      highlightedBody: $.html(),
    },
  };
};