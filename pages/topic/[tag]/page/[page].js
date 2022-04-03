import ContentfulApi from "@utils/ContentfulApi";
import { Config } from "@utils/Config";
import PageMeta from "@components/PageMeta";
import PostList from "@components/PostList";
import RichTextPageContent from "@components/RichTextPageContent";
import MainLayout from "@layouts/main";
import ContentWrapper from "@components/ContentWrapper";
import PageContentWrapper from "@components/PageContentWrapper";
import HeroBanner from "@components/HeroBanner";
import PopularTopics from "@components/PopularTopics";
import PopularPosts from "@components/PopularPosts";
import BlogBanner from "@components/BlogBanner";

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
  Checkbox,
} from "@chakra-ui/react";

export default function BlogIndexPage(props) {
  const { posts, totalPages, currentPage, pageContent, preview, tag, sortedBlogPostTags,topPostsArray } = props;

  const postListType = `/topic/${tag}/`;

  /**
   * This provides some fallback values to PageMeta so that a pageContent
   * entry is not required for /blog
   */
  const pageTitle = pageContent ? pageContent.title : "Blog";
  const pageDescription = pageContent
    ? pageContent.description
    : "Articles | Next.js Contentful blog starter";

  return (
    <MainLayout preview={preview}>
      <PageMeta
        title={`${pageTitle} Page ${currentPage}`}
        description={pageDescription}
        url={`${Config.pageMeta.blogIndex.url}/page/${currentPage}`}
        metatitle={`Read The Latest ${tag} Articles On Our Blog - page ${currentPage}`}
        metadescription={`Visit our blog today as we showcase the latest ${tag} articles. With opinions, insights and more it’s not to be missed!`}
      />

      <BlogBanner pageContent={pageContent} />

      <PopularTopics sortedBlogPostTags={sortedBlogPostTags} />

      <Box bgColor="brand.50" pt={10} pb={20}>
        <ContentWrapper>
          <Flex>
            <Box pr={0}>
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
}

export async function getStaticPaths() {
  //const totalPosts = await ContentfulApi.getTotalPostsNumber();
  //const totalPages = Math.ceil(totalPosts / Config.pagination.pageSize);

  //const paths = [];
  //const tag = "puppy";

  const paths = [];

  const posts = await ContentfulApi.getAllBlogPosts();

  const blogPostTags = await ContentfulApi.getAllUniquePostTags();

  const temp = blogPostTags.map(({ id }) => {
    //const id = "puppy";

    //for(const fid of blogPostTags){

    const acc = [];

    var totalPages = Math.ceil(acc.length / Config.pagination.pageSize);

    const relatedPosts = posts.reduce((acc, post) => {
      if (
        post.contentfulMetadata &&
        post.contentfulMetadata.tags &&
        post.contentfulMetadata.tags.find(({ id }) => id === id)
      ) {
        acc.push(post);

        // console.log("ACC.........");
        // console.log(acc);

        totalPages = Math.ceil(acc.length / Config.pagination.pageSize);
        return acc;
      }
      totalPages = Math.ceil(acc.length / Config.pagination.pageSize);

      return acc;
    }, []);

    for (let page = 2; page <= totalPages; page++) {
      paths.push(
        { params: { page: page.toString(), tag: id } },
        // { params: { tag } }
      );
    }
  });

  // return { params: { tag: id } };
  //});

  /**
   * Start from page 2, so we don't replicate /blog
   * which is page 1
   */

  //for (let page = 2; page <= totalPages; page++) {
  //  paths.push(
  //    { params: { page: page.toString(), tag: tag}},
  // { params: { tag } }

  //  );
  //}

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params, preview = false }) {
  const posts = await ContentfulApi.getAllBlogPosts();

  const pageContent = await ContentfulApi.getPageContentBySlug(
    Config.pageMeta.blogIndex.slug,
    {
      preview: preview,
    },
  );

  const acc = [];

  var totalPages = Math.ceil(acc.length / Config.pagination.pageSize);

  const relatedPosts = posts.reduce((acc, post) => {
    if (
      post.contentfulMetadata &&
      post.contentfulMetadata.tags &&
      post.contentfulMetadata.tags.find(({ id }) => id === params.tag)
    ) {
      acc.push(post);

      // console.log("ACC.........");
      // console.log(acc.length);
      // console.log(acc);

      totalPages = Math.ceil(acc.length / Config.pagination.pageSize);
      return acc;
    }
    totalPages = Math.ceil(acc.length / Config.pagination.pageSize);

    return acc;
  }, []);

  const paginatedRelatedPosts = relatedPosts.slice(
    params.page * Config.pagination.pageSize - Config.pagination.pageSize,
    params.page * Config.pagination.pageSize,
  );

  // Add this with fallback: "blocking"
  // So that if we do not have a post on production,
  // the 404 is served
  if (relatedPosts.length === 0) {
    return {
      notFound: true,
    };
  }

  const blogPostTags = await ContentfulApi.getAllUniquePostTags();

  const sortedBlogPostTags = blogPostTags.sort((a, b) =>
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

  const tagrecord = blogPostTags.find(({ id }) => id === params.tag);
  const tagname = tagrecord.name;

  pageContent.title = tagname;
  pageContent.description = "";


  //console.log("totalPages:")
  //console.log(totalPages);

  return {
    props: {
      preview,
      totalPages,
      currentPage: params.page,
      posts: paginatedRelatedPosts,
      tag: params.tag,
      pageContent: pageContent || null,
      sortedBlogPostTags,
      topPostsArray,
    },
  };
}
