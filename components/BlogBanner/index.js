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
  const page = props.page;

  //{page.body && (
  //  <RichTextPageContent
  //    richTextBodyField={page.body}
  //    className={TypographyStyles.bodyCopy}
  //  />
  //)}


  //<img src={page.heroBanner.image.url} 
  //style={{ position: "absolute", top: "142px", width:"100%", height:"480px", objectFit:"cover",  }}
  ///>


  return (
    <>
 
 <VStack
  spacing={1}
  align='stretch'
  height='480px'
  padding={1}
> 
  <Box align='center' flex='1' bg='green.500'>
    <Text >Star Lane Medical Centre</Text>
    <Button colorScheme='teal' size='lg'>
    Button
  </Button>
  </Box>
  <Box align='center' flex='1' bg='blue.500' >
    <Text>Custom House Surgery</Text>
  </Box>
  <Box align='center' flex='1' bg='tomato'>
    <Text>St Luke's Medical Centre</Text>
  </Box>

</VStack>

    </>
  );
}
