//import { FastCommentsCommentWidget } from "fastcomments-react";
import { Embed } from "hyvor-talk-react";
//import { DiscussionEmbed } from "disqus-react";
import RichTextPageContentStyles from "@styles/RichTextPageContent.module.css";
import TypographyStyles from "@styles/Typography.module.scss";
import Tags from "@components/Post/Tags";
import PublishedDate from "@components/Post/PublishedDate";
import Author from "@components/Post/Author";
import ExternalUrl from "@components/Post/ExternalUrl";
import RichTextPageContent from "@components/RichTextPageContent";
import { Config } from "@utils/Config";
import PostTopSection from "@components/PostTopSection";
import SharePost from "@components/SharePost";

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
//import { cp } from "fs";

export default function Post(props) {
  const { post } = props;
  const hyvor = `${process.env.NEXT_PUBLIC_HYVOR_ID}`;

  //  console.log(post.body.links.entries.block[0].title);

  let email1 = post.author.email;

  // let email2 = Buffer.from(email1).toString('base64');

  let email2 = btoa(email1);

  //console.log(email2);

  const id = `${post.title} by ${email1}`;

  return (
    <>
      <article className={RichTextPageContentStyles.page}>
        <RichTextPageContent
          richTextBodyField={post.body}
          renderH2Links={true}
        />

        {/*<DiscussionEmbed
        shortname="guidedogsdev"
        config={{
          url: post.url,
          identifier: post.id,
          title: post.title,
        }}
      />*/}

        {/*<FastCommentsCommentWidget tenantId="asrI7io1mv" />*/}
      </article>
      <div className={TypographyStyles.bodyCopy}>
        <Embed websiteId={hyvor} authorEmail={email2} title={id} />
      </div>
    </>
  );
}
