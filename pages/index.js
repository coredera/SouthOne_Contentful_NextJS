import * as React from "react";
//
import ContentfulApi from "@utils/ContentfulApi";
import { Config } from "@utils/Config";
import PageMeta from "@components/PageMeta";
import PostList from "@components/PostList";
import RichTextPageContent from "@components/RichTextPageContent";
import MainLayout from "@layouts/main";
import ContentWrapper from "@components/ContentWrapper";
import PageContentWrapper from "@components/PageContentWrapper";
import HeroBanner from "@components/HeroBanner";
import TypographyStyles from "@styles/Typography.module.scss";
import ContentListStyles from "@styles/ContentList.module.css";
import Link from "next/link";
import Tags from "@components/Post/Tags";
import ReactMarkdownRenderers from "@utils/ReactMarkdownRenderers";
import ReactMarkdown from "react-markdown";
import PublishedDate from "@components/Post/PublishedDate";

import {
  Box,
  Flex,
  Heading,
  useBreakpointValue,
  useColorMode,
  SimpleGrid,
  GridItem,
  Spacer,
  Icon,
  Button,
  VStack,
  Text,
  Container,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
} from "@chakra-ui/react";

export default function BlogIndex(props) {
  const {
    featuredPost,
    postSummaries,
    currentPage,
    totalPages,
    pageContent,
    preview,
  } = props;

  const postListType = "/";

  console.log("featuredPost:");
  console.log(featuredPost);
  /**
   * This provides some fallback values to PageMeta so that a pageContent
   * entry is not required for /blog
   */
  const pageTitle = pageContent ? pageContent.title : "Blog";
  const pageDescription = pageContent
    ? pageContent.description
    : "Guidedogs UK Blog";

  if (featuredPost) {
    return (
      <MainLayout preview={preview}>
        <PageMeta
          title={pageContent.title}
          description={pageContent.description}
          url={Config.pageMeta.blogIndex.url}
          metatitle={pageContent.metaTitle}
          metadescription={pageContent.metaDescription}
        />

        {pageContent.heroBanner !== null && (
          <HeroBanner data={pageContent.heroBanner} />
        )}

        <Box className={ContentListStyles.contentList__topSection}>
          <Flex>
            <Box pb={10} pt={7}>
              <h1 className={TypographyStyles.heading__h1}>
                Welcome to the Guide Dogs Blog
              </h1>
              <text className={TypographyStyles.bodyCopy}>
                Discover true stories, big issues, actioning change and
                more.......
              </text>
            </Box>

            {pageContent.body && (
              <PageContentWrapper>
                <RichTextPageContent richTextBodyField={pageContent.body} />
              </PageContentWrapper>
            )}
          </Flex>

          <Flex display={{ base: "none", md: "block" }}>
            <article
              className={ContentListStyles.contentList__featuredPost}
              style={{ display: featuredPost === null ? "none" : "block" }}
            >
              <Link href={`/${featuredPost.slug}`}>
                <a className={ContentListStyles.contentList__titleLink}>
                  <h2 className={ContentListStyles.contentList__title}>
                    {featuredPost.title}
                  </h2>
                </a>
              </Link>

              <Flex justifyContent>
                <Box pr={30}>
                  <Box className={ContentListStyles.contentList__author}>
                    {featuredPost.author !== null && (
                      <> Author: {featuredPost.author.name}</>
                    )}
                  </Box>
                  {featuredPost.contentfulMetadata.tags !== null && (
                    <Tags tags={featuredPost.contentfulMetadata.tags} />
                  )}
                  <div className={ContentListStyles.contentList__excerpt}>
                    <ReactMarkdown
                      children={featuredPost.excerpt}
                      renderers={ReactMarkdownRenderers(featuredPost.excerpt)}
                    />
                  </div>
                  <Flex alignItems="center">
                    <Box alignSelf="center">
                      <Link href={`/${featuredPost.slug}`}>
                        <a>
                          <h3
                            className={
                              ContentListStyles.contentList__readmorelink
                            }
                          >
                            Read more
                          </h3>
                        </a>
                      </Link>
                    </Box>
                    <Spacer />
                    <Box
                      alignSelf="center"
                      className={TypographyStyles.bodyCopy}
                    >
                      <PublishedDate
                        date={featuredPost.date}
                        alignSelf="center"
                      />
                    </Box>
                  </Flex>
                </Box>
                <Spacer />
                <Box pl={30} width="70rem">
                  <Link href={`/${featuredPost.slug}`}>
                    <a>
                      <img
                        src={featuredPost.image.url}
                        width={featuredPost.image.width}
                        height={featuredPost.image.height}
                        layout="responsive"
                        objectFit="contain"
                        alt={featuredPost.image.description}
                      />
                    </a>
                  </Link>
                </Box>
              </Flex>
            </article>
          </Flex>

          <Flex display={{ base: "block", md: "none" }}>
            <article className={ContentListStyles.contentList__post}>
              <Link href={`/${featuredPost.slug}`}>
                <a>
                  <img
                    src={featuredPost.image.url}
                    width={featuredPost.image.width}
                    height={featuredPost.image.height}
                    layout="responsive"
                    objectFit="contain"
                    alt={featuredPost.image.description}
                  />
                </a>
              </Link>

              <Flex p={2} />
              <Link href={`/${featuredPost.slug}`}>
                <a className={ContentListStyles.contentList__titleLink}>
                  <h2 className={ContentListStyles.contentList__title}>
                    {featuredPost.title}
                  </h2>
                </a>
              </Link>
              <Box className={ContentListStyles.contentList__author}>
                {featuredPost.author !== null && (
                  <> Author: {featuredPost.author.name}</>
                )}
              </Box>
              {featuredPost.contentfulMetadata.tags !== null && (
                <Tags tags={featuredPost.contentfulMetadata.tags} />
              )}
              <div className={ContentListStyles.contentList__excerpt}>
                <ReactMarkdown
                  children={featuredPost.excerpt}
                  renderers={ReactMarkdownRenderers(featuredPost.excerpt)}
                />
              </div>
              <Flex alignItems="center">
                <Box alignSelf="center">
                  <Link href={`/${featuredPost.slug}`}>
                    <a>
                      <h3
                        className={ContentListStyles.contentList__readmorelink}
                      >
                        Read more
                      </h3>
                    </a>
                  </Link>
                </Box>
                <Spacer />
                <Box alignSelf="center" className={TypographyStyles.bodyCopy}>
                  <PublishedDate date={featuredPost.date} alignSelf="center" />
                </Box>
              </Flex>
            </article>
          </Flex>
        </Box>
        <Box>
          <Flex>
                <h2 className={TypographyStyles.heading__h2}>
                    Popular Categories
                </h2>


          </Flex>
        </Box>

        <ContentWrapper>
          <PostList
            postListType={postListType}
            posts={postSummaries}
            totalPages={totalPages}
            currentPage={currentPage}
          />
        </ContentWrapper>
      </MainLayout>
    );
  } else {
    return (
      <MainLayout preview={preview}>
        <PageMeta
          title={pageContent.title}
          description={pageContent.description}
          url={Config.pageMeta.blogIndex.url}
          metatitle={pageContent.metaTitle}
          metadescription={pageContent.metaDescription}
        />

        {pageContent.heroBanner !== null && (
          <HeroBanner data={pageContent.heroBanner} />
        )}

        <ContentWrapper>
          <Box pb={10} pt={7}>
            <h1 className={TypographyStyles.heading__h1}>
              Welcome to the Guide Dogs Blog
            </h1>
            <body className={TypographyStyles.bodyCopy}>
              Discover true stories, big issues, actioning change and
              more.......
            </body>
          </Box>
          {pageContent.body && (
            <PageContentWrapper>
              <RichTextPageContent richTextBodyField={pageContent.body} />
            </PageContentWrapper>
          )}

          <PostList
            postListType={postListType}
            posts={postSummaries}
            totalPages={totalPages}
            currentPage={currentPage}
          />
        </ContentWrapper>
      </MainLayout>
    );
  }
}

export async function getStaticProps({ preview = false }) {
  const postSummaries = await ContentfulApi.getPaginatedPostSummaries(1);
  const pageContent = await ContentfulApi.getPageContentBySlug(
    Config.pageMeta.blogIndex.slug,
    {
      preview: preview,
    },
  );

  const totalPages = Math.ceil(
    postSummaries.total / Config.pagination.pageSize,
  );

  const featuredPost = await ContentfulApi.getFeaturedPost();

  return {
    props: {
      featuredPost,
      preview,
      postSummaries: postSummaries.items,
      totalPages,
      currentPage: "1",
      pageContent: pageContent || null,
    },
  };
}
