import TypographyStyles from "@styles/Typography.module.scss";
import ContentListStyles from "@styles/ContentList.module.css";
import Link from "next/link";
import Tags from "@components/Post/Tags";
import ReactMarkdownRenderers from "@utils/ReactMarkdownRenderers";
import ReactMarkdown from "react-markdown";
import PublishedDate from "@components/Post/PublishedDate";
import ContentWrapper from "@components/ContentWrapper";
import ContentWrapperStyle from "@styles/ContentWrapper.module.css";

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
      <Box display={{ base: "none", lg: "block" }}>
        <ContentWrapper>
          <Box
            style={{
              position: "absolute",
              top: "240px",
              paddingRight: "128px",
              maxWidth: "1280px",
              width: "100%",
            }}
          >
            <Flex>
              <Box maxWidth={600} pr={5}>
                <h1 className={TypographyStyles.heading__h1post}>
                  {featuredPost.title}
                </h1>
                <Box alignSelf="center" className={TypographyStyles.date}>
                  <b>Date: </b>
                  <PublishedDate date={featuredPost.date} alignSelf="center" />
                </Box>
                <Box className={TypographyStyles.author}>
                  {featuredPost.author !== null && (
                    <>
                      {" "}
                      <b>Author: {featuredPost.author.name}</b>
                    </>
                  )}
                </Box>

                {featuredPost.contentfulMetadata.tags !== null && (
                  <Tags tags={featuredPost.contentfulMetadata.tags} />
                )}
              </Box>
              <Spacer />
              <Box maxWidth={600}>
                <img
                  src={featuredPost.image.url}
                  width="1200"
                  layout="responsive"
                  objectFit="contain"
                  alt={featuredPost.image.description}
                  style={{ borderRadius: "20px" }}
                />
              </Box>
            </Flex>
          </Box>
        </ContentWrapper>
      </Box>

      <Flex display={{ base: "block", lg: "none" }}>
        <ContentWrapper>
          <article
            className={ContentListStyles.contentList__post}
            style={{ marginBottom: "0px" }}
          >
            <img
              src={featuredPost.image.url}
              layout="responsive"
              alt={featuredPost.image.description}
              style={{
                borderRadius: "20px",
                objectFit: "cover",
              }}
            />
            <Flex pt={5} />
            <h1 className={TypographyStyles.heading__h1post}>
              {featuredPost.title}
            </h1>
            <Box alignSelf="center" className={TypographyStyles.date}>
              <b>Date: </b>
              <PublishedDate date={featuredPost.date} alignSelf="center" />
            </Box>
            <Box className={ContentListStyles.contentList__author}>
              {featuredPost.author !== null && (
                <>
                  {" "}
                  <b> Author: {featuredPost.author.name} </b>
                </>
              )}
            </Box>
            <Box pb={5}>
              {featuredPost.contentfulMetadata.tags !== null && (
                <Tags tags={featuredPost.contentfulMetadata.tags} />
              )}
            </Box>
          </article>
        </ContentWrapper>
      </Flex>
    </>
  );
}
