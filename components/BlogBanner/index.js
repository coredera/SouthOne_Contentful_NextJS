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
  Image,
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
import PageContentWrapper from "@components/PageContentWrapper";

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
  align='center'
  px={[2]}
  pb={[5]}
  pt={[2]}
  mr={[0, 0, 20]}
  ml={[0, 0, 20]}
>   

<VStack
  spacing={0}
  align='center'
>  
<div>

  <Box minWidth={{
                base: "95vw",
              sm: "600px",
               md: "800px",
               lg: "860px",
               xl: "1000px",
      }} borderTopWidth="1px" borderLeftWidth="1px" borderRightWidth="1px" borderTopRadius="md" borderColor="#2F5767" align='center' bg='#136175'
flexGrow="1"> 
    <Text px={[1]} py={[1]} fontWeight="700" fontSize='xl' color="white">Star Lane medical Centre</Text>
  </Box>
  <Box>
    
<Flex width={{
              sm: "600px",
               md: "800px",
               lg: "860px",
               xl: "1000px",
      }}  color='white'>

  <Box  bgPosition="center" 
      bgSize="cover" 
      bgRepeat="no-repeat" 
      backgroundImage={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/slmcpic100kb.jpg`} 
      borderWidth="1px" borderBottomLeftRadius="md" borderColor="#2F5767" 
      align='center' 
      flex='1'>
  </Box>

  <Box  borderTopWidth="1px" borderBottomWidth="1px" borderRightWidth="1px" borderBottomRightRadius="md" borderColor="#2F5767" align='center' flex='0.6' bg='#ECF3F6'>
<VStack spacing={0}>
  <Container as={Link} href="https://access.klinik.co.uk/contact/star-lane-medical-centre/" target="_blank" p={[2, 2.5]} _hover={{ backgroundColor: "#4a5a0a" }} _active={{ backgroundColor: "#b1ce20" }} backgroundColor="#0095a6">
  <Text fontSize='1.2rem'><b>Appointments</b></Text>
  </Container>
  <Container as={Link} href="https://www.starlanemedicalcentre.nhs.uk/new-patients.aspx?t=2" target="_blank" p={[2, 2.5]} _hover={{ backgroundColor: "#4a5a0a" }} _active={{ backgroundColor: "#b1ce20" }} backgroundColor="#d0890d">
  <Text fontSize='1.2rem'><b>Registration</b></Text>
  </Container>
  <Container as={Link} href="https://www.starlanemedicalcentre.nhs.uk/" target="_blank" p={[2, 2.5]} _hover={{ backgroundColor: "#4a5a0a" }} _active={{ backgroundColor: "#b1ce20" }} backgroundColor="#96b058">
  <Text fontSize='1.2rem'><b>Website</b></Text>
  </Container>
</VStack>
  </Box>
  </Flex>
  </Box>
  </div>
  </VStack>

  <VStack
  spacing={0}
  align='center'
>  
<div>

  <Box minWidth={{
                base: "95vw",
              sm: "600px",
               md: "800px",
               lg: "860px",
               xl: "1000px",
      }} borderTopWidth="1px" borderLeftWidth="1px" borderRightWidth="1px" borderTopRadius="md" borderColor="#2F5767" align='center' bg='#136175'
flexGrow="1"> 
    <Text px={[1]} py={[1]} fontWeight="700" fontSize='xl' color="white">Custom House Surgery</Text>
  </Box>
  <Box>
    
<Flex width={{
              sm: "600px",
               md: "800px",
               lg: "860px",
               xl: "1000px",
      }}  color='white'>

  <Box  bgPosition="center" 
      bgSize="cover" 
      bgRepeat="no-repeat" 
      backgroundImage={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/chspic100kb.jpg`} 
      borderWidth="1px" borderBottomLeftRadius="md" borderColor="#2F5767" 
      align='center' 
      flex='1'>
  </Box>

  <Box  borderTopWidth="1px" borderBottomWidth="1px" borderRightWidth="1px" borderBottomRightRadius="md" borderColor="#2F5767" align='center' flex='0.6' bg='#ECF3F6'>
<VStack spacing={0}>
  <Container as={Link} href="https://www.online-consult.co.uk/org/custom-house-surgery" target="_blank" p={[2, 2.5]} _hover={{ backgroundColor: "#4a5a0a" }} _active={{ backgroundColor: "#b1ce20" }} backgroundColor="#0095a6">
  <Text fontSize='1.2rem'><b>Appointments</b></Text>
  </Container>
  <Container as={Link} href="https://customhousesurgery.co.uk/pages/Register-with-Our-Practice" target="_blank" p={[2, 2.5]} _hover={{ backgroundColor: "#4a5a0a" }} _active={{ backgroundColor: "#b1ce20" }} backgroundColor="#d0890d">
  <Text fontSize='1.2rem'><b>Registration</b></Text>
  </Container>
  <Container as={Link} href="https://customhousesurgery.co.uk/" target="_blank" p={[2, 2.5]} _hover={{ backgroundColor: "#4a5a0a" }} _active={{ backgroundColor: "#b1ce20" }} backgroundColor="#96b058">
  <Text fontSize='1.2rem'><b>Website</b></Text>
  </Container>
</VStack>
  </Box>
  </Flex>
  </Box>
  </div>
  </VStack>

  <VStack
  spacing={0}
  align='center'
>  
<div>

  <Box minWidth={{
                base: "95vw",
              sm: "600px",
               md: "800px",
               lg: "860px",
               xl: "1000px",
      }} borderTopWidth="1px" borderLeftWidth="1px" borderRightWidth="1px" borderTopRadius="md" borderColor="#2F5767" align='center' bg='#136175'
flexGrow="1"> 
    <Text px={[1]} py={[1]} fontWeight="700" fontSize='xl' color="white">St Lukes Medical Centre</Text>
  </Box>
  <Box>
    
<Flex width={{
              sm: "600px",
               md: "800px",
               lg: "860px",
               xl: "1000px",
      }}  color='white'>

  <Box  bgPosition="center" 
      bgSize="cover" 
      bgRepeat="no-repeat" 
      backgroundImage={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/slpic100kb.jpg`} 
      borderWidth="1px" borderBottomLeftRadius="md" borderColor="#2F5767" 
      align='center' 
      flex='1'>
  </Box>

  <Box  borderTopWidth="1px" borderBottomWidth="1px" borderRightWidth="1px" borderBottomRightRadius="md" borderColor="#2F5767" align='center' flex='0.6' bg='#ECF3F6'>
<VStack spacing={0}>
  <Container as={Link} href="https://www.online-consult.co.uk/org/dr-ruiz-st-luke-s-medical-centre" target="_blank" p={[2, 2.5]} _hover={{ backgroundColor: "#4a5a0a" }} _active={{ backgroundColor: "#b1ce20" }} backgroundColor="#0095a6">
  <Text fontSize='1.2rem'><b>Appointments</b></Text>
  </Container>
  <Container as={Link} href="https://registergp.com/start" target="_blank" p={[2, 2.5]} _hover={{ backgroundColor: "#4a5a0a" }} _active={{ backgroundColor: "#b1ce20" }} backgroundColor="#d0890d">
  <Text fontSize='1.2rem'><b>Registration</b></Text>
  </Container>
  <Container as={Link} href="https://www.stlukesmedicalcentre-drruizanddrjoarder.co.uk/" target="_blank" p={[2, 2.5]} _hover={{ backgroundColor: "#4a5a0a" }} _active={{ backgroundColor: "#b1ce20" }} backgroundColor="#96b058">
  <Text fontSize='1.2rem'><b>Website</b></Text>
  </Container>
</VStack>
  </Box>
  </Flex>
  </Box>
  </div>
  </VStack>




 
</VStack>

    </>
  );
}
