
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
} from "@chakra-ui/react";

export default function FeaturedPost(props) {
  const featuredPost = props.featuredPost;

  return (
    <>
      <Flex
        display={{ base: "none", md: "block" }}
        className={ContentListStyles.contentList__featuredPost}
        p={3}
      >
        <article style={{ display: featuredPost === null ? "none" : "block" }}>
          <Flex justifyContent>
            <Box pr={30}>
              <Link href={`/${featuredPost.slug}`}>
                <a className={ContentListStyles.contentList__titleLink}>
                  <h2 className={ContentListStyles.contentList__title}>
                    {featuredPost.title}
                  </h2>
                </a>
              </Link>
              <Box className={ContentListStyles.contentList__author}>
                {featuredPost.author !== null && (
                  <> Author: {featuredPost.author.name}</>
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

      <Flex display={{ base: "block", md: "none" }}>
        <article className={ContentListStyles.contentList__post}>
          <Link href={`/${featuredPost.slug}`}>
            <a>
              <img
                src={featuredPost.image.url}
                width={featuredPost.image.width}
                height={featuredPost.image.height}
                layout="responsive"
                objectFit="contain"
                alt={featuredPost.image.description}
              />
            </a>
          </Link>

          <Flex p={2} />
          <Link href={`/${featuredPost.slug}`}>
            <a className={ContentListStyles.contentList__titleLink}>
              <h2 className={ContentListStyles.contentList__title}>
                {featuredPost.title}
              </h2>
            </a>
          </Link>
          <Box className={ContentListStyles.contentList__author}>
            {featuredPost.author !== null && (
              <> Author: {featuredPost.author.name}</>
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
                  <h3 className={ContentListStyles.contentList__readmorelink}>
                    Read more
                  </h3>
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
