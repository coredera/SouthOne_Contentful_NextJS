//import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import RecentPostListStyles from "@styles/RecentPostList.module.css";
import ButtonStyles from "@styles/Button.module.css";
import PublishedDate from "@components/Post/PublishedDate";
import Tags from "@components/Post/Tags";
import ContentListStyles from "@styles/ContentList.module.css";
import { Config } from "@utils/Config";
import ReactMarkdownRenderers from "@utils/ReactMarkdownRenderers";

export default function RecentPostList(props) {
  const { posts } = props;

  return (
    <>
      <h2 className={RecentPostListStyles.recentPostList__header}>
        Recent articles
      </h2>
      <ol className={ContentListStyles.contentList}>
        {posts.map((post) => (
          <li key={post.sys.id}>
            <article className={ContentListStyles.contentList__post}>
              <PublishedDate date={post.date} />
              <Link legacyBehavior href={`/${post.slug}`}>
                <a className={ContentListStyles.contentList__titleLink}>
                  <h2 className={ContentListStyles.contentList__title}>
                    {post.title}
                  </h2>
                </a>
              </Link>

              <div className={ContentListStyles.contentList__excerpt}>
                <ReactMarkdown
                  children={post.excerpt}
                  renderers={ReactMarkdownRenderers(post.excerpt)}
                />
              </div>

              <div>
                <img
                  src={post.image.url}
                  width="1200"
                  height="400"
                  layout="responsive"
                  alt={post.image.description}
                />
              </div>
              {post.contentfulMetadata.tags !== null && (
                <Tags tags={post.contentfulMetadata.tags} />
              )}
            </article>
          </li>
        ))}
      </ol>
      <Link legacyBehavior href={Config.pageMeta.home.slug}>
        <a className={ButtonStyles.button}>See more articles</a>
      </Link>
    </>
  );
}
