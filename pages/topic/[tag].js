import ContentfulApi from "@utils/ContentfulApi";
import Post from "@components/Post";
import PostTagEntry from "@components/PostTagEntry";
import { Config } from "@utils/Config";
import PageMeta from "@components/PageMeta";
import MainLayout from "@layouts/main";
import ContentWrapper from "@components/ContentWrapper";
import PostList from "@components/PostList";

import ContentListStyles from "@styles/ContentList.module.css";
import PublishedDate from "@components/Post/PublishedDate";
import Link from "next/link";
import ReactMarkdownRenderers from "@utils/ReactMarkdownRenderers";
import ReactMarkdown from "react-markdown";
//import Image from "next/image";
import Tags from "@components/Post/Tags";
import TypographyStyles from "@styles/Typography.module.scss";
import PopularTopics from "@components/PopularTopics";
import PopularPosts from "@components/PopularPosts";
import BlogBanner from "@components/BlogBanner";
import SocialMedia from "@components/SocialMedia";

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

export default function PostWrapper(props) {
  const {
    preview,
    currentPage,
    totalPages,
    posts,
    page,
    postSummaries,
    tag,
    tagname,
    sortedBlogPostTags,
    topPostsArray,
  } = props;

  const postListType = `/topic/${tag}/`;

  return (
    <MainLayout preview={preview}>
      <PageMeta
        title={`Read the latest ${tag} articles on our blog`}
        description={`Visit our blog today as we showcase the latest ${tag} articles. With opinions, insights and more it’s not to be missed!`}
        url={`${Config.pageMeta.blogIndex.url}/topic/${tag}`}
        canonical={`${Config.pageMeta.blogIndex.url}/topic/${tag}/`}
        metatitle={`Read the latest ${tag} articles on our blog`}
        metadescription={`Visit our blog today as we showcase the latest ${tag} articles. With opinions, insights and more it’s not to be missed!`}
      />

      <BlogBanner page={page} />

      <PopularTopics sortedBlogPostTags={sortedBlogPostTags} />

      <Box bgColor="brand.50" pt={10} pb={20}>
        <ContentWrapper>
          <Flex>
            <Box pr={0} width="100%">
              <PostList
                postListType={postListType}
                posts={posts}
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
  const articleTags = await ContentfulApi.getAllUniquePostTags();

  const paths = articleTags.map(({ id }) => {
    return { params: { tag: id } };
  });

  // Using fallback: "blocking" here enables preview mode for unpublished blog slugs
  // on production
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params, preview = false }) {
  const articleTags = await ContentfulApi.getAllUniquePostTags();

  const posts = await ContentfulApi.getAllArticles();

  const acc = [];

  var totalPages = Math.ceil(acc.length / Config.pagination.pageSize);

  //console.log(params.tag);

  const relatedPosts = posts.reduce((acc, post) => {
    if (
      post.contentfulMetadata &&
      post.contentfulMetadata.tags &&
      post.contentfulMetadata.tags.find(({ id }) => id === params.tag)
    ) {
      acc.push(post);

      //console.log(post.contentfulMetadata.tags);
      // console.log("ACC.........");
      // console.log(acc);
      //console.log("acc.lenth: " + acc.length);

      totalPages = Math.ceil(acc.length / Config.pagination.pageSize);
      return acc;
    }
    totalPages = Math.ceil(acc.length / Config.pagination.pageSize);

    return acc;
  }, []);

  const paginatedRelatedPosts = relatedPosts.slice(
    0,
    Config.pagination.pageSize,
  );

  // Add this with fallback: "blocking"
  // So that if we do not have a post on production,
  // the 404 is served
  if (relatedPosts.length === 0) {
    return {
      notFound: true,
    };
  }

  //from  [page].js

  const sortedBlogPostTags = articleTags.sort((a, b) =>
    a.name.localeCompare(b.name),
  );

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

  //  console.log("relatedPosts:")
  //  console.log(relatedPosts);

  const page = await ContentfulApi.getPageBySlug(
    Config.pageMeta.home.slug,
    {
      preview: preview,
    },
  );

  const postSummaries = await ContentfulApi.getPaginatedPostSummaries(
    params.page,
  );

  const tagrecord = articleTags.find(({ id }) => id === params.tag);
  const tagname = tagrecord.name;

  page.title = tagname;
  page.description = "";

  return {
    props: {
      preview,
      totalPages,
      currentPage: "1",
      posts: paginatedRelatedPosts,
      page,
      postSummaries,
      tag: params.tag,
      tagname: tagname,
      sortedBlogPostTags,
      topPostsArray,
    },
  };
}
