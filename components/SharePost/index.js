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

import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  EmailShareButton,
  EmailIcon,
  WhatsappShareButton,
  WhatsappIcon,
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
} from "react-share";

export default function SharePost(props) {
  const post = props.post;

  return (
    <>
      <Box className={ContentListStyles.contentList__sharePost}>
        <Flex pb={3} pt={0}>Share post</Flex>
        <Flex>
        <Box pr={3}>
          <FacebookShareButton
            url={`${Config.pageMeta.blogIndex.url}/${post.slug}`}
            quote={`${post.title}`}
            hashtag={`#${post.title}`}
          >
            <FacebookIcon size={30} round />
          </FacebookShareButton>
        </Box>
        <Box pr={3}>
          <FacebookMessengerShareButton
            url={`${Config.pageMeta.blogIndex.url}/${post.slug}`}
            appId={""}
          >
            <FacebookMessengerIcon size={30} round />
          </FacebookMessengerShareButton>
        </Box>
        <Box pr={3}>
          <TwitterShareButton
            url={`${Config.pageMeta.blogIndex.url}/${post.slug}`}
            title={`${post.title}`}
          >
            <TwitterIcon size={30} round />
          </TwitterShareButton>
        </Box>
        <Box pr={3}>
          <WhatsappShareButton
            url={`${Config.pageMeta.blogIndex.url}/${post.slug}`}
            title={`${post.title}`}
            separator=":: "
          >
            <WhatsappIcon size={30} round />
          </WhatsappShareButton>
        </Box>
        <Box>
          <EmailShareButton
            url={`${Config.pageMeta.blogIndex.url}/${post.slug}`}
            subject={`${post.title}`}
            body="body"
          >
            <EmailIcon size={30} round />
          </EmailShareButton>
        </Box>
        </Flex>
      </Box>
    </>
  );
}
