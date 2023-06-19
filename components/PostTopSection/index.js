import TypographyStyles from "@styles/Typography.module.scss";
import ContentListStyles from "@styles/ContentList.module.css";
import Link from "next/link";
import Tags from "@components/Post/Tags";
import ReactMarkdownRenderers from "@utils/ReactMarkdownRenderers";
import ReactMarkdown from "react-markdown";
import PublishedDate from "@components/Post/PublishedDate";
import ContentWrapper from "@components/ContentWrapper";
import ContentWrapperStyle from "@styles/ContentWrapper.module.css";
import { Config } from "@utils/Config";

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
  const featuredArticle = props.post;

  return (
    <>
      <Box bgColor={{ base: "#FFDF7F", lg: "transparent" }}>
        <Box display={{ base: "none", lg: "block" }}  height="450">
          <ContentWrapper>
            <div
              className={ContentListStyles.ellipse}
              style={{ top: "-600px", left: "-600px" }}
            />

            <Box style={{ position: "absolute", top: "142px" }}>
              <Flex alignItems="center" pb={0} pt={5}>
                <Box alignSelf="center">
                  <Flex
                    className={ContentListStyles.contentList__homelink}
                    minWidth="160"
                  >
                    <Box style={{ textDecoration: "underline" }}>
                      <Link href="https://www.guidedogs.org.uk">
                        <a>
                          <h3>Home</h3>
                        </a>
                      </Link>
                    </Box>
                    <Spacer />
                    <Box>&gt;</Box>
                    <Spacer />
                    <Box style={{ textDecoration: "underline" }}>
                      <Link href={`${Config.pageMeta.home.slug}`}>
                        <a>
                          <h3>Blog</h3>
                        </a>
                      </Link>
                    </Box>
                  </Flex>
                </Box>
                <Spacer />
              </Flex>
            </Box>
          </ContentWrapper>
        </Box>

        <Box
          alignItems="center"
          pt={2}
          pl={3}
          display={{ base: "block", lg: "none" }}
          bgColor="white"
          pb={0.5}
         
        >
          <Flex
            className={ContentListStyles.contentList__homelink}
            maxW="52"
            alignSelf="center"
          >
            <Box style={{ textDecoration: "underline" }}>
              <Link href="https://www.guidedogs.org.uk">
                <a>
                  <h3>Home</h3>
                </a>
              </Link>
            </Box>
            <Spacer />
            <Box>&gt;</Box>
            <Spacer />
            <Box style={{ textDecoration: "underline" }}>
              <Link href={`${Config.pageMeta.home.slug}`}>
                <a>
                  <h3>Blog</h3>
                </a>
              </Link>
            </Box>
            <Spacer />
          </Flex>
        </Box>

        <Box pt={10} pb={5}>
          <Box display={{ base: "none", lg: "block" }}>
            <ContentWrapper>
              <Box
                style={{
                  position: "absolute",
                  top: "240px",
                  paddingRight: "4rem",
                  maxWidth: "75rem",
                  width: "100%",
                }}
              >
                <Flex>
                  <Box maxWidth={600} pr={5}>
                    <h1 className={TypographyStyles.heading__h1post}>
                      {featuredArticle.title}
                    </h1>
                    <Box alignSelf="center" className={TypographyStyles.date}>
                      <b>Date: </b>
                      <PublishedDate
                        date={featuredArticle.datePublished}
                        alignSelf="center"
                      />
                    </Box>
                    <Box className={TypographyStyles.author}>
                      {featuredArticle.author !== null && (
                        <>
                          {" "}
                          <b>Author: {featuredArticle.author.name}</b>
                        </>
                      )}
                    </Box>

                    {featuredArticle.contentfulMetadata.tags !== null && (
                      <Tags tags={featuredArticle.contentfulMetadata.tags} />
                    )}
                  </Box>
                  <Spacer />
                  <Box maxWidth={600}>
                    <img
                      src={featuredArticle.image.url}
                      width="1200"
                      layout="responsive"
                      objectFit="contain"
                      alt={featuredArticle.image.description}
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
                  src={featuredArticle.image.url}
                  layout="responsive"
                  alt={featuredArticle.image.description}
                  style={{
                    borderRadius: "20px",
                    objectFit: "cover",
                    width: "60rem",
                  }}
                />
                <Flex pt={5} />
                <h1 className={TypographyStyles.heading__h1post}>
                  {featuredArticle.title}
                </h1>
                <Box alignSelf="center" className={TypographyStyles.date}>
                  <b>Date: </b>
                  <PublishedDate date={featuredArticle.datePublished} alignSelf="center" />
                </Box>
                <Box className={ContentListStyles.contentList__author}>
                  {featuredArticle.author !== null && (
                    <>
                      {" "}
                      <b> Author: {featuredArticle.author.name} </b>
                    </>
                  )}
                </Box>
                <Box pb={5}>
                  {featuredArticle.contentfulMetadata.tags !== null && (
                    <Tags tags={featuredArticle.contentfulMetadata.tags} />
                  )}
                </Box>
              </article>
            </ContentWrapper>
          </Flex>
        </Box>
      </Box>
    </>
  );
}
