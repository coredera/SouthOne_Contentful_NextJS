import TypographyStyles from "@styles/Typography.module.scss";
import ContentListStyles from "@styles/ContentList.module.css";
import Link from "next/link";
import Tags from "@components/Post/Tags";
import ReactMarkdownRenderers from "@utils/ReactMarkdownRenderers";
import ReactMarkdown from "react-markdown";
import PublishedDate from "@components/Post/PublishedDate";
import TagsStyles from "@styles/Tags.module.css";


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

export default function PopularPosts(props) {
  const topPostsArray = props.topPostsArray;

  
  
  return (
    <>
     

        <Box dangerouslySetInnerHTML={{ __html: `<script type="text/javascript" src="https://www.cqc.org.uk/sites/all/modules/custom/cqc_widget/widget.js?data-id=1-547524452&data-host=https://www.cqc.org.uk&type=location"></script>` }} />
       
     
    </>
  );
}
