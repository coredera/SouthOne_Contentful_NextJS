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
<Flex>
<Box borderTopWidth="1px" borderLeftWidth="1px" borderRightWidth="1px" borderTopRadius="md" borderColor="#2F5767" align='center' flex='1' bg='#38677A'> 
    <Text px={[10]} py={[1]} fontWeight="700" fontSize='xl' color="white">Star Lane Medical Centre</Text>
  </Box></Flex>
  <Box>
<Flex color='white'>
<Box bgPosition="center" bgSize="cover" bgRepeat="no-repeat" backgroundImage={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/slmcpic.png`} borderTopWidth="1px" borderBottomWidth="1px" borderLeftWidth="1px" borderLeftRadius="md" borderColor="#2F5767" align='center' flex='1'>
  </Box>
  <Box p={[2, 2, 5]} borderTopWidth="1px" borderBottomWidth="1px" borderRightWidth="1px" borderRightRadius="md" borderColor="#2F5767" align='center' flex='1' bg='#ECF3F6'>
    <Button as={Link} href="https://access.klinik.co.uk/contact/star-lane-medical-centre/" target="_blank" borderRadius={25} my="1" mx={[0, 10]} color='white' _hover={{ backgroundColor: "#2fa3ab" }} _active={{ backgroundColor: "#b1ce20" }} backgroundColor="#E76F51" size='lg'>
    🗓️ Appointments
  </Button> 
  <Button as={Link} href="https://www.starlanemedicalcentre.nhs.uk/info.aspx?p=10" target="_blank" borderRadius={25} my="1" mx="0.5" color='white' _hover={{ backgroundColor: "#2fa3ab" }} _active={{ backgroundColor: "#b1ce20" }} backgroundColor="#2A9D8F" size='md'>
    Registration
  </Button>
  <Button as={Link} href="https://www.starlanemedicalcentre.nhs.uk/index.aspx?pr=F84017" target="_blank" borderRadius={25} my="1" mx="0.5" color='white' _hover={{ backgroundColor: "#2fa3ab" }} _active={{ backgroundColor: "#b1ce20" }} backgroundColor="#BC8F1C" size='md'>
    Website
  </Button>
  </Box>
  </Flex></Box></VStack>
  <VStack
  spacing={0}
  align='center'
>  
<Flex>
<Box borderTopWidth="1px" borderLeftWidth="1px" borderRightWidth="1px" borderTopRadius="md" borderColor="#2F5767" align='center' flex='1' bg='#38677A'> 
    <Text px={[10]} py={[1]} fontWeight="700" fontSize='xl' color="white">Custom House Surgery</Text>
  </Box></Flex>
  <Box>
<Flex color='white'>
<Box bgPosition="center" bgSize="cover" bgRepeat="no-repeat" backgroundImage={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/chspic.png`} borderTopWidth="1px" borderBottomWidth="1px" borderLeftWidth="1px" borderLeftRadius="md" borderColor="#2F5767" align='center' flex='1'>
  </Box>
  <Box p={[2, 2, 5]} borderTopWidth="1px" borderBottomWidth="1px" borderRightWidth="1px" borderRightRadius="md" borderColor="#2F5767" align='center' flex='1' bg='#ECF3F6'>
    <Button as={Link} href="https://www.online-consult.co.uk/org/custom-house-surgery" target="_blank" borderRadius={25} my="1" mx={[0, 10]} color='white' _hover={{ backgroundColor: "#2fa3ab" }} _active={{ backgroundColor: "#b1ce20" }} backgroundColor="#E76F51" size='lg'>
    🗓️ Appointments
  </Button> 
  <Button as={Link} href="https://customhousesurgery.co.uk/pages/Register-with-Our-Practice" target="_blank" borderRadius={25} my="1" mx="0.5" color='white' _hover={{ backgroundColor: "#2fa3ab" }} _active={{ backgroundColor: "#b1ce20" }} backgroundColor="#2A9D8F" size='md'>
    Registration
  </Button>
  <Button as={Link} href="https://customhousesurgery.co.uk/" target="_blank" borderRadius={25} my="1" mx="0.5" color='white' _hover={{ backgroundColor: "#2fa3ab" }} _active={{ backgroundColor: "#b1ce20" }} backgroundColor="#BC8F1C" size='md'>
    Website
  </Button>
  </Box>
  </Flex></Box></VStack>
  <VStack
  spacing={0}
  align='center'
>  
<Flex>
<Box borderTopWidth="1px" borderLeftWidth="1px" borderRightWidth="1px" borderTopRadius="md" borderColor="#2F5767" align='center' flex='1' bg='#38677A'> 
    <Text px={[10]} py={[1]} fontWeight="700" fontSize='xl' color="white">St Lukes Medical Centre</Text>
  </Box></Flex>
  <Box>
<Flex color='white'>
<Box bgPosition="center" bgSize="cover" bgRepeat="no-repeat" backgroundImage={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/slpic.png`} borderTopWidth="1px" borderBottomWidth="1px" borderLeftWidth="1px" borderLeftRadius="md" borderColor="#2F5767" align='center' flex='1'>
  </Box>
  <Box p={[2, 2, 5]} borderTopWidth="1px" borderBottomWidth="1px" borderRightWidth="1px" borderRightRadius="md" borderColor="#2F5767" align='center' flex='1' bg='#ECF3F6'>
    <Button as={Link} href="https://www.online-consult.co.uk/org/dr-ruiz-st-luke-s-medical-centre" target="_blank" borderRadius={25} my="1" mx={[0, 10]} color='white' _hover={{ backgroundColor: "#2fa3ab" }} _active={{ backgroundColor: "#b1ce20" }} backgroundColor="#E76F51" size='lg'>
    🗓️ Appointments
  </Button> 
  <Button as={Link} href="https://registergp.com/start" target="_blank" borderRadius={25} my="1" mx="0.5" color='white' _hover={{ backgroundColor: "#2fa3ab" }} _active={{ backgroundColor: "#b1ce20" }} backgroundColor="#2A9D8F" size='md'>
    Registration
  </Button>
  <Button as={Link} href="https://www.stlukesmedicalcentre-drruizanddrjoarder.co.uk/" target="_blank" borderRadius={25} my="1" mx="0.5" color='white' _hover={{ backgroundColor: "#2fa3ab" }} _active={{ backgroundColor: "#b1ce20" }} backgroundColor="#BC8F1C" size='md'>
    Website
  </Button>
  </Box>
  </Flex></Box></VStack>
 
</VStack>

    </>
  );
}
