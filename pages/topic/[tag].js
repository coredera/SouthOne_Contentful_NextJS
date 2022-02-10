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
  const { preview, currentPage, totalPages, posts, tag } = props;

  const postListType = `/topic/${tag}/`;

  return (
    <MainLayout preview={preview}>
      <PageMeta title={"Tag"} description={""} url={""} canonical={false} />
      <ContentWrapper>
      <Flex
        alignItems="center"
       
        pb={20}
        pt={5}
      >
        <Box alignSelf="center">
          <Link href={`${Config.pageMeta.home.slug}`}>
            <a>
            <Flex>
                  <h3 className={ContentListStyles.contentList__readmorelink}>
                    <Box alignSelf="center" pr={1.5}>
                      <img
                        src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/arrow-left--left-small.svg`}
                        width={15}
                        height={15}
                      />
                    </Box>
                    <Box>
                    {" "}
                    Go to home
                    </Box>
                  </h3>
                </Flex>
            </a>
          </Link>
        </Box>
        <Spacer />
      </Flex>
      <PostList
          postListType = {postListType}
          posts={posts}
          totalPages={totalPages}
          currentPage={currentPage}
        />
      </ContentWrapper>
    </MainLayout>
  );
}

export async function getStaticPaths() {
  const blogPostTags = await ContentfulApi.getAllUniquePostTags();

  const paths = blogPostTags.map(({ id }) => {
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
  const posts = await ContentfulApi.getAllBlogPosts();

  const acc =[];

  var totalPages = Math.ceil(
    acc.length / Config.pagination.pageSize,
  );

  const relatedPosts = posts.reduce((acc, post) => {
    if ( 
      post.contentfulMetadata &&
      post.contentfulMetadata.tags &&
      post.contentfulMetadata.tags.find(({ id }) => id === params.tag)
    ) {
      acc.push(post);

      console.log("ACC.........");
      console.log(acc);

      totalPages = Math.ceil(
        acc.length / Config.pagination.pageSize,
      );
      return acc;
    }
    totalPages = Math.ceil(
      acc.length / Config.pagination.pageSize,
    );

    return acc;
  }, []);

  const paginatedRelatedPosts = relatedPosts.slice(0, Config.pagination.pageSize);


  // Add this with fallback: "blocking"
  // So that if we do not have a post on production,
  // the 404 is served
  if (relatedPosts.length === 0) {
    return {
      notFound: true,
    };
  }


  console.log("totalPages:")
  console.log(totalPages);
  
  return {
    props: {
      preview,
      totalPages,
      currentPage: "1",
      posts: paginatedRelatedPosts,
      tag: params.tag,
    },
  };
}
  