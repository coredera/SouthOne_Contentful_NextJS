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
  spacing={2}
  align='stretch'
  padding={2}
> 
  <Box pb={[2, 2, 4]} pt={[0, 0, 3]} border="1px" borderRadius="md" borderColor="#b1ce20" align='center' flex='1' bg='#e8faf1'>
    <Text style={{margin: 10}} fontWeight="700" fontSize='xl'>Star Lane Medical Centre</Text>
    <Button borderRadius={5} style={{margin: 5}} colorScheme='linkedin' size='lg'>
    Submit Health Query
  </Button> 
  <Button borderRadius={5} style={{margin: 5}} colorScheme='linkedin' size='lg'>
    Register
  </Button>
  <Button borderRadius={5} style={{margin: 5}} colorScheme='blue' size='lg'>
    Website
  </Button>
  </Box>
  <Box pb={[2, 2, 4]} border="1px" borderRadius="md" borderColor="#b1ce20" align='center' flex='1' bg='#e8faf1' >
    <Text style={{margin: 10}} fontWeight="700" fontSize='xl'>Custom House Surgery</Text>
    <Button borderRadius={5} style={{margin: 5}} colorScheme='linkedin' size='lg'>
    Submit Health Query
  </Button> 
  <Button borderRadius={5} style={{margin: 5}} colorScheme='linkedin' size='lg'>
    Register
  </Button>
  <Button borderRadius={5} style={{margin: 5}} colorScheme='blue' size='lg'>
    Website
  </Button>
  </Box>
  <Box pb={[2, 2, 4]} border="1px" borderRadius="md" borderColor="#b1ce20" align='center' flex='1' bg='#e8faf1'>
    <Text style={{margin: 10}} fontWeight="700" fontSize='xl'>St Luke's Medical Centre</Text>
    <Button borderRadius={5} style={{margin: 5}} colorScheme='linkedin' size='lg'>
    Submit Health Query
  </Button> 
  <Button borderRadius={5} style={{margin: 5}} colorScheme='linkedin' size='lg'>
    Register
  </Button>
  <Button borderRadius={5} style={{margin: 5}} colorScheme='blue' size='lg'>
    Website
  </Button>
  </Box>

</VStack>

    </>
  );
}
