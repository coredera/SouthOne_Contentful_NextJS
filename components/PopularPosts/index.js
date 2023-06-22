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

      <Box pb={3}>
        <h2 className={ContentListStyles.contentList__popularPostHeading}>
           Popular posts
        </h2>
      </Box>
      <Box
        p={5}
        display={{ base: "block", md: "block" }}
        className={ContentListStyles.contentList__popularPosts}
        bgColor="white"
        pb={6}
      >
        {topPostsArray.map((post) => (
          <div key={post.sys.id}>
            <Box pt={2}  fontSize={18} fontFamily="castledown-bold" >
              <Link legacyBehavior href={`/${post.slug}`}>
                <a className={ContentListStyles.contentList__titleLink}>
                  <h3>{post.title}</h3>
                </a>
              </Link>
            </Box>
          </div>
        ))}
      </Box>
    </>
  );
}
