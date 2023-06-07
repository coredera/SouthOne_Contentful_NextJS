import HeaderStyles from "@styles/Header.module.scss";
import Link from "next/link";
import SocialLinks from "@components/SocialLinks";
import { useRouter } from "next/router";
import { Config } from "@utils/Config";
//import Logo from "./svg/Logo";
//import Logo from "./logo/Logo";
import Logo from "../Logo/index.tsx";
//import search from "@algolia/algoliasearchNetlify.js";
import Search from "@components/Search";
import PostList from "@components/PostList";
import ContentListStyles from "@styles/ContentList.module.css";

import { MdOpenInNew } from "react-icons/md";

import { useState, useEffect } from "react";

//import { ContentfulApi } from "@utils/ContentfulApi";
import ContentfulApi from "@utils/ContentfulApi";

import {
  Box,
  Flex,
  form,
  Heading,
  Input,
  InputLeftAddon,
  InputRightAddon,
  InputRightElement,
  LinkOverlay,
  LinkBox,
  useBreakpointValue,
  useColorMode,
  SimpleGrid,
  GridItem,
  Spacer,
  Stack,
  Icon,
  Button,
  InputGroup,
} from "@chakra-ui/react";

import * as React from "react";

//import { connectScrollTo } from "react-instantsearch-dom";

export default function Header(props) {
  const router = useRouter();

  const {
    sortedBlogPostTags,
    blogPostTags,
    featuredPost,
    topPostsArray,
    postSummaries,
    currentPage,
    totalPages,
    pageContent,
    preview,
  } = props;

  //const [count, setCount] = useState(0);

  /** 
  useEffect(() => {
    console.log("running useEffect");
    document.title = `You clicked ${count} times`;
   
   async function fetchData() {
    console.log("Running async");
      //const posts = await getPosts();
     // console.log("Running async");
     // setData(posts);
    }
    fetchData();
  }, []);

*/

  //});
  //console.log("Posts:");
  //console.log(posts);

  //const { colorMode } = useColorMode();
  //const colorSecondary = {
  //  light: "#002B5B",
  //  dark: "#002B5B",
  //};

  const [value, setValue] = React.useState("");

  return (
    <>
     
      <Box zIndex="999" className={HeaderStyles.header} >
        <Flex
          backgroundColor={"brand.100"}
          
          height={{base: "", lg: "142"}}
          alignSelf="left"
          
          zIndex="999"
          direction={{ base: "column", lg: "row" }}
        >
          <Box maxWidth="1px" maxHeight="1px" margin="0">
            <div className={HeaderStyles.skipLinks}>
              <div className={HeaderStyles.skipLinkslink}>
                <ul>
                  <li>
                    <a href="/covid19">Coronavirus (COVID-19) and Guide Dogs</a>
                  </li>
                  <li>
                    <a href="#content" class="skip-to-content">
                      Skip to content
                    </a>
                  </li>
                  <li>
                    <a href="#footer" class="skip-to-content">
                      Skip to footer
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </Box>
       

          <Box alignSelf="start" p={8} >
            <Link href="https://www.guidedogs.org.uk">
              <a
                className={HeaderStyles.header__logoContainerLink}
                aria-label="Navigate to home page"
              >
                    <img
                          src={`${process.env.NEXT_PUBLIC_BASE_PATH}/logo/s1logo.png`}
                          
                        />
              </a>
            </Link>
          </Box>
          <Spacer />
          <Box pb={{base:"8", lg:"0"}} pl={5} pr={5} pt={{base:"0", lg:"14"}}  >
            <form
              onSubmit={(e) => {
                e.preventDefault();
                location.assign("/blog/search?searchall%5Bquery%5D=" + encodeURI(value));
              }}
            >
              <Stack>
                <InputGroup>
                  <Input
                    variant="outline"
                    backgroundColor="white"
                    value={value}
                    placeholder="Search here..."
                    onChange={(e) => setValue(e.currentTarget.value)}
                    borderRightRadius="0px"
                  />

                  <Button
                    width="4.5rem"
                    backgroundColor="brand.300"
                    onClick={(e) => {
                      e.preventDefault();
                      location.assign(
                        "/blog/search?searchall%5Bquery%5D=" + encodeURI(value)
                      );
                    }}
                    borderLeftRadius="0px"
                    borderRightRadius="7px"
                    _hover={{
                      background: "#4EA8DD",
                    }}
                  >
                    <Box p={1}>
                      <img
                        src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/icon-search--black.svg`}
                        alt="Search now"
                      ></img>
                    </Box>
                  </Button>
                </InputGroup>
              </Stack>
            </form>
          </Box>
          

          

          <Flex display="none">
            <Box>
              <Link href="https://www.guidedogs.org.uk/ensuring-our-website-is-accessible/">
                <a className={HeaderStyles.header_headerItem}>
                  <Box className={HeaderStyles.header_headerItem}>
                    <u>Ensuring our website is accessible</u>
                  </Box>
                </a>
              </Link>
            </Box>
            <Box>
              <Link
                href="https://guidedogsshop.com/?_ga=2.12167092.1043349381.1635768433-1104808427.1634557046"
                passHref
              >
                <a
                  className={HeaderStyles.header_headerItem}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Box className={HeaderStyles.header_headerItem}>
                    <u>Shop</u>
                    <Icon as={MdOpenInNew} />
                  </Box>
                </a>
              </Link>
            </Box>
            <Box>
              <a className={HeaderStyles.header_headerItem}>
                <Box className={HeaderStyles.header_headerItemm}>
                  <u>Search</u>
                </Box>
              </a>
            </Box>
            <Box>
              <Link href="https://www.guidedogs.org.uk/how-you-can-help/donating/sponsor-a-puppy/">
                <a className={HeaderStyles.header_headerItem}>
                  <Box color="brand.100">
                    <Button
                      bgColor="#8FD8FF"
                      fontSize="xl"
                      fontWeight="bold"
                      padding="7"
                      aria-label="Sponsor a puppy"
                      className={HeaderStyles.header__headerButton}
                    >
                      Sponsor a puppy
                    </Button>
                  </Box>
                </a>
              </Link>
            </Box>
          </Flex>

          <Box w="3rem"/>
        </Flex>
       
      </Box>

      <Flex
        role="navigation"
        backgroundColor={"brand.700"}
        align="center"
        shadow="base"
        display="none"
      >
        <Spacer />

        <Box></Box>

        <Link href="https://www.guidedogs.org.uk/getting-support/">
          <a className={HeaderStyles.header__navListItemLink}>
            <Box boxShadow="base" className={HeaderStyles.header__navListItem}>
              Getting support
            </Box>
          </a>
        </Link>

        <Link href="https://www.guidedogs.org.uk/how-you-can-help/">
          <a className={HeaderStyles.header__navListItemLink}>
            <Box boxShadow="base" className={HeaderStyles.header__navListItem}>
              How you can help
            </Box>
          </a>
        </Link>

        <Link href="https://www.guidedogs.org.uk/donate-now/">
          <a className={HeaderStyles.header__navListItemLink}>
            <Box boxShadow="base" className={HeaderStyles.header__navListItem}>
              Donate
            </Box>
          </a>
        </Link>

        <Link href="https://www.guidedogs.org.uk/play-and-win/">
          <a className={HeaderStyles.header__navListItemLink}>
            <Box boxShadow="base" className={HeaderStyles.header__navListItem}>
              Play and win
            </Box>
          </a>
        </Link>

        <Link href="https://www.guidedogs.org.uk/about-us/">
          <a className={HeaderStyles.header__navListItemLink}>
            <Box boxShadow="base" className={HeaderStyles.header__navListItem}>
              About us
            </Box>
          </a>
        </Link>

        <Box></Box>

        <Spacer />
      </Flex>
      
    </>
  );
}

export async function getPosts() {
  //const blogPostTags = await ContentfulApi.getAllUniquePostTags();

  console.log("running getPosts");

  //const posts = [];

  //const post = await ContentfulApi.getPostBySlug("guide-dogs-annual-report-for-2021-is-published");

  const posts = await ContentfulApi.getAllBlogPosts();

  console.log(posts);

  return {
    posts,
  };
  /** 
    props: {
      sortedBlogPostTags,
      featuredPost,
      topPostsArray,
      preview,
      postSummaries: postSummaries.items,
      totalPages,
      currentPage: "1",
      pageContent: pageContent || null,
    },
  */
}
