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
import router, { useRouter } from "next/router";
import FeaturedPost from "@components/FeaturedPost";
import PopularTopics from "@components/PopularTopics";
import PopularPosts from "@components/PopularPosts";
import BlogBanner from "@components/BlogBanner";

import {
  Box,
  Flex,
  Heading,
  useBreakpointValue,
  useColorMode,
  SimpleGrid,
  GridItem,
  Spacer,
  Select,
  //Link,
  LinkBox,
  LinkOverlay,
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
    sortedBlogPostTags,
    blogPostTags,
    featuredPost,
    topPostsArray,
    postSummaries,
    currentPage,
    totalPages,
    pageContent,
    preview,
  } = props;

  const postListType = "/";

  //console.log("featuredPost:");
  //console.log(featuredPost);

  /**
   * This provides some fallback values to PageMeta so that a pageContent
   * entry is not required for /blog
   */
  const pageTitle = pageContent ? pageContent.title : "Blog";
  const pageDescription = pageContent
    ? pageContent.description
    : "Guidedogs UK Blog";

  //console.log(featuredPost);

  console.log(pageContent.heroBanner.image.url);

  // Original hero banner code
  //  {pageContent.heroBanner !== null && (
  //    <HeroBanner data={pageContent.heroBanner} />
  //  )}

  if (true) {
    return (
      <MainLayout preview={preview}>
        <PageMeta
          title={pageContent.title}
          description={pageContent.description}
          url={Config.pageMeta.blogIndex.url}
          metatitle={pageContent.metaTitle}
          metadescription={pageContent.metaDescription}
        />

        <BlogBanner pageContent={pageContent} />

        <ContentWrapper>
          <Box pt={10}>
          {featuredPost !== null && (
            <FeaturedPost featuredPost={featuredPost} />
          )}
          </Box>
        </ContentWrapper>

        <PopularTopics sortedBlogPostTags={sortedBlogPostTags} />

        <Box bgColor="brand.50" pt={10} pb={20}>
          <ContentWrapper>
            <Flex>
              <Box pr={0}>
                <PostList
                  postListType={postListType}
                  posts={postSummaries}
                  totalPages={totalPages}
                  currentPage={currentPage}
                />
              </Box>
              <Spacer />
              <Box
                minW="300"
                maxW="300"
                pt={8}
                pl={10}
                display={{ base: "none", lg: "block" }}
              >
                <PopularPosts topPostsArray={topPostsArray} />
              </Box>
            </Flex>

            <Flex display={{ base: "block", lg: "none" }} pb={10} pt={10}>
              <PopularPosts topPostsArray={topPostsArray} />
            </Flex>
          </ContentWrapper>
        </Box>
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

        <Box
          backgroundImage={pageContent.heroBanner.image.url}
          height="450"
          bgRepeat="no-repeat"
          bgSize="cover"
          bgPosition="center"
        >
          <Box
            backgroundImage={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/top-left-swirl.svg`}
            bgSize="contain"
            bgRepeat="no-repeat"
            bgPos="top-left"
            className={ContentListStyles.contentList__landingTopSection}
            height="430"
          >
            <ContentWrapper>
              <Flex alignItems="center" pb={0} pt={5}>
                <Box alignSelf="center">
                  <Link href={`${Config.pageMeta.home.slug}`}>
                    <a>
                      <Flex>
                        <h3 className={ContentListStyles.contentList__homelink}>
                          <Box> Home</Box>
                        </h3>
                      </Flex>
                    </a>
                  </Link>
                </Box>
                <Spacer />
              </Flex>
              <Flex>
                <Box pb={10} pt={7} maxWidth="600" pl={0}>
                  <h1 className={TypographyStyles.heading__h1}>
                    {pageContent.title}
                  </h1>
                  {pageContent.body && (
                    <RichTextPageContent
                      richTextBodyField={pageContent.body}
                      className={TypographyStyles.bodyCopy}
                    />
                  )}
                </Box>
                <Box></Box>
              </Flex>
            </ContentWrapper>
          </Box>
        </Box>

        <PopularTopics sortedBlogPostTags={sortedBlogPostTags} />
        <Box bgColor="brand.50">
          <ContentWrapper>
            <Flex pt={10}>
              <Box pr={10}>
                <PostList
                  postListType={postListType}
                  posts={postSummaries}
                  totalPages={totalPages}
                  currentPage={currentPage}
                />
              </Box>
              <Spacer />
              <Box minW="300" pt={8}>
                <PopularPosts topPostsArray={topPostsArray} />
              </Box>
            </Flex>
            <Flex direction="column" display={{ base: "block,", md: "none" }}>
              <ContentWrapper>
                <Box pb={10}>
                  <h2 className={ContentListStyles.contentList__title}>
                    You might also like
                  </h2>
                </Box>
                {topPostsArray.map((post) => (
                  <div key={post.sys.id}>
                    <article className={ContentListStyles.contentList__post}>
                      <Link href={`/${post.slug}`}>
                        <a>
                          <img
                            src={post.image.url}
                            width={post.image.width}
                            height={post.image.height}
                            layout="responsive"
                            objectFit="contain"
                            alt={post.image.description}
                            style={{ borderRadius: "20px" }}
                          />
                        </a>
                      </Link>

                      <Flex p={2} />
                      <Link href={`/${post.slug}`}>
                        <a className={ContentListStyles.contentList__titleLink}>
                          <h2 className={ContentListStyles.contentList__title}>
                            {post.title}
                          </h2>
                        </a>
                      </Link>
                      <Box className={ContentListStyles.contentList__author}>
                        {post.author !== null && (
                          <> Author: {post.author.name}</>
                        )}
                      </Box>
                      {post.contentfulMetadata.tags !== null && (
                        <Tags tags={post.contentfulMetadata.tags} />
                      )}
                      <div className={ContentListStyles.contentList__excerpt}>
                        <ReactMarkdown
                          children={post.excerpt}
                          renderers={ReactMarkdownRenderers(post.excerpt)}
                        />
                      </div>
                      <Flex alignItems="center">
                        <Box alignSelf="center">
                          <Link href={`/${post.slug}`}>
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
                          <PublishedDate date={post.date} alignSelf="center" />
                        </Box>
                      </Flex>
                    </article>
                  </div>
                ))}
              </ContentWrapper>
            </Flex>
          </ContentWrapper>
        </Box>
      </MainLayout>
    );
  }
}

export async function getStaticProps({ preview = false }) {
  const blogPostTags = await ContentfulApi.getAllUniquePostTags();
  const posts = await ContentfulApi.getAllBlogPosts();

  // console.log("blogPostTags");
  // console.log(blogPostTags);

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

  //const topPosts = await ContentfulApi.getTopPosts();

  //  console.log("topPosts");
  //console.log(topPosts);

  const topPostsIds = await ContentfulApi.getTopPostsIds();

  //  console.log("topPostsIds");
  // console.log(topPostsIds);
  //console.log(topPostsIds.length);

  const topPostId1 = topPostsIds.tpostid1;
  const topPostId2 = topPostsIds.tpostid2;
  const topPostId3 = topPostsIds.tpostid3;
  const topPostId4 = topPostsIds.tpostid4;
  const topPostId5 = topPostsIds.tpostid5;

  // console.log("topPostId1");
  // console.log(topPostId1);

  //  console.log("topPostId2");
  //  console.log(topPostId2);

  // console.log("posts");
  // console.log(posts);

  const topPost1 = posts.find((p) => p.sys.id === topPostId1);
  const topPost2 = posts.find((p) => p.sys.id === topPostId2);
  const topPost3 = posts.find((p) => p.sys.id === topPostId3);
  const topPost4 = posts.find((p) => p.sys.id === topPostId4);
  const topPost5 = posts.find((p) => p.sys.id === topPostId5);

  //  console.log("topPost1:");
  //  console.log(topPost1);

  const topPostsIdsArray = [
    topPostId1,
    topPostId2,
    topPostId3,
    topPostId4,
    topPostId5,
  ];

  const topPostsArray = [topPost1, topPost2, topPost3, topPost4, topPost5];

  const topPosts = posts.reduce((acc, post) => {
    // for (var i = 0; i < 4; i++) {
    //  console.log(i);
    //  console.log("entering loop");
    if (post.sys.id === topPostsIdsArray[0]) {
      acc.push(post);

      //  console.log("ACC.........");
      //  console.log(acc);

      // totalPages = Math.ceil(
      //  acc.length / Config.pagination.pageSize,
      //);
      return acc;
    } else if (post.sys.id === topPostsIdsArray[1]) {
      acc.push(post);

      //  console.log("ACC.........");
      //  console.log(acc);

      // totalPages = Math.ceil(
      //  acc.length / Config.pagination.pageSize,
      //);
      return acc;
    }
    return acc;
  }, []);

  const sortedBlogPostTags = blogPostTags.sort((a, b) =>
    a.name.localeCompare(b.name),
  );

  return {
    props: {
      sortedBlogPostTags,
      featuredPost,
      topPostsArray,
      preview,
      postSummaries: postSummaries.items,
      totalPages,
      currentPage: "1",
      pageContent: pageContent || null,
    },
  };
}

export async function changeFunc(tagid) {
  var selectBox = document.getElementById("selectBox");
  var selectedValue = selectBox.options[selectBox.selectedIndex].value;
  // alert(selectedValue);

  router.push(`/topic/${selectedValue}`);
}
