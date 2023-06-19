import * as React from "react";
import NextLink from "next/link";

import ContentfulApi from "@utils/ContentfulApi";
import { Config } from "@utils/Config";
import PageMeta from "@components/PageMeta";
import PostList from "@components/PostList";
import RichTextPageContent from "@components/RichTextPageContent";
import MainLayout from "@layouts/main";
import ContentWrapper from "@components/ContentWrapper";
import PageContentWrapper from "@components/PageContentWrapper";
import HeroBanner from "@components/HeroBanner";
import { useFuzzySearch } from "@hooks/useFuzzySearch";

export default function BlogSearch(props) {
  const { posts, page, preview } = props;

  const { onReset, onSearch, results, searchValue } = useFuzzySearch(posts);

  /**
   * This provides some fallback values to PageMeta so that a page
   * entry is not required for /blog
   */
  const pageTitle = page ? page.title : "Blog Search";
  const pageDescription = page
    ? page.description
    : "Search | Next.js Contentful blog starter";

  

  return (
    <MainLayout preview={preview}>
      <PageMeta
        title={pageTitle}
        description={pageDescription}
        url={Config.pageMeta.blogIndex.url}
      />

      {page.heroBanner !== null && (
        <HeroBanner data={page.heroBanner} />
      )}

      <ContentWrapper>
        <input
          onChange={onSearch}
          placeholder="Search"
          type="text"
          value={searchValue}
        />

        <NextLink href="/clone" passHref>
          <a>link to sitecore page</a>
        </NextLink>

        <NextLink href="/aboutus" passHref>
          <a>link to guidedogs about us page</a>
        </NextLink>

        {page.body && (
          <PageContentWrapper>
            <RichTextPageContent richTextBodyField={page.body} />
          </PageContentWrapper>
        )}
        {results.length > 0 ? (
          <PostList posts={results} />
        ) : (
          <div>
            <h1>No posts found for search: {searchValue}</h1>
            <button onClick={onReset}>Clear Search</button>
          </div>
        )}
      </ContentWrapper>
    </MainLayout>
  );
}

export async function getStaticProps({ preview = false }) {
  const posts = await ContentfulApi.getAllArticles();
  const page = await ContentfulApi.getPageBySlug(
    Config.pageMeta.blogIndex.slug,
    {
      preview: preview,
    },
  );

  return {
    props: {
      preview,
      posts,
      page: page || null,
    },
  };
}
