import SocialLinks from "@components/SocialLinks";
import FooterStyles from "@styles/Footer.module.scss";
import ButtonStyles from "@styles/Button.module.css";
import { Config } from "@utils/Config";
import TypographyStyles from "@styles/Typography.module.scss";

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

import Link from "next/link";

export default function Footer() {
  const date = new Date();

  const colSpan = useBreakpointValue({ base: 2, md: 1 });

  const panel1title = "Useful links";
  const panel1body =
    "Want to find out more about Guide Dogs and sight loss? Here are other helpful links...";

  const panel2title = "Keep in touch";
  const panel2body =
    "Do you have an enquiry? Why not contact a member of our friendly staff?";

  const panel3title = "Social media";
  const panel3body =
    "Want to keep up to date with all the latest at Guide Dogs? Follow us on social media.";

  return (
    <footer className={FooterStyles.footer}>
      <div id="footer" />
      <Container maxWidth="max">
        {/*Mobile size components*/}
        <Box display={{ base: "none", md: "none" }}>
          <Accordion defaultIndex={[0]} allowMultiple>
            <AccordionItem
              className={FooterStyles.accordionitem}
              borderColor="#3D5370"
            >
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton>
                      {isExpanded ? (
                        <img
                          src="/images/accordion-minus--blue-tint.svg"
                          className={FooterStyles.icons}
                        />
                      ) : (
                        <img
                          src="/images/accordion-plus--blue-tint.svg"
                          className={FooterStyles.icons}
                        />
                      )}

                      <Box flex="1" textAlign="left">
                        <Heading fontSize="1.5rem" fontWeight="normal" pl={5}>
                          {panel1title}
                        </Heading>
                      </Box>
                    </AccordionButton>
                  </h2>
                  <AccordionPanel
                    pb={4}
                    className={FooterStyles.accordionpanel}
                  >
                    {panel1body}
                    <SimpleGrid columns={2} pt={5} width="100%" rowGap={3}>
                      <GridItem colSpan={colSpan}>
                        <Flex className={FooterStyles.links}>
                          <Box pr={3}>
                            <img
                              src="/images/icon-arrow-blue-tint.svg"
                              className={FooterStyles.icons}
                            />
                          </Box>
                          <Box className={FooterStyles.linktext}>
                            <Link href="https://www.guidedogs.org.uk/faqs/">
                              FAQs
                            </Link>
                          </Box>
                        </Flex>
                      </GridItem>
                      <GridItem colSpan={colSpan}>
                        <Flex className={FooterStyles.links}>
                          <Box pr={3}>
                            <img
                              src="/images/icon-arrow-blue-tint.svg"
                              className={FooterStyles.icons}
                            />
                          </Box>
                          <Box className={FooterStyles.linktext}>
                            <Link href="https://www.guidedogs.org.uk/news/">
                              News
                            </Link>
                          </Box>
                        </Flex>
                      </GridItem>

                      <GridItem colSpan={colSpan}>
                        <Flex className={FooterStyles.links}>
                          <Box pr={3}>
                            <img
                              src="/images/icon-arrow-blue-tint.svg"
                              className={FooterStyles.icons}
                            />
                          </Box>
                          <Box className={FooterStyles.linktext}>
                            <Link href="https://www.guidedogs.org.uk/about-us/careers/">
                              Jobs
                            </Link>
                          </Box>
                        </Flex>
                      </GridItem>
                      <GridItem colSpan={colSpan}>
                        <Flex className={FooterStyles.links}>
                          <Box pr={3}>
                            <img
                              src="/images/icon-arrow-blue-tint.svg"
                              className={FooterStyles.icons}
                            />
                          </Box>
                          <Box className={FooterStyles.linktext}>
                            <Link href="https://www.guidedogs.org.uk/inspiring-stories/">
                              Inspiring stories
                            </Link>
                          </Box>
                        </Flex>
                      </GridItem>
                    </SimpleGrid>
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
            <Box p={2}></Box>

            <AccordionItem
              className={FooterStyles.accordionitem}
              borderColor="#3D5370"
            >
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton>
                      {isExpanded ? (
                        <img
                          src="/images/accordion-minus--blue-tint.svg"
                          className={FooterStyles.icons}
                        />
                      ) : (
                        <img
                          src="/images/accordion-plus--blue-tint.svg"
                          className={FooterStyles.icons}
                        />
                      )}

                      <Box flex="1" textAlign="left">
                        <Heading fontSize="1.5rem" fontWeight="normal" pl={5}>
                          {panel2title}
                        </Heading>
                      </Box>
                    </AccordionButton>
                  </h2>
                  <AccordionPanel
                    pb={4}
                    className={FooterStyles.accordionpanel}
                  >
                    {panel2body}
                    <Box pt={5}>
                      <Flex className={FooterStyles.links} p={1}>
                        <Box pr={3}>
                          <img
                            src="/images/icon-arrow-blue-tint.svg"
                            className={FooterStyles.icons}
                          />
                        </Box>
                        <Box className={FooterStyles.linktext}>
                          <Link href="https://www.guidedogs.org.uk/contact-us/">
                            Contact us
                          </Link>
                        </Box>
                      </Flex>
                      <Flex className={FooterStyles.links} p={1}>
                        <Box pr={3}>
                          <img
                            src="/images/icon-email-blue-tint.svg"
                            className={FooterStyles.icons}
                          />
                        </Box>
                        <Box className={FooterStyles.linktext}>
                          <Link href="https://www.guidedogs.org.uk/contact-us/email-updates/">
                            Sign up to our email updates
                          </Link>
                        </Box>
                      </Flex>
                    </Box>
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
            <Box p={2}></Box>
            <AccordionItem
              className={FooterStyles.accordionitem}
              borderColor="#3D5370"
            >
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton>
                      {isExpanded ? (
                        <img
                          src="/images/accordion-minus--blue-tint.svg"
                          className={FooterStyles.icons}
                        />
                      ) : (
                        <img
                          src="/images/accordion-plus--blue-tint.svg"
                          className={FooterStyles.icons}
                        />
                      )}

                      <Box flex="1" textAlign="left">
                        <Heading fontSize="1.5rem" fontWeight="normal" pl={5}>
                          {panel3title}
                        </Heading>
                      </Box>
                    </AccordionButton>
                  </h2>
                  <AccordionPanel
                    pb={4}
                    className={FooterStyles.accordionpanel}
                  >
                    {panel3body}
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
            <Box p={2}></Box>
          </Accordion>
        </Box>

        {/*Desktop size components*/}

        <Box display={{ base: "none", md: "none" }}>
          <Flex className={FooterStyles.linkpanels} pt={8} pb={10}>
            <Spacer />
            <Box maxWidth="475">
              <VStack
                spacing={3}
                alignItems="flex-start"
                pr={12}
                className={FooterStyles.leftlinkpanel}
              >
                <Heading fontSize="2.125rem">{panel1title}</Heading>
                <Text>{panel1body}</Text>
                <SimpleGrid columns={2} pt={5} width="100%" rowGap={3}>
                  <GridItem colSpan={colSpan}>
                    <Flex className={FooterStyles.links}>
                      <Box pr={3}>
                        <img
                          src="/images/icon-arrow-blue-tint.svg"
                          className={FooterStyles.icons}
                        />
                      </Box>
                      <Link href="https://www.guidedogs.org.uk/faqs/">
                        FAQs
                      </Link>
                    </Flex>
                  </GridItem>
                  <GridItem colSpan={colSpan}>
                    <Flex className={FooterStyles.links}>
                      <Box pr={3}>
                        <img
                          src="/images/icon-arrow-blue-tint.svg"
                          className={FooterStyles.icons}
                        />
                      </Box>
                      <Link href="https://www.guidedogs.org.uk/news/">
                        News
                      </Link>
                    </Flex>
                  </GridItem>

                  <GridItem colSpan={colSpan}>
                    <Flex className={FooterStyles.links}>
                      <Box pr={3}>
                        <img
                          src="/images/icon-arrow-blue-tint.svg"
                          className={FooterStyles.icons}
                        />
                      </Box>
                      <Link href="https://www.guidedogs.org.uk/about-us/careers/">
                        Jobs
                      </Link>
                    </Flex>
                  </GridItem>
                  <GridItem colSpan={colSpan}>
                    <Flex className={FooterStyles.links}>
                      <Box pr={3}>
                        <img
                          src="/images/icon-arrow-blue-tint.svg"
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
                <Heading fontSize="2.125rem">{panel2title}</Heading>
                <Text>{panel2body}</Text>
                <Flex className={FooterStyles.links} pt={5}>
                  <Box pr={3}>
                    <img
                      src="/images/icon-arrow-blue-tint.svg"
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
                      src="/images/icon-email-blue-tint.svg"
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
        </Box>

        <Flex
          pt={8}
          pb={10}
          maxWidth="1200"
          direction={{ base: "column", lg: "row" }}
        >
          <Flex>
            <Box pr={8}>
              <Box
                className={TypographyStyles.bodyCopy}
                color="white"
                marginBottom={1}
                pb={5}
              >
                © The Guide Dogs for the Blind Association 2021
              </Box>
              <Box className={TypographyStyles.bodyCopySS} color="white">
                Guide Dogs is a working name of The Guide Dogs for the Blind
                Association. Registered Office: Hillfields, Burghfield Common,
                Reading, Berkshire RG7 3YG. A company limited by guarantee
                registered in England and Wales (291646) and a charity
                registered in England and Wales (209617) and Scotland (SC038979)
              </Box>
            </Box>
          </Flex>
          <Flex alignItems="center" direction={{ base: "column", md: "row" }}>
            <Flex>
              <Box className={FooterStyles.logos}>
                <Link href="https://www.guidedogs.org.uk/getting-support/#">
                  <a>
                    <img
                      src="/images/footer-gift-aid.png"
                      className={FooterStyles.logosize}
                    />
                  </a>
                </Link>
              </Box>
              <Box className={FooterStyles.logos}>
                <Link href="https://www.guidedogs.org.uk/getting-support/#">
                  <a>
                    <img
                      src="/images/footer-thawte.png"
                      className={FooterStyles.logosize}
                    />
                  </a>
                </Link>
              </Box>
            </Flex>
            <Flex>
              <Box className={FooterStyles.logos}>
                <Link href="https://www.guidedogs.org.uk/getting-support/#">
                  <a>
                    <img
                      src="./images/footer-fundraising-regulator.png"
                      className={FooterStyles.logosize}
                    />
                  </a>
                </Link>
              </Box>
              <Box className={FooterStyles.logos}>
                <img
                  src="./images/business-disability-forum-logo.png"
                  className={FooterStyles.logosize}
                />
              </Box>
            </Flex>
          </Flex>
        </Flex>

        <Flex direction={{ base: "column", md: "row" }}>
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
