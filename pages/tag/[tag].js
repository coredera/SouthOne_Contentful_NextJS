import ContentfulApi from "@utils/ContentfulApi";
import Post from "@components/Post";
import PostTagEntry from "@components/PostTagEntry";
import { Config } from "@utils/Config";
import PageMeta from "@components/PageMeta";
import MainLayout from "@layouts/main";
import ContentWrapper from "@components/ContentWrapper";
import ContentListStyles from "@styles/ContentList.module.css";
import PublishedDate from "@components/Post/PublishedDate";
import Link from "next/link";
import ReactMarkdownRenderers from "@utils/ReactMarkdownRenderers";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
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
  const { preview, posts } = props;

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
              <h3 className={ContentListStyles.contentList__readmorelink}>
              
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/arrow-left--left-small.svg`}
                  height="10em"
                  width="10em"
                  
                />
        
              
                 {" "}Go to home
                
                 
              </h3>
            </a>
          </Link>
        </Box>
        <Spacer />
      </Flex>
      <ol className={ContentListStyles.contentList}>
        {posts.map((post) => (
          <li key={post.sys.id}>
            <article className={ContentListStyles.contentList__post}>
            <Link href={`${Config.pageMeta.blogIndex.url}/${post.slug}`}>
                <a>
                  <Image
                    src={post.image.url}
                    width="60em"
                    height="30em"
                    layout="responsive"
                    objectFit="contain"
                    alt={post.image.description}
                  />
                </a>
              </Link>

              <Flex p={2} />
              <Link href={`${Config.pageMeta.blogIndex.url}/${post.slug}`}>
                <a className={ContentListStyles.contentList__titleLink}>
                  <h2 className={ContentListStyles.contentList__title}>
                    {post.title}
                  </h2>
                </a>
              </Link>
              <Box className={ContentListStyles.contentList__author}>Author: {post.author.name}</Box>
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
                  <Link href={`${Config.pageMeta.blogIndex.url}/${post.slug}`}>
                    <a>
                      <h3 className={ContentListStyles.contentList__readmorelink}>
                        Read more
                      </h3>
                    </a>
                  </Link>
                </Box>
                <Spacer />
                <Box alignSelf="center" className={TypographyStyles.bodyCopy}>
                  <PublishedDate date={post.date} alignSelf="center"/>
                </Box>
              </Flex>
            </article>
          </li>
        ))}
      </ol>
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
    fallback: "blocking",
  };
}

export async function getStaticProps({ params, preview = false }) {
  const posts = await ContentfulApi.getAllBlogPosts();

  const relatedPosts = posts.reduce((acc, post) => {
    if ( 
      post.contentfulMetadata &&
      post.contentfulMetadata.tags &&
      post.contentfulMetadata.tags.find(({ id }) => id === params.tag)
    ) {
      acc.push(post);
      return acc;
    }
    return acc;
  }, []);

  // Add this with fallback: "blocking"
  // So that if we do not have a post on production,
  // the 404 is served
  if (relatedPosts.length === 0) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      preview,
      posts: relatedPosts,
    },
  };
}
