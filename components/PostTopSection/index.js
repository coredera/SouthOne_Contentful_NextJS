import TypographyStyles from "@styles/Typography.module.scss";
import ContentListStyles from "@styles/ContentList.module.css";
import Link from "next/link";
import Tags from "@components/Post/Tags";
import ReactMarkdownRenderers from "@utils/ReactMarkdownRenderers";
import ReactMarkdown from "react-markdown";
import PublishedDate from "@components/Post/PublishedDate";
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

export default function PostTopSection(props) {
  const featuredPost = props.post;

  return (
    <>
      <Box display={{ base: "none", lg: "block" }}>
        <ContentWrapper>
          <Flex>
            <Box maxWidth={600}>
              <h1 className={TypographyStyles.heading__h1post}>
                {featuredPost.title}
              </h1>

              <Box className={TypographyStyles.author}>
                {featuredPost.author !== null && (
                  <>
                    {" "}
                    <b>Author:</b> {featuredPost.author.name}
                  </>
                )}
              </Box>

              <Box alignSelf="center" className={TypographyStyles.date}>
                <b>Date: </b>
                <PublishedDate date={featuredPost.date} alignSelf="center" />
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
        </ContentWrapper>
      </Box>

      <Flex display={{ base: "block", lg: "none" }}>
        <ContentWrapper>
          <article className={ContentListStyles.contentList__post} style={{marginBottom:"0px"}}>
           
            <img
              src={featuredPost.image.url}
              width={featuredPost.image.width}
              height={featuredPost.image.height}
              layout="responsive"
             
              alt={featuredPost.image.description}
              style={{ borderRadius: "20px",
              objectFit: "cover",
              width: "950px",
              height: "400px",
            }}


             



            />
            <Flex pt={5} />
            <h1 className={TypographyStyles.heading__h1post}>
              {featuredPost.title}
            </h1>
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
            
          </article>
          
        </ContentWrapper>
      </Flex>
    </>
  );
}
