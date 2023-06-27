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
import PopularTags from "@components/PopularTags";
import PopularPosts from "@components/PopularPosts";
import BlogBanner from "@components/BlogBanner";
import SocialMedia from "@components/SocialMedia";
import CQC from "@components/CQC";


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
  Stack,
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
    articleTags,
    featuredArticle,
    topPostsArray,
    postSummaries,
    currentPage,
    totalPages,
    page,
    preview,
  } = props;

  const postListType = "/";

  //console.log(postSummaries);

  //console.log("featuredArticle:");
  //console.log(featuredArticle);

  /**
   * This provides some fallback values to PageMeta so that a page
   * entry is not required for /blog
   */
  const pageTitle = page ? page.title : "Blog";
  const pageDescription = page
    ? page.description
    : "examplesite UK Blog";

  //console.log(featuredArticle);

  //console.log(page.heroBanner.image.url);

  // Original hero banner code
  //  {page.heroBanner !== null && (
  //    <HeroBanner data={page.heroBanner} />
  //  )}

  //console.log(postSummaries);
//code to return blogbanner component: <BlogBanner page={page} />  //

  if (true) {
    return (
      <MainLayout preview={preview} posts={postSummaries}>
        <PageMeta
          title={page.title}
          description={page.description}
          url={Config.pageMeta.home.url}
          canonical={Config.pageMeta.blogIndex.url}
          metatitle={page.metaTitle}
          metadescription={page.metaDescription}
        /> 
        <Box>
      <BlogBanner page={page} />
      </Box>
      <Box>
      <PopularTags sortedBlogPostTags={sortedBlogPostTags} />
      </Box>
        <ContentWrapper>
          <Box pt={10}>
          {featuredArticle !== null && (
            <FeaturedPost featuredArticle={featuredArticle} />
          )}
          </Box>
        </ContentWrapper>
        <Box bgColor="brand.50" pt={10} pb={20}>
          <ContentWrapper>
            <Flex>
              <Box pr={0} width="100%">
             
                <PostList
                  postListType={postListType}
                  posts={postSummaries}
                  totalPages={totalPages}
                  currentPage={currentPage}
                />
              </Box>
              <Spacer />
              <Box
                minW="368"
                maxW="368"
                pt={8}
                pl={10}
                display={{ base: "none", lg: "block" }}
              >
                <Box pb={5}>
                <PopularPosts topPostsArray={topPostsArray} />
                </Box>
                <Box>
                <CQC topPostsArray={topPostsArray} />
              </Box>
              <Box pt={5}>
                <SocialMedia topPostsArray={topPostsArray} />
              </Box>
              </Box>
            </Flex>

            <Flex display={{ base: "block", lg: "none" }} pb={2} pt={10}>
              <PopularPosts topPostsArray={topPostsArray} />
            </Flex>
            <Flex display={{ base: "block", lg: "none" }} pb={5} pt={5}>
              <CQC topPostsArray={topPostsArray} />
            </Flex>
            <Flex display={{ base: "block", lg: "none" }} pb={2} pt={2}>
              <SocialMedia topPostsArray={topPostsArray} />
            </Flex>
          </ContentWrapper>
        </Box>
      </MainLayout>
    );
  } else {
    return (
      <MainLayout preview={preview}>
        <PageMeta
          title={page.title}
          description={page.description}
          url={Config.pageMeta.home.url}
          metatitle={page.metaTitle}
          metadescription={page.metaDescription}
        />

        <Box
          backgroundImage={page.heroBanner.image.url}
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
                  <Link legacyBehavior href={`${Config.pageMeta.home.slug}`}>
                    <a>
                      <Flex>
                        <h3 className={ContentListStyles.contentList__homelink}>
                          <Box> Home </Box>
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
                    {page.title}
                  </h1>
                  {page.body && (
                    <RichTextPageContent
                      richTextBodyField={page.body}
                      className={TypographyStyles.bodyCopy}
                    />
                  )}
                </Box>
                <Box></Box>
              </Flex>
            </ContentWrapper>
          </Box>
        </Box>

        <PopularTags sortedBlogPostTags={sortedBlogPostTags} />
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
                      <Link legacyBehavior href={`/${post.slug}`}>
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
                      <Link legacyBehavior href={`/${post.slug}`}>
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
                          <Link legacyBehavior href={`/${post.slug}`}>
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
  const articleTags = await ContentfulApi.getAllUniquePostTags();
  const posts = await ContentfulApi.getAllArticles();

  // console.log("articleTags");
  // console.log(articleTags);

  const postSummaries = await ContentfulApi.getPaginatedPostSummaries(1);
  const page = await ContentfulApi.getPageBySlug(
    Config.pageMeta.home.slug,
    {
      preview: preview,
    },
  );

  //console.log(page);

  const totalPages = Math.ceil(
    postSummaries.total / Config.pagination.pageSize,
  );

  const featuredArticle = await ContentfulApi.getFeaturedArticle();

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

  const sortedBlogPostTags = articleTags.sort((a, b) =>
    a.name.localeCompare(b.name),
  );

  return {
    props: {
      sortedBlogPostTags,
      featuredArticle,
      topPostsArray,
      preview,
      postSummaries: postSummaries.items,
      totalPages,
      currentPage: "1",
      page: page || null,
    },
  };
}

export async function changeFunc(tagid) {
  var selectBox = document.getElementById("selectBox");
  var selectedValue = selectBox.options[selectBox.selectedIndex].value;
  // alert(selectedValue);

  router.push(`/tag/${selectedValue}`);
}
