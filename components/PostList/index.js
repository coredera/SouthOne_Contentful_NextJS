//import Image from "next/image";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import PublishedDate from "@components/Post/PublishedDate";
import Tags from "@components/Post/Tags";
import Pagination from "@components/PostList/Pagination";
import ContentListStyles from "@styles/ContentList.module.css";
import ReactMarkdownRenderers from "@utils/ReactMarkdownRenderers";
import { Config } from "@utils/Config";
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

export default function PostList(props) {
  const { postListType, posts, currentPage, totalPages } = props;
  const nextDisabled = parseInt(currentPage, 10) === parseInt(totalPages, 10);
  const prevDisabled = parseInt(currentPage, 10) === 1;

  return ( 
    <>
     

      <ol className={ContentListStyles.contentList}>
        {posts.map((post) => (
          <li key={post.sys.id}>
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
                {post.author !== null && <> Author: {post.author.name}</>}
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
                        className={ContentListStyles.contentList__readmorelink}
                      >
                        Read more
                      </h3>
                    </a>
                  </Link>
                </Box>
                <Spacer />
                <Box alignSelf="center" className={TypographyStyles.bodyCopy}>
                  <PublishedDate date={post.date} alignSelf="center" />
                </Box>
              </Flex>
            </article>
          </li>
        ))}
      </ol>

      <Pagination
        postListType={postListType}
        totalPages={totalPages}
        currentPage={currentPage}
        nextDisabled={nextDisabled}
        prevDisabled={prevDisabled}
      />
    </>
  );
}
