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

export default function PostTopSection(props) {
  const featuredPost = props.post;

  return (
    <>
      <Flex display={{ base: "none", md: "block" }} p={0}>
        <article>
          <Flex pb={5} className={TypographyStyles.heading_h1}>
            <h1 className={TypographyStyles.heading__h1}>
              {featuredPost.title}
            </h1>
          </Flex>
          <Flex>
            <Box pr={30}>
              <Flex>
                <Box className={ContentListStyles.contentList__author}>
                  {featuredPost.author !== null && (
                    <> Author: {featuredPost.author.name}</>
                  )}
                </Box>
                <Spacer />
                <Box alignSelf="center" className={TypographyStyles.bodyCopy}>
                  <PublishedDate date={featuredPost.date} alignSelf="center" />
                </Box>
              </Flex>

              {featuredPost.contentfulMetadata.tags !== null && (
                <Tags tags={featuredPost.contentfulMetadata.tags} />
              )}
              <div className={ContentListStyles.contentList__excerpt}>
                <ReactMarkdown
                  children={featuredPost.excerpt}
                  renderers={ReactMarkdownRenderers(featuredPost.excerpt)}
                />
              </div>
            </Box>
            <Spacer />
            <Box pl={30} width="80rem">
              <img
                src={featuredPost.image.url}
                width={featuredPost.image.width}
                height={featuredPost.image.height}
                layout="responsive"
                objectFit="contain"
                alt={featuredPost.image.description}
                style={{ borderRadius: "20px" }}
              />
            </Box>
          </Flex>
        </article>
      </Flex>

      <Flex display={{ base: "block", md: "none" }}>
        <article className={ContentListStyles.contentList__post}>
          <h1 className={TypographyStyles.heading__h1}>{featuredPost.title}</h1>
          <Flex>
            <Box className={ContentListStyles.contentList__author}>
              {featuredPost.author !== null && (
                <> Author: {featuredPost.author.name}</>
              )}
            </Box>
            <Spacer />
            <Box alignSelf="center" className={TypographyStyles.bodyCopy}>
              <PublishedDate date={featuredPost.date} alignSelf="center" />
            </Box>
          </Flex>

          {featuredPost.contentfulMetadata.tags !== null && (
            <Tags tags={featuredPost.contentfulMetadata.tags} />
          )}

          <Flex p={2} />

          <img
            src={featuredPost.image.url}
            width={featuredPost.image.width}
            height={featuredPost.image.height}
            layout="responsive"
            objectFit="contain"
            alt={featuredPost.image.description}
            style={{ borderRadius: "20px" }}
          />

      
    
        </article>
      </Flex>
    </>
  );
}
