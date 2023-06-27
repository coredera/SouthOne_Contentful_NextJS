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
  padding={[2, 3, 5]}
> 
  <Box pb={[2, 2, 4]} pt={[0, 0, 3]} border="1px" borderRadius="md" borderColor="#b1ce20" align='center' flex='1' bg='#e8faf1'>
    <Text style={{margin: 5}} fontWeight="700" fontSize='xl'>Star Lane Medical Centre</Text>
    <Button as={Link} href="https://access.klinik.co.uk/contact/star-lane-medical-centre/" target="_blank" borderRadius={3} style={{margin: 5}} color='white' _hover={{ backgroundColor: "#2fa3ab" }} _active={{ backgroundColor: "#b1ce20" }} backgroundColor="#10949c" size='lg'>
    Submit Health Query
  </Button> 
  <Button as={Link} href="https://www.starlanemedicalcentre.nhs.uk/info.aspx?p=10" target="_blank" borderRadius={3} style={{margin: 5}} color='white' _hover={{ backgroundColor: "#2fa3ab" }} _active={{ backgroundColor: "#b1ce20" }} backgroundColor="#10949c" size='lg'>
    Register
  </Button>
  <Button as={Link} href="https://www.starlanemedicalcentre.nhs.uk/index.aspx?pr=F84017" target="_blank" borderRadius={3} style={{margin: 5}} color='white' _hover={{ backgroundColor: "#2fa3ab" }} _active={{ backgroundColor: "#b1ce20" }} backgroundColor="#10949c" size='lg'>
    Website
  </Button>
  </Box>
  <Box pb={[2, 2, 4]} border="1px" borderRadius="md" borderColor="#b1ce20" align='center' flex='1' bg='#e8faf1' >
    <Text style={{margin: 5}} fontWeight="700" fontSize='xl'>Custom House Surgery</Text>
    <Button as={Link} href="https://www.online-consult.co.uk/org/custom-house-surgery" target="_blank" borderRadius={3} style={{margin: 5}} color='white' _hover={{ backgroundColor: "#2fa3ab" }} _active={{ backgroundColor: "#b1ce20" }} backgroundColor="#10949c" size='lg'>
    Submit Health Query
  </Button> 
  <Button as={Link} href="https://customhousesurgery.co.uk/pages/Register-with-Our-Practice" target="_blank" borderRadius={3} style={{margin: 5}} color='white' _hover={{ backgroundColor: "#2fa3ab" }} _active={{ backgroundColor: "#b1ce20" }} backgroundColor="#10949c" size='lg'>
    Register
  </Button>
  <Button as={Link} href="https://customhousesurgery.co.uk/Home" target="_blank" borderRadius={3} style={{margin: 5}} color='white' _hover={{ backgroundColor: "#2fa3ab" }} _active={{ backgroundColor: "#b1ce20" }} backgroundColor="#10949c" size='lg'>
    Website
  </Button>
  </Box>
  <Box pb={[2, 2, 4]} border="1px" borderRadius="md" borderColor="#b1ce20" align='center' flex='1' bg='#e8faf1'>
    <Text style={{margin: 5}} fontWeight="700" fontSize='xl'>St Luke's Medical Centre</Text>
    <Button as={Link} href="https://www.online-consult.co.uk/org/dr-ruiz-st-luke-s-medical-centre" target="_blank" borderRadius={3} style={{margin: 5}} color='white' _hover={{ backgroundColor: "#2fa3ab" }} _active={{ backgroundColor: "#b1ce20" }} backgroundColor="#10949c" size='lg'>
    Submit Health Query
  </Button> 
  <Button as={Link} href="https://registergp.com/start" target="_blank" borderRadius={3} style={{margin: 5}} color='white' _hover={{ backgroundColor: "#2fa3ab" }} _active={{ backgroundColor: "#b1ce20" }} backgroundColor="#10949c" size='lg'>
    Register
  </Button>
  <Button as={Link} href="https://www.stlukesmedicalcentre-drruizanddrjoarder.co.uk/" target="_blank" borderRadius={3} style={{margin: 5}} color='white' _hover={{ backgroundColor: "#2fa3ab" }} _active={{ backgroundColor: "#b1ce20" }} backgroundColor="#10949c" size='lg'>
    Website
  </Button>
  </Box>

</VStack>

    </>
  );
}
