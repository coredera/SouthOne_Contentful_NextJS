import ContentfulApi from "@utils/ContentfulApi";
import { Config } from "@utils/Config";
import PageMeta from "@components/PageMeta";
import PostList from "@components/PostList";
import RichTextPageContent from "@components/RichTextPageContent";
import MainLayout from "@layouts/main";
import ContentWrapper from "@components/ContentWrapper";
import PageContentWrapper from "@components/PageContentWrapper";
import HeroBanner from "@components/HeroBanner";
import PopularTags from "@components/PopularTags";
import PopularPosts from "@components/PopularPosts";
import BlogBanner from "@components/BlogBanner";
import SocialMedia from "@components/SocialMedia";

//import Image from "next/image";
import ContentListStyles from "@styles/ContentList.module.css";
import Link from "next/link";
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

export default function BlogIndexPage(props) {
  const {
    postSummaries,
    totalPages,
    currentPage,
    page,
    preview,
    sortedBlogPostTags,
    topPostsArray,
  } = props;

  /**
   * This provides some fallback values to PageMeta so that a page
   * entry is not required for /blog
   */
  const pageTitle = page ? page.title : "Blog";
  const pageDescription = page
    ? page.description
    : "Articles | Next.js Contentful blog starter";

  const postListType = "/";

  return (
    <MainLayout preview={preview}>
      <PageMeta
        title={`${pageTitle} | Page ${currentPage}`}
        description={pageDescription}
        url={`${Config.pageMeta.home.url}/page/${currentPage}`}
        canonical={`${Config.pageMeta.home.url}/page/${currentPage}`}
        metatitle={`${page.metaTitle} - page ${currentPage}`}
        metadescription={page.metaDescription}
      />

      <BlogBanner page={page} />

      <PopularTags sortedBlogPostTags={sortedBlogPostTags} />

      <Box bgColor="brand.50" pt={10} pb={20}>
        <ContentWrapper>
          <Flex>
            <PostList
              postListType={postListType}
              posts={postSummaries}
              totalPages={totalPages}
              currentPage={currentPage}
            />

            <Spacer />
            <Box
              minW="368"
              maxW="368"
              pt={8}
              pl={10}
              display={{ base: "none", lg: "block" }}
            >
              <Box pb={10}>
                <PopularPosts topPostsArray={topPostsArray} />
              </Box>
              <SocialMedia topPostsArray={topPostsArray} />
            </Box>
          </Flex>

          <Flex display={{ base: "block", lg: "none" }} pb={5} pt={10}>
              <PopularPosts topPostsArray={topPostsArray} />
            </Flex>
            <Flex display={{ base: "block", lg: "none" }} pb={10} pt={5}>
              <SocialMedia topPostsArray={topPostsArray} />
            </Flex>
        </ContentWrapper>
      </Box>
    </MainLayout>
  );
}

export async function getStaticPaths() {
  const totalPosts = await ContentfulApi.getTotalPostsNumber();
  const totalPages = Math.ceil(totalPosts / Config.pagination.pageSize);

  const paths = [];

  /**
   * Start from page 2, so we don't replicate /blog
   * which is page 1
   */
  for (let page = 2; page <= totalPages; page++) {
    paths.push({ params: { page: page.toString() } });
  }

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params, preview = false }) {
  const articleTags = await ContentfulApi.getAllUniquePostTags();

  const sortedBlogPostTags = articleTags.sort((a, b) =>
    a.name.localeCompare(b.name),
  );

  const posts = await ContentfulApi.getAllArticles();

  const topPostsIds = await ContentfulApi.getTopPostsIds();

  const topPostId1 = topPostsIds.tpostid1;
  const topPostId2 = topPostsIds.tpostid2;
  const topPostId3 = topPostsIds.tpostid3;
  const topPostId4 = topPostsIds.tpostid4;
  const topPostId5 = topPostsIds.tpostid5;

  const topPost1 = posts.find((p) => p.sys.id === topPostId1);
  const topPost2 = posts.find((p) => p.sys.id === topPostId2);
  const topPost3 = posts.find((p) => p.sys.id === topPostId3);
  const topPost4 = posts.find((p) => p.sys.id === topPostId4);
  const topPost5 = posts.find((p) => p.sys.id === topPostId5);

  const topPostsIdsArray = [
    topPostId1,
    topPostId2,
    topPostId3,
    topPostId4,
    topPostId5,
  ];

  const topPostsArray = [topPost1, topPost2, topPost3, topPost4, topPost5];

  const postSummaries = await ContentfulApi.getPaginatedPostSummaries(
    params.page,
  );
  const totalPages = Math.ceil(
    postSummaries.total / Config.pagination.pageSize,
  );
  const page = await ContentfulApi.getPageBySlug(
    Config.pageMeta.home.slug,
    {
      preview: preview,
    },
  );

  return {
    props: {
      preview,
      postSummaries: postSummaries.items,
      totalPages,
      currentPage: params.page,
      page: page || null,
      sortedBlogPostTags,
      topPostsArray,
    },
  };
}
