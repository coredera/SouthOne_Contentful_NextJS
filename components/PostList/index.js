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
      <Box>
        <ol className={ContentListStyles.contentList}>
          {posts.map((post) => (
            <li key={post.sys.id}>
              <Box bgColor="white" style={{ borderRadius: "20px" }}>
                <article className={ContentListStyles.contentList__post}>
                  <Box>
                    <Box>
                      <Link href={`/${post.slug}`}>
                        <a>
                          <img
                            src={post.image.url}
                            alt={post.image.description}
                            layout="responsive"
                            style={{
                              borderTopLeftRadius: "20px",
                              borderTopRightRadius: "20px",
                              objectFit: "cover",
                              width: "60rem",
                            }}
                          />
                        </a>
                      </Link>
                    </Box>
                  </Box>

                  <Box p={10} pb={12}>
                    <Flex pb={4}>
                      <Box>
                        <Link href={`/${post.slug}`}>
                          <a>
                            <h2
                              className={ContentListStyles.contentList__title}
                            >
                              {post.title}
                            </h2>
                          </a>
                        </Link>
                      </Box>
                    </Flex>
                    <Box pb={3}>
                      <b>Date: </b>
                      <PublishedDate date={post.date} alignSelf="center" />
                    </Box>

                    <Box className={ContentListStyles.contentList__author}>
                      {post.author !== null && (
                        <>
                          {" "}
                          <b> Author: {post.author.name} </b>
                        </>
                      )}
                    </Box>
                    <Flex p={1} />
                    <Box>
                      {post.contentfulMetadata.tags !== null && (
                        <Tags tags={post.contentfulMetadata.tags} />
                      )}
                    </Box>
                    <Box pb={5} pt={6}>
                      <div className={ContentListStyles.contentList__excerpt}>
                        <ReactMarkdown
                          children={post.excerpt}
                          renderers={ReactMarkdownRenderers(post.excerpt)}
                        />
                      </div>
                    </Box>
                    <Flex alignItems="center">
                      <Box alignSelf="center">
                        <Link href={`/${post.slug}`}>
                          <a>
                            <Flex
                              className={
                                ContentListStyles.contentList__readmorelink
                              }
                            >
                              Read more
                              <Box pl={2} alignSelf="center">
                                <img
                                  src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/icon-arrow-blue.svg`}
                                  width="12"
                                  style={{ border: "none" }}
                                  alt={`about ${post.title}`}
                                />
                              </Box>
                            </Flex>
                          </a>
                        </Link>
                      </Box>
                    </Flex>
                  </Box>
                </article>
              </Box>
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
      </Box>
    </>
  );
}
