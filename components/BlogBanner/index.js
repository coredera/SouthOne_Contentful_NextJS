import TypographyStyles from "@styles/Typography.module.scss";
import ContentListStyles from "@styles/ContentList.module.css";
import Link from "next/link";
import Tags from "@components/Post/Tags";
import ReactMarkdownRenderers from "@utils/ReactMarkdownRenderers";
import ReactMarkdown from "react-markdown";
import PublishedDate from "@components/Post/PublishedDate";
import ContentWrapper from "@components/ContentWrapper";
import { Config } from "@utils/Config";
import RichTextPageContent from "@components/RichTextPageContent";

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
  textDecoration,
} from "@chakra-ui/react";

export default function BlogBanner(props) {
  const pageContent = props.pageContent;

  return (
    <>
      <Box
        backgroundImage={pageContent.heroBanner.image.url}
        height="450"
        bgRepeat="no-repeat"
        bgSize="cover"
        bgPosition="center"
        display={{ base: "none", lg: "block" }}
      >
        <Box
          backgroundImage={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/top-left-swirl.svg`}
          bgSize="contain"
          bgRepeat="no-repeat"
          bgPos="top-left"
          className={ContentListStyles.contentList__landingTopSection}
          height="430"
        >
          <ContentWrapper>
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
                  <Box>></Box>
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
            <Flex>
              <Box pb={10} pt={7} maxWidth="600">
                <h1 className={TypographyStyles.heading__h1}>
                  {pageContent.title}
                </h1>
                {pageContent.body && (
                  <RichTextPageContent
                    richTextBodyField={pageContent.body}
                    className={TypographyStyles.bodyCopy}
                  />
                )}
              </Box>
              <Box></Box>
            </Flex>
          </ContentWrapper>
        </Box>
      </Box>

      <Box display={{ base: "block", lg: "none" }}>
        <Box
          backgroundImage={pageContent.heroBanner.image.url}
          height="300"
          bgRepeat="no-repeat"
          bgSize="cover"
          bgPosition="center"
        />

        <Box
          bgColor="#FFDF7F"
          pb={10}
          className={TypographyStyles.heading__h1}
          textAlign="center"
          pt={8}
          pr={5}
          pl={5}
          fontSize="2.5em"
        >
          {pageContent.title}
        </Box>
      </Box>
    </>
  );
}
