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
      <Box pb={3} className={ContentListStyles.contentList__SocialMedia}>
        <h2>Keep in touch</h2>
        <Box
          className={TypographyStyles.bodyCopyS}
          style={{ color: "inherit" }}
          pt={5}
        >
          
       
            Connect with us on LinkedIn or YouTube
          
        </Box>
        <Box>
          <Flex>
            <Box pr={3}>
         
            </Box>
            <Box pr={3}>
              <Link legacyBehavior href="https://twitter.com/intent/follow?source=followbutton&variant=1.0&screen_name=examplesite">
                <a>
                  <Box
                    style={{
                      backgroundColor: "white",
                      height: "50px",
                      width: "50px",
                      borderRadius: "50%",
                    }}
                  >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 75 72">
  <path d="M70.676 36.644C70.166 35.636 69.13 35 68 35h-7V19c0-2.21-1.79-4-4-4H34c-2.21 0-4 1.79-4 4s1.79 4 4 4h18c.552 0 .998.446 1 .998V35h-7c-1.13 0-2.165.636-2.676 1.644-.51 1.01-.412 2.22.257 3.13l11 15C55.148 55.545 56.046 56 57 56s1.855-.455 2.42-1.226l11-15c.668-.912.767-2.122.256-3.13zM40 48H22c-.54 0-.97-.427-.992-.96L21 36h7c1.13 0 2.166-.636 2.677-1.644.51-1.01.412-2.22-.257-3.13l-11-15C18.854 15.455 17.956 15 17 15s-1.854.455-2.42 1.226l-11 15c-.667.912-.767 2.122-.255 3.13C3.835 35.365 4.87 36 6 36h7l.012 16.003c.002 2.208 1.792 3.997 4 3.997h22.99c2.208 0 4-1.79 4-4s-1.792-4-4-4z"/>
</svg>
                  </Box>
                </a>
              </Link>
            </Box>
            <Box pr={3}>
              <Link legacyBehavior href="https://www.youtube.com/user/examplesiteUK">
                <a>
                  <Box
                    style={{
                      backgroundColor: "white",
                      height: "50px",
                      width: "50px",
                      borderRadius: "50%",
                    }}
                  >
                    <svg
                      xmlnsXlink="http://www.w3.org/2000/svg"
                      xlinkHref="http://www.w3.org/1999/xlink"
                      viewBox="0 0 32 32"
                      version="1.1"
                      role="img"
                      aria-labelledby="at-svg-youtube-3"
                      class="at-icon at-icon-youtube"
                      style={{ fill: "#002c5c", width: "50px", height: "50px" }}
                    >
                      <title id="at-svg-youtube-3">YouTube</title>
                      <g>
                        <path
                          d="M13.73 18.974V12.57l5.945 3.212-5.944 3.192zm12.18-9.778c-.837-.908-1.775-.912-2.205-.965C20.625 8 16.007 8 16.007 8c-.01 0-4.628 0-7.708.23-.43.054-1.368.058-2.205.966-.66.692-.875 2.263-.875 2.263S5 13.303 5 15.15v1.728c0 1.845.22 3.69.22 3.69s.215 1.57.875 2.262c.837.908 1.936.88 2.426.975 1.76.175 7.482.23 7.482.15 0 .08 4.624.072 7.703-.16.43-.052 1.368-.057 2.205-.965.66-.69.875-2.262.875-2.262s.22-1.845.22-3.69v-1.73c0-1.844-.22-3.69-.22-3.69s-.215-1.57-.875-2.262z"
                          fill-rule="evenodd"
                        ></path>
                      </g>
                    </svg>
                  </Box>
                </a>
              </Link>
            </Box>
         
          </Flex>
        </Box>
      </Box>
    </>
  );
}
