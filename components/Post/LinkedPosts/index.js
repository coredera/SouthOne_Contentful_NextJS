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
  //console.log(posts);
  //display="flex"

  return (
    <>
      <ContentWrapper>
        <Box>
          {posts.length > 0 ? (
            <Flex className={TypographyStyles.heading__h3} pb={2}>
              You might also like...
            </Flex>
          ) : (
            ""
          )}

          <Flex direction={{ base: "column", lg: "row" }}>
            {posts.map((post, i) =>
              post ? (
                <>
                  <Box
                    key={post.sys.id}
                    width="full"
                    height="full"
                    pb={10}
                    flexDirection="column"
                    flexFlow="column"
                    flexGrow="1"
                    display="flex"
                    flex="1 1 auto"
                  >
                    <Box className={ContentListStyles.pods}>
                      <article>
                        <Box>
                          <Box>
                            <Link legacyBehavior href={`/${post.slug}`}>
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
                                      width: "80rem",
                                    }}
                                  />
                                </Box>
                              </a>
                            </Link>
                          </Box>
                        </Box>

                        <Box p={8}>
                          <Flex pb={0}>
                            <Box>
                              <Link legacyBehavior href={`/${post.slug}`}>
                                <a>
                                  <h2
                                    className={`${TypographyStyles.heading__h6} ${TypographyStyles.inlineLink}`}
                                    style={{ marginBottom: "0" }}
                                  >
                                    {post.title}
                                  </h2>
                                </a>
                              </Link>
                            </Box>
                          </Flex>

                          <Box pb={8} pt={6}>
                            <div
                              className={ContentListStyles.contentList__excerpt}
                              style={{ marginBottom: "-3rem" }}
                            >
                              <ReactMarkdown
                                children={post.excerpt}
                                renderers={ReactMarkdownRenderers(post.excerpt)}
                              />
                            </div>
                          </Box>
                        </Box>
                      </article>
                    </Box>
                  </Box>

                  {i < 2 ? <Spacer p={5} /> : ""}
                </>
              ) : (
                ""
              ),
            )}
          </Flex>
        </Box>
      </ContentWrapper>
    </>
  );
}
