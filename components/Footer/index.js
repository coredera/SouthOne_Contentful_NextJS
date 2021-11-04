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
  Container,
} from "@chakra-ui/react";

import Link from "next/link";

export default function Footer() {
  const date = new Date();

  return (
    <footer className={FooterStyles.footer}>
      <Container maxWidth="max">
        <Flex className={FooterStyles.linkpanels} pt={8} pb={10}>
          <Spacer />
          <Box maxWidth="475">
            <VStack
              spacing={3}
              alignItems="flex-start"
              pr={12}
              className={FooterStyles.leftlinkpanel}
            >
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
                    <Link href="https://www.guidedogs.org.uk/about-us/careers/">
                      Jobs
                    </Link>
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
                    <Link href="https://www.guidedogs.org.uk/inspiring-stories/">
                      Inpsiring stories
                    </Link>
                  </Flex>
                </GridItem>
              </SimpleGrid>
            </VStack>
            <Spacer />
          </Box>
          <Box maxWidth="475">
            <VStack
              spacing={3}
              alignItems="flex-start"
              pl={6}
              pr={6}
              className={FooterStyles.leftlinkpanel}
            >
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
                <Link href="https://www.guidedogs.org.uk/contact-us/">
                  Contact us
                </Link>
              </Flex>
              <Flex className={FooterStyles.links}>
                <Box pr={3}>
                  <img
                    src="./images/icon-email-blue-tint.svg"
                    className={FooterStyles.icons}
                  />
                </Box>
                <Link href="https://www.guidedogs.org.uk/contact-us/email-updates/">
                  Sign up to our email updates
                </Link>
              </Flex>
            </VStack>
          </Box>
          <Box maxWidth="475">
            <VStack spacing={3} alignItems="flex-start" pl={12}>
              <Heading fontSize="2.125rem">Social media</Heading>
              <Text>
                Want to keep up to date with all the latest at Guide Dogs?
                Follow us on social media.
              </Text>
            </VStack>
          </Box>
          <Spacer />
        </Flex>
        <Flex pt={8} pb={10}>
          <Box maxWidth="712" pr={5}>
            <Box fontSize="lg" fontWeight="bold" pb={5}>
              © The Guide Dogs for the Blind Association 2021
            </Box>
            <Box fontWeight="semibold">
              Guide Dogs is a working name of The Guide Dogs for the Blind
              Association. Registered Office: Hillfields, Burghfield Common,
              Reading, Berkshire RG7 3YG. A company limited by guarantee
              registered in England and Wales (291646) and a charity registered
              in England and Wales (209617) and Scotland (SC038979)
            </Box>
          </Box>

          <Box maxWidth="712" alignItems="center" pt={5}>
            <Flex>
              <Box className={FooterStyles.logos}>
                <Link href="https://www.guidedogs.org.uk/getting-support/#">
                  <a>
                    <img src="./images/footer-gift-aid.png" />
                  </a>
                </Link>
              </Box>
              <Box className={FooterStyles.logos}>
                <Link href="https://www.guidedogs.org.uk/getting-support/#">
                  <a>
                    <img src="./images/footer-thawte.png" />
                  </a>
                </Link>
              </Box>
              <Box className={FooterStyles.logos}>
                <Link href="https://www.guidedogs.org.uk/getting-support/#">
                  <a>
                    <img src="./images/footer-fundraising-regulator.png" />
                  </a>
                </Link>
              </Box>
              <Box className={FooterStyles.logos}>
                <img src="./images/business-disability-forum-logo.png" />
              </Box>
            </Flex>
          </Box>
        </Flex>

        <Flex>
          <Box className={FooterStyles.bottomlinks}>
            <Link href="https://www.guidedogs.org.uk/sitemap">Sitemap</Link>
          </Box>
          <Box className={FooterStyles.bottomlinks}>
            <Link href="https://www.guidedogs.org.uk/about-us/finance-governance">
              Finance and Governance
            </Link>
          </Box>
          <Box className={FooterStyles.bottomlinks}>
            <Link href="https://www.guidedogs.org.uk/website-terms-of-use">
              Website terms of use
            </Link>
          </Box>
          <Box className={FooterStyles.bottomlinks}>
            <Link href="https://www.guidedogs.org.uk/about-us/careers/diversity-and-safeguarding">
              Safeguarding
            </Link>
          </Box>
          <Box className={FooterStyles.bottomlinks}>
            <Link href="https://www.guidedogs.org.uk/privacy-policy">
              Privacy policy
            </Link>
          </Box>
          <Box className={FooterStyles.bottomlinks}>
            <Link href="https://www.guidedogs.org.uk/modern-slavery">
              Modern Slavery
            </Link>
          </Box>
          <Spacer />
        </Flex>
      </Container>
    </footer>
  );
}
