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
        <h2>Be the first to know</h2>
        <Box
          className={TypographyStyles.bodyCopyS}
          style={{ color: "inherit" }}
          pt={5}
        >
          
            <Link href="https://www.guidedogs.org.uk/contact-us/email-updates/">
              <a style={{ textDecoration: "underline" }}>
                Sign up to our newsletter
              </a>
            </Link>{" "}
            or connect with us on Facebook, Twitter, Instagram and YouTube
          
        </Box>
        <Box>
          <Flex>
            <Box pr={3}>
              <Link href="https://www.facebook.com/GuideDogsUK/">
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
                      aria-labelledby="at-svg-facebook-1"
                      class="at-icon at-icon-facebook"
                      style={{ fill: "#002c5c", width: "50px", height: "50px" }}
                    >
                      <title id="at-svg-facebook-1">Facebook</title>
                      <g>
                        <path
                          d="M22 5.16c-.406-.054-1.806-.16-3.43-.16-3.4 0-5.733 1.825-5.733 5.17v2.882H9v3.913h3.837V27h4.604V16.965h3.823l.587-3.913h-4.41v-2.5c0-1.123.347-1.903 2.198-1.903H22V5.16z"
                          fill-rule="evenodd"
                        ></path>
                      </g>
                    </svg>
                  </Box>
                </a>
              </Link>
            </Box>
            <Box pr={3}>
              <Link href="https://twitter.com/intent/follow?source=followbutton&variant=1.0&screen_name=guidedogs">
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
                      aria-labelledby="at-svg-twitter-2"
                      class="at-icon at-icon-twitter"
                      style={{ fill: "#002c5c", width: "50px", height: "50px" }}
                    >
                      <title id="at-svg-twitter-2">Twitter</title>
                      <g>
                        <path
                          d="M27.996 10.116c-.81.36-1.68.602-2.592.71a4.526 4.526 0 0 0 1.984-2.496 9.037 9.037 0 0 1-2.866 1.095 4.513 4.513 0 0 0-7.69 4.116 12.81 12.81 0 0 1-9.3-4.715 4.49 4.49 0 0 0-.612 2.27 4.51 4.51 0 0 0 2.008 3.755 4.495 4.495 0 0 1-2.044-.564v.057a4.515 4.515 0 0 0 3.62 4.425 4.52 4.52 0 0 1-2.04.077 4.517 4.517 0 0 0 4.217 3.134 9.055 9.055 0 0 1-5.604 1.93A9.18 9.18 0 0 1 6 23.85a12.773 12.773 0 0 0 6.918 2.027c8.3 0 12.84-6.876 12.84-12.84 0-.195-.005-.39-.014-.583a9.172 9.172 0 0 0 2.252-2.336"
                          fill-rule="evenodd"
                        ></path>
                      </g>
                    </svg>
                  </Box>
                </a>
              </Link>
            </Box>
            <Box pr={3}>
              <Link href="https://www.youtube.com/user/GuideDogsUK">
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
            <Box>
              <Link href="http://instagram.com/GuideDogsUK">
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
                      aria-labelledby="at-svg-instagram-4"
                      class="at-icon at-icon-instagram"
                      style={{ fill: "#002c5c", width: "50px", height: "50px" }}
                    >
                      <title id="at-svg-instagram-4">Instagram</title>
                      <g>
                        <path
                          d="M16 5c-2.987 0-3.362.013-4.535.066-1.17.054-1.97.24-2.67.512a5.392 5.392 0 0 0-1.95 1.268 5.392 5.392 0 0 0-1.267 1.95c-.272.698-.458 1.498-.512 2.67C5.013 12.637 5 13.012 5 16s.013 3.362.066 4.535c.054 1.17.24 1.97.512 2.67.28.724.657 1.337 1.268 1.95a5.392 5.392 0 0 0 1.95 1.268c.698.27 1.498.457 2.67.51 1.172.054 1.547.067 4.534.067s3.362-.013 4.535-.066c1.17-.054 1.97-.24 2.67-.51a5.392 5.392 0 0 0 1.95-1.27 5.392 5.392 0 0 0 1.268-1.95c.27-.698.457-1.498.51-2.67.054-1.172.067-1.547.067-4.534s-.013-3.362-.066-4.535c-.054-1.17-.24-1.97-.51-2.67a5.392 5.392 0 0 0-1.27-1.95 5.392 5.392 0 0 0-1.95-1.267c-.698-.272-1.498-.458-2.67-.512C19.363 5.013 18.988 5 16 5zm0 1.982c2.937 0 3.285.01 4.445.064 1.072.05 1.655.228 2.042.38.514.198.88.437 1.265.822.385.385.624.75.823 1.265.15.387.33.97.38 2.042.052 1.16.063 1.508.063 4.445 0 2.937-.01 3.285-.064 4.445-.05 1.072-.228 1.655-.38 2.042-.198.514-.437.88-.822 1.265-.385.385-.75.624-1.265.823-.387.15-.97.33-2.042.38-1.16.052-1.508.063-4.445.063-2.937 0-3.285-.01-4.445-.064-1.072-.05-1.655-.228-2.042-.38-.514-.198-.88-.437-1.265-.822a3.408 3.408 0 0 1-.823-1.265c-.15-.387-.33-.97-.38-2.042-.052-1.16-.063-1.508-.063-4.445 0-2.937.01-3.285.064-4.445.05-1.072.228-1.655.38-2.042.198-.514.437-.88.822-1.265.385-.385.75-.624 1.265-.823.387-.15.97-.33 2.042-.38 1.16-.052 1.508-.063 4.445-.063zm0 12.685a3.667 3.667 0 1 1 0-7.334 3.667 3.667 0 0 1 0 7.334zm0-9.316a5.65 5.65 0 1 0 0 11.3 5.65 5.65 0 0 0 0-11.3zm7.192-.222a1.32 1.32 0 1 1-2.64 0 1.32 1.32 0 0 1 2.64 0"
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
