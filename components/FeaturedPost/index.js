import TypographyStyles from "@styles/Typography.module.scss";
import ContentListStyles from "@styles/ContentList.module.css";
import Link from "next/link";
import Tags from "@components/Post/Tags";
import ReactMarkdownRenderers from "@utils/ReactMarkdownRenderers";
import ReactMarkdown from "react-markdown";
import PublishedDate from "@components/Post/PublishedDate";

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
  background,
} from "@chakra-ui/react";

export default function FeaturedPost(props) {
  const featuredArticle = props.featuredArticle;

  return (
    <>
      <Flex
        display={{ base: "none", lg: "block" }}
        className={ContentListStyles.contentList__featuredArticle}
        p={0}
      >
        <article style={{ display: featuredArticle === null ? "none" : "block" }}>
          <Flex justifyContent pt={20} pb={20}>
            <Box pr={30}>
              <Box pb={3}>
                <Link href={`/${featuredArticle.slug}`}>
                  <a>
                    <h2 className={ContentListStyles.contentList__title}>
                      {featuredArticle.title}
                    </h2>
                  </a>
                </Link>
              </Box>
              <Box pb={3}>
                <b>Date: </b>
                <PublishedDate date={featuredArticle.date} alignSelf="center" />
              </Box>
              <Box className={ContentListStyles.contentList__author} pb={2}>
                {featuredArticle.author !== null && (
                  <>
                    <b>Author: {featuredArticle.author.name} </b>
                  </>
                )}
              </Box>
              {featuredArticle.contentfulMetadata.tags !== null && (
                <Tags tags={featuredArticle.contentfulMetadata.tags} />
              )}
              <Box pt={6}>
                <div className={ContentListStyles.contentList__excerpt}>
                  <ReactMarkdown
                    children={featuredArticle.excerpt}
                    renderers={ReactMarkdownRenderers(featuredArticle.excerpt)}
                  />
                </div>
              </Box>

              <Flex alignItems="center">
                <Box alignSelf="center">
                  <Link href={`/${featuredArticle.slug}`} >
                    <a>
                      <Flex
                        className={ContentListStyles.contentList__readmorelink}
                      >
                        Read more
                        <Box pl={2} alignSelf="center">
                          <img
                            src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/icon-arrow-blue.svg`}
                            width="12"
                            style={{ border: "none" }}
                            alt={`about ${featuredArticle.title}`}
                          />
                        </Box>
                      </Flex>
                    </a>
                  </Link>
                </Box>
              </Flex>
            </Box>
            <Spacer />
            <Box pl={30} width="70rem">
              <Link href={`/${featuredArticle.slug}`}>
                <a>
                  <img
                    src={featuredArticle.image.url}
                    width={featuredArticle.image.width}
                    height={featuredArticle.image.height}
                    layout="responsive"
                    objectFit="contain"
                    alt={featuredArticle.image.description}
                    style={{ borderRadius: "20px" }}
                  />
                </a>
              </Link>
            </Box>
          </Flex>
        </article>
      </Flex>

      <Flex display={{ base: "block", lg: "none" }}>
        <article className={ContentListStyles.contentList__post}>
          <Flex>
            <Spacer />
            <Link href={`/${featuredArticle.slug}`}>
              <a>
                <img
                  src={featuredArticle.image.url}
                  width={featuredArticle.image.width}
                  height={featuredArticle.image.height}
                  layout="responsive"
                  objectFit="contain"
                  alt={featuredArticle.image.description}
                  style={{ borderRadius: "20px" }}
                />
              </a>
            </Link>
            <Spacer />
          </Flex>
          <Flex p={2} />
          <Link href={`/${featuredArticle.slug}`}>
            <a>
              <h2 className={ContentListStyles.contentList__title}>
                {featuredArticle.title}
              </h2>
            </a>
          </Link>
          <Flex pb={5} />
          <Box pb={2}>
            <b>Date: </b>
            <PublishedDate date={featuredArticle.date} alignSelf="center" />
          </Box>
          <Box className={ContentListStyles.contentList__author} pt={0} pb={1}>
            {featuredArticle.author !== null && (
              <>
                {" "}
                <b>Author: {featuredArticle.author.name}</b>
              </>
            )}
          </Box>
          <Box pb={5}>
            {featuredArticle.contentfulMetadata.tags !== null && (
              <Tags tags={featuredArticle.contentfulMetadata.tags} />
            )}
          </Box>
          <div className={ContentListStyles.contentList__excerpt}>
            <ReactMarkdown
              children={featuredArticle.excerpt}
              renderers={ReactMarkdownRenderers(featuredArticle.excerpt)}
            />
          </div>
          <Flex alignItems="center">
            <Box alignSelf="center">
              <Link href={`/${featuredArticle.slug}`}>
                <a>
                  <Flex className={ContentListStyles.contentList__readmorelink}>
                    Read more
                    <Box pl={2} alignSelf="center">
                      <img
                        src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/icon-arrow-blue.svg`}
                        width="12"
                        style={{ border: "none" }}
                        alt={`about ${featuredArticle.title}`}
                      />
                    </Box>
                  </Flex>
                </a>
              </Link>
            </Box>
          </Flex>
        </article>
      </Flex>
    </>
  );
}
