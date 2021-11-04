import SocialLinks from "@components/SocialLinks";
import FooterStyles from "@styles/Footer.module.scss";
import ButtonStyles from "@styles/Button.module.css";
import { Config } from "@utils/Config";

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
} from "@chakra-ui/react";

import Link from "next/link";

export default function Footer() {
  const date = new Date();

  return (
    <footer className={FooterStyles.footer}>
      <Flex pt={8} pb={10} className={FooterStyles.linkpanels}>
        <Spacer />
        <Box maxWidth="475">
          <VStack spacing={3} alignItems="flex-start" pr={12} className={FooterStyles.leftlinkpanel}>
            <Heading fontSize="2.125rem">Useful links</Heading>
            <Text>
              Want to find out more about Guide Dogs and sight loss? Here are
              other helpful links...
            </Text>
            <SimpleGrid columns="2" pt={5} width="100%">
              <GridItem colspac="1">
                <Flex className={FooterStyles.links}>
                  <Box pr={3}>
                    <img
                      src="./images/icon-arrow-blue-tint.svg"
                      className={FooterStyles.icons}
                    />
                  </Box>
                  <Link href="https://www.guidedogs.org.uk/faqs/">FAQs</Link>
                </Flex>
              </GridItem>
              <GridItem colspac="1">
                <Flex className={FooterStyles.links}>
                  <Box pr={3}>
                    <img
                      src="./images/icon-arrow-blue-tint.svg"
                      className={FooterStyles.icons}
                    />
                  </Box>
                  <Link href="https://www.guidedogs.org.uk/news/">News</Link>
                </Flex>
              </GridItem>
            </SimpleGrid>
            <SimpleGrid columns="2" pt={5} width="100%">
              <GridItem colspac="1">
                <Flex className={FooterStyles.links}>
                  <Box pr={3}>
                    <img
                      src="./images/icon-arrow-blue-tint.svg"
                      className={FooterStyles.icons}
                    />
                  </Box>
                  <Link href="https://www.guidedogs.org.uk/about-us/careers/">Jobs</Link>
                </Flex>
              </GridItem>
              <GridItem colspac="1">
                <Flex className={FooterStyles.links}>
                  <Box pr={3}>
                    <img
                      src="./images/icon-arrow-blue-tint.svg"
                      className={FooterStyles.icons}
                    />
                  </Box>
                  <Link href="https://www.guidedogs.org.uk/inspiring-stories/">Inpsiring stories</Link>
                </Flex>
              </GridItem>
            </SimpleGrid>
          </VStack>
        </Box>
        <Box maxWidth="475">
          <VStack spacing={3} alignItems="flex-start" pl={6} pr={6} className={FooterStyles.leftlinkpanel}>
            <Heading fontSize="2.125rem">Keep in touch</Heading>
            <Text>
              Do you have an enquiry? Why not contact a member of our friendly
              staff?
            </Text>
            <Flex className={FooterStyles.links} pt={5}>
                  <Box pr={3}>
                    <img
                      src="./images/icon-arrow-blue-tint.svg"
                      className={FooterStyles.icons}
                    />
                  </Box>
                  <Link href="https://www.guidedogs.org.uk/contact-us/">Contact us</Link>
                </Flex>
                <Flex className={FooterStyles.links}>
                  <Box pr={3}>
                    <img
                      src="./images/icon-email-blue-tint.svg"
                      className={FooterStyles.icons}
                    />
                  </Box>
                  <Link href="https://www.guidedogs.org.uk/contact-us/email-updates/">Sign up to our email updates</Link>
                </Flex>
          </VStack>
        </Box>
        <Box maxWidth="475">
          <VStack spacing={3} alignItems="flex-start" pl={12}>
            <Heading fontSize="2.125rem">Social media</Heading>
            <Text>
              Want to keep up to date with all the latest at Guide Dogs? Follow
              us on social media.
            </Text>
          </VStack>
        </Box>
        <Spacer />
        
      </Flex>
      <Flex pt={5}>
        <Box width="50%">
          <Box fontSize="lg" fontWeight="bold" pb={5}>
          © The Guide Dogs for the Blind Association 2021
          </Box>
          <Box fontWeight="normal">
          Guide Dogs is a working name of The Guide Dogs for the Blind
          Association. Registered Office: Hillfields, Burghfield Common,
          Reading, Berkshire RG7 3YG. A company limited by guarantee registered
          in England and Wales (291646) and a charity registered in England and
          Wales (209617) and Scotland (SC038979)
          </Box>
        </Box>
        <Box width="25%" alignItems="center">
          <SimpleGrid columns="2">
            <GridItem colspan="1" align="center">
              <img src="./images/footer-gift-aid.png" />
            </GridItem>
            <GridItem colspac="1">
              <img src="./images/footer-thawte.png" />
            </GridItem>
          </SimpleGrid>
        </Box>
        <Box width="25%">
          <SimpleGrid columns="2">
            <GridItem colspan="1" align="center">
              <img src="./images/footer-fundraising-regulator.png" />
            </GridItem>
            <GridItem colspac="1">
              <img src="./images/business-disability-forum-logo.png" />
            </GridItem>
          </SimpleGrid>
        </Box>
      </Flex>
    </footer>
  );
}
