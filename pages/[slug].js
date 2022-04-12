import ContentfulApi from "@utils/ContentfulApi";
import Post from "@components/Post";
import { Config } from "@utils/Config";
import PageMeta from "@components/PageMeta";
import MainLayout from "@layouts/main";
import ContentWrapper from "@components/ContentWrapper";
import PopularTopics from "@components/PopularTopics";
import PostTopSection from "@components/PostTopSection";
import Author from "@components/Post/Author";
import PopularPosts from "@components/PopularPosts";
import SharePost from "@components/SharePost";
import { Embed } from "hyvor-talk-react";

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

export default function PostWrapper(props) {
  const { sortedBlogPostTags, topPostsArray, post, preview } = props;

  const hyvor = `${process.env.NEXT_PUBLIC_HYVOR_ID}`;

  return (
    <MainLayout preview={preview}>
      <PageMeta
        title={post.title}
        description={post.excerpt}
        url={`${Config.pageMeta.blogIndex.url}/${post.slug}`}
        canonical={post.externalUrl ? post.externalUrl : `${Config.pageMeta.blogIndex.url}/${post.slug}`}
        image={post.image.url}
        date={post.date}
        authortype={post.author.type}
        authorname={post.author.name}
        authorurl={post.author.websiteUrl}
        metatitle={post.metaTitle}
        metadescription={post.metaDescription}
      />

      <PostTopSection post={post} />

      <ContentWrapper>
        <Box>
          <Flex display={{ base: "block", lg: "none" }} pb={0} pt={10}>
            <SharePost post={post} />
          </Flex>
          <Flex>
            <Box width="full" pt={10} pr={0}>
              <Post post={post} />
            </Box>

            <Spacer />
            <Box
              display={{ base: "none", lg: "block" }}
              minW="368"
              maxW="368"
              pt={10}
              pl={10}
            >
              <SharePost post={post} />
              <Box pt={8}>
                <PopularPosts topPostsArray={topPostsArray} />
              </Box>
            </Box>
          </Flex>
          <Box display={{ base: "block", lg: "none" }} pb={10} pt={10}>
            <PopularPosts topPostsArray={topPostsArray} />
          </Box>
        </Box>
      </ContentWrapper>

      <Box bgColor="brand.100" p={7} pb={14}>
        {post.author !== null && <Author author={post.author} />}
      </Box>
      <Flex p={10}></Flex>
    </MainLayout>
  );
}

export async function getStaticPaths() {
  const blogPostSlugs = await ContentfulApi.getAllPostSlugs();

  const paths = blogPostSlugs.map((slug) => {
    return { params: { slug } };
  });

  // Using fallback: "blocking" here enables preview mode for unpublished blog slugs
  // on production
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params, preview = false }) {
  const post = await ContentfulApi.getPostBySlug(params.slug, {
    preview: preview,
  });

  const blogPostTags = await ContentfulApi.getAllUniquePostTags();

  const sortedBlogPostTags = blogPostTags.sort((a, b) =>
    a.name.localeCompare(b.name),
  );

  const posts = await ContentfulApi.getAllBlogPosts();

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

  // Add this with fallback: "blocking"
  // So that if we do not have a post on production,
  // the 404 is served
  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      sortedBlogPostTags,
      topPostsArray,
      preview,
      post,
    },
  };
}
