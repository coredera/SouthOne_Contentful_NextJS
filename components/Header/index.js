import HeaderStyles from "@styles/Header.module.scss";
import Link from "next/link";
import SocialLinks from "@components/SocialLinks";
import { useRouter } from "next/router";
import { Config } from "@utils/Config";
//import Logo from "./svg/Logo";
//import Logo from "./logo/Logo";
import Logo from "../Logo/index.tsx";
//import search from "@algolia/algoliasearchNetlify.js";

import { MdOpenInNew } from "react-icons/md";

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
} from "@chakra-ui/react";

export default function Header() {
  const router = useRouter();

  //const { colorMode } = useColorMode();
  //const colorSecondary = {
  //  light: "#002B5B",
  //  dark: "#002B5B",
  //};

  return (
    <>
      <Box zIndex="999" className={HeaderStyles.header}>
        <Flex
          backgroundColor={"brand.100"}
          maxHeight="180"
          height="142"
          alignItems="center"
          alignContent="start"
          zIndex="999"
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

          <Box alignSelf="center" p={10}>
            <Link href="https://www.guidedogs.org.uk">
              <a
                className={HeaderStyles.header__logoContainerLink}
                aria-label="Navigate to home page"
              >
                <Logo />
              </a>
            </Link>
          </Box>
      

          <Spacer />

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
          <Spacer />
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
