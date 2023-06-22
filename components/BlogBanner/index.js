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
  spacing={3}
  align='stretch'
  height='480px'
  padding={3}
> 
  <Box align='center' flex='1' bg='#f4f9f1'>
    <Text style={{margin: 10}} fontWeight="700" fontSize='xl'>Star Lane Medical Centre</Text>
    <Button style={{margin: 10}} colorScheme='teal' size='lg'>
    Button
  </Button> 
  <Button style={{margin: 10}} colorScheme='teal' size='lg'>
    Button
  </Button>
  </Box>
  <Box align='center' flex='1' bg='#f4f9f1' >
    <Text style={{margin: 10}} fontWeight="700" fontSize='xl'>Custom House Surgery</Text>
    <Button style={{margin: 10}} colorScheme='teal' size='lg'>
    Button
  </Button> 
  <Button style={{margin: 10}} colorScheme='teal' size='lg'>
    Button
  </Button>
  </Box>
  <Box align='center' flex='1' bg='#f4f9f1'>
    <Text style={{margin: 10}} fontWeight="700" fontSize='xl'>St Luke's Medical Centre</Text>
    <Button style={{margin: 10}} colorScheme='teal' size='lg'>
    Button
  </Button> 
  <Button style={{margin: 10}} colorScheme='teal' size='lg'>
    Button
  </Button>
  </Box>

</VStack>

    </>
  );
}
