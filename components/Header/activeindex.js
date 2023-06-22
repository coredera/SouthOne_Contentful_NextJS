import HeaderStyles from "@styles/Header.module.css";
import Link from "next/link";
import SocialLinks from "@components/SocialLinks";
import { useRouter } from "next/router";
import { Config } from "@utils/Config";
//import Logo from "./svg/Logo";
//import Logo from "./logo/Logo";
import Logo from "../Logo/index.tsx";

import {
  Box,
  Flex,
  Heading,
  useBreakpointValue,
  useColorMode,
  SimpleGrid,
  GridItem,
  Spacer,
} from "@chakra-ui/react";

export default function Header() {
  const router = useRouter();

  //const { colorMode } = useColorMode();
  //const colorSecondary = {
  //  light: "#002B5B",
  //  dark: "#002B5B",
  //};

  return (
    <Box backgroundColor={"brand.100"}>
      <Box backgroundColor={"brand.100"} maxHeight="127">
        <SimpleGrid columns={2} padding={6}>
          <GridItem width="162" heigh="74">
            <Link legacyBehavior href="/" width="162" heigh="74">
              <a
                className={HeaderStyles.header__logoContainerLink}
                aria-label="Navigate to home page"
                width="162"
                heigh="74"
              >
                <Logo maxWidth="162" maxHeight="74" />
              </a>
            </Link>
          </GridItem>
          <GridItem></GridItem>
        </SimpleGrid>
      </Box>
      <Flex role="navigation" backgroundColor={"brand.700"} align="center">
       <Spacer />
          {Config.menuLinks.map((link) => {
            const onBlogPost =
              router.pathname === Config.pageMeta.post.slug &&
              link.path === Config.pageMeta.home.slug;

            const onBlogIndexPage =
              router.pathname === Config.pageMeta.homePage.slug &&
              link.path === Config.pageMeta.home.slug;

            const isActive =
              onBlogPost || onBlogIndexPage || router.pathname === link.path;
            const isActiveClass = isActive
              ? ` ${HeaderStyles.header__navListItem__active}`
              : "";

            return (
              <>
       
                <Link legacyBehavior href={link.path}>
                  <a className={HeaderStyles.header__navListItemLink}>
                    <Box
                      border = "3px"
                     
                      borderRightStyle = "solid"
                      borderRightColor = "lightgrey"

                      key={link.displayName}
                      className={
                        HeaderStyles.header__navListItem + isActiveClass
                      }
                    >
                      {link.displayName}
                    </Box>
                  </a>
                </Link>
         
              </>
            );
          })}
        <Spacer />
      </Flex>
    </Box>
  );
}
