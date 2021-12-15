import { FastCommentsCommentWidget } from "fastcomments-react";
import HyvorTalk from "hyvor-talk-react";
import { DiscussionEmbed } from "disqus-react";
import RichTextPageContentStyles from "@styles/RichTextPageContent.module.css";
import TypographyStyles from "@styles/Typography.module.scss";
import Tags from "@components/Post/Tags";
import PublishedDate from "@components/Post/PublishedDate";
import Author from "@components/Post/Author";
import ExternalUrl from "@components/Post/ExternalUrl";
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
} from "@chakra-ui/react";

export default function Post(props) {
  const { post } = props;
  const hyvor = `${process.env.NEXT_PUBLIC_HYVOR_ID}`;
  

  return (
    <>
    <Flex pt={10} />
    <article className={RichTextPageContentStyles.page}>
      {post.externalUrl && <ExternalUrl url={post.externalUrl} />}
      <h1 className={TypographyStyles.heading__h1}>{post.title}</h1>
      <Flex>
        <Box className={TypographyStyles.heading__h5}>{post.author.name}</Box>
        <Spacer />
        <Box>
          <PublishedDate date={post.date} />
        </Box>
      </Flex>
      {post.contentfulMetadata.tags !== null && (
        <Tags tags={post.contentfulMetadata.tags} />
      )}{" "}
      <RichTextPageContent richTextBodyField={post.body} renderH2Links={true} />
      {post.author !== null && <Author author={post.author} />}
      {/*<DiscussionEmbed
        shortname="guidedogsdev"
        config={{
          url: post.url,
          identifier: post.id,
          title: post.title,
        }}
      />*/}
      <div className={TypographyStyles.bodyCopy}>
        <HyvorTalk.Embed websiteId={hyvor} />
      </div>
      {/*<FastCommentsCommentWidget tenantId="asrI7io1mv" />*/}
    </article>
    </>
  );
}
