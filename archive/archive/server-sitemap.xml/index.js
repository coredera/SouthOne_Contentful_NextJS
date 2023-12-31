import { getServerSideSitemap } from "next-sitemap";
import ContentfulApi from "@utils/ContentfulApi";
import { Config } from "@utils/Config";

export const getServerSideProps = async (ctx) => {
  // Source urls from Contentful
  const articleSlugs = await ContentfulApi.getAllPostSlugs();

  const articleFields = articleSlugs.map((slug) => {
    return {
      loc: `https://www.examplesite.org.uk/blog/${slug}`,
      lastmod: new Date().toISOString(),
    };
  });

  const totalPosts = await ContentfulApi.getTotalPostsNumber();
  const totalPages = Math.ceil(totalPosts / Config.pagination.pageSize);

  const blogIndexPageFields = [];

  /**
   * Start from page 2, so we don't replicate /blog
   * which is page 1
   */
  for (let page = 2; page <= totalPages; page++) {
    blogIndexPageFields.push({
      loc: `https://www.examplesite.org.uk/blog/page/${page}`,
      lastmod: new Date().toISOString(),
    });
  }

  const fields = articleFields.concat(blogIndexPageFields);
  return getServerSideSitemap(ctx, fields);
};

// Default export to prevent next.js errors
export default () => {};
