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

  //{pageContent.body && (
  //  <RichTextPageContent
  //    richTextBodyField={pageContent.body}
  //    className={TypographyStyles.bodyCopy}
  //  />
  //)}


  //<img src={pageContent.heroBanner.image.url} 
  //style={{ position: "absolute", top: "142px", width:"100%", height:"480px", objectFit:"cover",  }}
  ///>


  return (
    <>
      <Box
        backgroundImage={pageContent.heroBanner.image.url}
        height="450"
        bgRepeat="no-repeat"
        
        display={{ base: "none", lg: "block" }}
        style={{ backgroundPosition: "center center", backgroundSize:"cover" }}
      >
      
        <Box
          bgSize="contain"
          bgRepeat="no-repeat"
          bgPos="center"
          className={ContentListStyles.contentList__landingTopSection}
          height="430"
        >
          <ContentWrapper>
            <div className={ContentListStyles.ellipse} />

            <Box style={{ position: "absolute", top: "142px" }}>
              <Flex alignItems="center" pb={0} pt={5}>
                <Box alignSelf="center">
                  <Flex
                    className={ContentListStyles.contentList__homelink}
                    minWidth="160"
                  >
                    <Box style={{ textDecoration: "underline" }}>
                      <Link href="https://www.examplesite.org.uk">
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
              <Flex>
                <Box pb={10} pt={7} maxWidth="600">
                  <h1 className={TypographyStyles.heading__h1}>
                    {pageContent.title}
                  </h1>
                  <div className={TypographyStyles.bodyCopy}>
                    {pageContent.description}
                  </div>
                </Box>
                <Box></Box>
              </Flex>
            </Box>
          </ContentWrapper>
        </Box>
      </Box>

      <Box display={{ base: "block", lg: "none" }} pb={0} marginBottom="0px">
        <Box alignItems="center" pt={2} pl={3}>
          <Flex
            className={ContentListStyles.contentList__homelink}
            maxW="52"
            alignSelf="center"
          >
            <Box style={{ textDecoration: "underline" }}>
              <Link href="https://www.examplesite.org.uk">
                <a>
                  <h3>Home</h3>
                </a>
              </Link>
            </Box>
            <Spacer />
            <Box>{">"}</Box>
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
          marginBottom="0"
        >
          {pageContent.title}
        </Box>
      </Box>
    </>
  );
}
