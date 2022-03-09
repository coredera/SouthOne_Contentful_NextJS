import { FastCommentsCommentWidget } from "fastcomments-react";
import { Embed } from "hyvor-talk-react";
import { DiscussionEmbed } from "disqus-react";
import RichTextPageContentStyles from "@styles/RichTextPageContent.module.css";
import TypographyStyles from "@styles/Typography.module.scss";
import Tags from "@components/Post/Tags";
import PublishedDate from "@components/Post/PublishedDate";
import Author from "@components/Post/Author";
import ExternalUrl from "@components/Post/ExternalUrl";
import RichTextPageContent from "@components/RichTextPageContent";
import { Config } from "@utils/Config";
import PostTopSection from "@components/PostTopSection";

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

export default function Post(props) {
  const { post } = props;
  const hyvor = `${process.env.NEXT_PUBLIC_HYVOR_ID}`;

  //  console.log(post.body.links.entries.block[0].title);

  return (
    <>
      <Flex pt={10} />

      <article className={RichTextPageContentStyles.page}>
        <RichTextPageContent
          richTextBodyField={post.body}
          renderH2Links={true}
        />
        {post.author !== null && <Author author={post.author} />}
        {/*<DiscussionEmbed
        shortname="guidedogsdev"
        config={{
          url: post.url,
          identifier: post.id,
          title: post.title,
        }}
      />*/}
        <Flex p={7}>
          <Box p={3}>
            <FacebookShareButton
              url={`${Config.pageMeta.blogIndex.url}/${post.slug}`}
              quote={`${post.title}`}
              hashtag={`#${post.title}`}
            >
              <FacebookIcon size={50} round />
            </FacebookShareButton>
          </Box>
          <Box p={3}>
            <FacebookMessengerShareButton
              url={`${Config.pageMeta.blogIndex.url}/${post.slug}`}
              appId={""}
            >
              <FacebookMessengerIcon size={50} round />
            </FacebookMessengerShareButton>
          </Box>
          <Box p={3}>
            <TwitterShareButton
              url={`${Config.pageMeta.blogIndex.url}/${post.slug}`}
              title={`${post.title}`}
            >
              <TwitterIcon size={50} round />
            </TwitterShareButton>
          </Box>
          <Box p={3}>
            <WhatsappShareButton
              url={`${Config.pageMeta.blogIndex.url}/${post.slug}`}
              title={`${post.title}`}
              separator=":: "
            >
              <WhatsappIcon size={50} round />
            </WhatsappShareButton>
          </Box>
          <Box p={3}>
            <EmailShareButton
              url={`${Config.pageMeta.blogIndex.url}/${post.slug}`}
              subject={`${post.title}`}
              body="body"
            >
              <EmailIcon size={50} round />
            </EmailShareButton>
          </Box>
        </Flex>
        <div className={TypographyStyles.bodyCopy}>
          <Embed
            websiteId={hyvor}
            authorEmail="SmFzb24uTWVzc2luZ2hhbUBndWlkZWRvZ3Mub3JnLnVr"
          />
        </div>
        {/*<FastCommentsCommentWidget tenantId="asrI7io1mv" />*/}
      </article>
    </>
  );
}
