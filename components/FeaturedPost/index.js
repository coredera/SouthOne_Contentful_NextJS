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
  const featuredPost = props.featuredPost;

  return (
    <>
      <Flex
        display={{ base: "none", lg: "block" }}
        className={ContentListStyles.contentList__featuredPost}
        p={0}
      >
        <article style={{ display: featuredPost === null ? "none" : "block" }}>
          <Flex justifyContent pt={20} pb={20}>
            <Box pr={30}>
              <Box pb={3}>
                <Link href={`/${featuredPost.slug}`}>
                  <a>
                    <h2 className={ContentListStyles.contentList__title}>
                      {featuredPost.title}
                    </h2>
                  </a>
                </Link>
              </Box>
              <Box className={ContentListStyles.contentList__author} pb={2}>
                {featuredPost.author !== null && (
                  <>
                    <b>Author: {featuredPost.author.name} </b>
                  </>
                )}
              </Box>
              {featuredPost.contentfulMetadata.tags !== null && (
                <Tags tags={featuredPost.contentfulMetadata.tags} />
              )}
              <div className={ContentListStyles.contentList__excerpt}>
                <ReactMarkdown
                  children={featuredPost.excerpt}
                  renderers={ReactMarkdownRenderers(featuredPost.excerpt)}
                />
              </div>
              <Flex alignItems="center">
                <Box alignSelf="center">
                  <Link href={`/${featuredPost.slug}`}>
                  <a>
                  <Flex className={ContentListStyles.contentList__readmorelink}>
                    <h3>Read more</h3>
                    <Box pl={2} alignSelf="center">
                      <img
                        src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/icon-arrow-blue.svg`}
                        width="12"
                        style={{ border: "none" }}
                      />
                    </Box>
                  </Flex>
                </a>
                  </Link>
                </Box>
                <Spacer />
                <Box alignSelf="center" className={TypographyStyles.bodyCopy}>
                  <PublishedDate date={featuredPost.date} alignSelf="center" />
                </Box>
              </Flex>
            </Box>
            <Spacer />
            <Box pl={30} width="70rem">
              <Link href={`/${featuredPost.slug}`}>
                <a>
                  <img
                    src={featuredPost.image.url}
                    width={featuredPost.image.width}
                    height={featuredPost.image.height}
                    layout="responsive"
                    objectFit="contain"
                    alt={featuredPost.image.description}
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
            <Link href={`/${featuredPost.slug}`}>
              <a>
                <img
                  src={featuredPost.image.url}
                  width={featuredPost.image.width}
                  height={featuredPost.image.height}
                  layout="responsive"
                  objectFit="contain"
                  alt={featuredPost.image.description}
                  style={{ borderRadius: "20px" }}
                />
              </a>
            </Link>
            <Spacer />
          </Flex>
          <Flex p={2} />
          <Link href={`/${featuredPost.slug}`}>
            <a>
              <h2 className={ContentListStyles.contentList__title}>
                {featuredPost.title}
              </h2>
            </a>
          </Link>
          <Box className={ContentListStyles.contentList__author} pt={5} pb={1}>
            {featuredPost.author !== null && (
              <>
                {" "}
                <b>Author: {featuredPost.author.name}</b>
              </>
            )}
          </Box>
          <Box pb={3}>
          {featuredPost.contentfulMetadata.tags !== null && (
            <Tags tags={featuredPost.contentfulMetadata.tags} />
          )}
          </Box>
          <div className={ContentListStyles.contentList__excerpt}>
            <ReactMarkdown
              children={featuredPost.excerpt}
              renderers={ReactMarkdownRenderers(featuredPost.excerpt)}
            />
          </div>
          <Flex alignItems="center">
            <Box alignSelf="center">
              <Link href={`/${featuredPost.slug}`}>
                <a>
                  <Flex className={ContentListStyles.contentList__readmorelink}>
                    <h3>Read more</h3>
                    <Box pl={2} alignSelf="center">
                      <img
                        src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/icon-arrow-blue.svg`}
                        width="12"
                        style={{ border: "none" }}
                      />
                    </Box>
                  </Flex>
                </a>
              </Link>
            </Box>
            <Spacer />
            <Box alignSelf="center" className={TypographyStyles.bodyCopy}>
              <PublishedDate date={featuredPost.date} alignSelf="center" />
            </Box>
          </Flex>
        </article>
      </Flex>
    </>
  );
}
