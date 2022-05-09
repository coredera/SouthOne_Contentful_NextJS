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
import ContentWrapper from "@components/ContentWrapper";

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

export default function LinkedPosts(props) {
  const { posts } = props;
  console.log(posts);

  return (
    <>
      <ContentWrapper>
        <Box>
          <Flex  direction={{ base: "column", lg: "row" }}>
            {posts.map((post) => (
              <>
                <Box key={post.sys.id} maxW="30em"  pr={10}>
                  <Box className={ContentListStyles.pods} >
                    <article>
                      <Box>
                        <Box>
                          <Link href={`/${post.slug}`}>
                            <a>
                              <Box>
                                <img
                                  src={`${post.image.url}?fm=jpg&q=50`}
                                  alt={post.image.description}
                                  layout="responsive"
                                  style={{
                                    borderTopLeftRadius: "10px",
                                    borderTopRightRadius: "10px",
                                    objectFit: "cover",
                                    width: "60rem",
                                  }}
                                />
                              </Box>
                            </a>
                          </Link>
                        </Box>
                      </Box>

                      <Box p={10} pt={5}>
                        <Flex pb={0}>
                          <Box >
                            <Link href={`/${post.slug}`}>
                              <a>
                                <h2
                                  className={`${TypographyStyles.heading__h6} ${TypographyStyles.inlineLink}`}
                                  style={{marginBottom:"0"}}
                                >
                                  
                                  {post.title}
                                 
                                </h2>
                              </a>
                            </Link>
                          </Box>
                        </Flex>

                       

                        <Box pb={0} pt={6}>
                          <div
                            className={ContentListStyles.contentList__excerpt}
                          >
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
                </Box>
                <Spacer />
              </>
            ))}
          </Flex>
        </Box>
      </ContentWrapper>
    </>
  );
}
