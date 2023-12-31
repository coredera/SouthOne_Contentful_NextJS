import SocialLinks from "@components/SocialLinks";
import FooterStyles from "@styles/Footer.module.scss";
import ButtonStyles from "@styles/Button.module.css";
import { Config } from "@utils/Config";
import TypographyStyles from "@styles/Typography.module.scss";
//import Image from "next/image";

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
    "Want to find out more about South One newham ? Here are other helpful links...";

  const panel2title = "Keep in touch";
  const panel2body =
    "Do you have an enquiry? Why not contact a member of our friendly staff?";

  const panel3title = "Social media";
  const panel3body =
    "Want to keep up to date with all the latest at South One Newham? Follow us on social media.";

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
                          src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/accordion-minus--blue-tint.svg`}
                          className={FooterStyles.icons}
                        />
                      ) : (
                        <img
                          src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/accordion-plus--blue-tint.svg`}
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
                              src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/icon-arrow-blue-tint.svg`}
                              className={FooterStyles.icons}
                            />
                          </Box>
                          <Box className={FooterStyles.linktext}>
                            <Link legacyBehavior href="https://www.examplesite.org.uk/faqs/">
                              FAQs
                            </Link>
                          </Box>
                        </Flex>
                      </GridItem>
                      <GridItem colSpan={colSpan}>
                        <Flex className={FooterStyles.links}>
                          <Box pr={3}>
                            <img
                              src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/icon-arrow-blue-tint.svg`}
                              className={FooterStyles.icons}
                            />
                          </Box>
                          <Box className={FooterStyles.linktext}>
                            <Link legacyBehavior href="https://www.examplesite.org.uk/news/">
                              News
                            </Link>
                          </Box>
                        </Flex>
                      </GridItem>

                      <GridItem colSpan={colSpan}>
                        <Flex className={FooterStyles.links}>
                          <Box pr={3}>
                            <img
                              src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/icon-arrow-blue-tint.svg`}
                              className={FooterStyles.icons}
                            />
                          </Box>
                          <Box className={FooterStyles.linktext}>
                            <Link legacyBehavior href="https://www.examplesite.org.uk/about-us/careers/">
                              Jobs
                            </Link>
                          </Box>
                        </Flex>
                      </GridItem>
                      <GridItem colSpan={colSpan}>
                        <Flex className={FooterStyles.links}>
                          <Box pr={3}>
                            <img
                              src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/icon-arrow-blue-tint.svg`}
                              className={FooterStyles.icons}
                            />
                          </Box>
                          <Box className={FooterStyles.linktext}>
                            <Link legacyBehavior href="https://www.examplesite.org.uk/inspiring-stories/">
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
                          src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/accordion-minus--blue-tint.svg`}
                          className={FooterStyles.icons}
                        />
                      ) : (
                        <img
                          src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/accordion-plus--blue-tint.svg`}
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
                            src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/icon-arrow-blue-tint.svg`}
                            className={FooterStyles.icons}
                          />
                        </Box>
                        <Box className={FooterStyles.linktext}>
                          <Link legacyBehavior href="https://www.examplesite.org.uk/contact-us/">
                            Contact us
                          </Link>
                        </Box>
                      </Flex>
                      <Flex className={FooterStyles.links} p={1}>
                        <Box pr={3}>
                          <img
                            src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/icon-email-blue-tint.svg`}
                            className={FooterStyles.icons}
                          />
                        </Box>
                        <Box className={FooterStyles.linktext}>
                          <Link legacyBehavior href="https://www.examplesite.org.uk/contact-us/email-updates/">
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
                          src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/accordion-minus--blue-tint.svg`}
                          className={FooterStyles.icons}
                        />
                      ) : (
                        <img
                          src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/accordion-plus--blue-tint.svg`}
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
                          src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/icon-arrow-blue-tint.svg`}
                          className={FooterStyles.icons}
                        />
                      </Box>
                      <Link legacyBehavior href="https://www.examplesite.org.uk/faqs/">
                        FAQs
                      </Link>
                    </Flex>
                  </GridItem>
                  <GridItem colSpan={colSpan}>
                    <Flex className={FooterStyles.links}>
                      <Box pr={3}>
                        <img
                          src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/icon-arrow-blue-tint.svg`}
                          className={FooterStyles.icons}
                        />
                      </Box>
                      <Link legacyBehavior href="https://www.examplesite.org.uk/news/">
                        News
                      </Link>
                    </Flex>
                  </GridItem>

                  <GridItem colSpan={colSpan}>
                    <Flex className={FooterStyles.links}>
                      <Box pr={3}>
                        <img
                          src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/icon-arrow-blue-tint.svg`}
                          className={FooterStyles.icons}
                        />
                      </Box>
                      <Link legacyBehavior href="https://www.examplesite.org.uk/about-us/careers/">
                        Jobs
                      </Link>
                    </Flex>
                  </GridItem>
                  <GridItem colSpan={colSpan}>
                    <Flex className={FooterStyles.links}>
                      <Box pr={3}>
                        <img
                          src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/icon-arrow-blue-tint.svg`}
                          className={FooterStyles.icons}
                        />
                      </Box>
                      <Link legacyBehavior href="https://www.examplesite.org.uk/inspiring-stories/">
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
                      src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/icon-arrow-blue-tint.svg`}
                      className={FooterStyles.icons}
                    />
                  </Box>
                  <Link legacyBehavior href="https://www.examplesite.org.uk/contact-us/">
                    Contact us
                  </Link>
                </Flex>
                <Flex className={FooterStyles.links}>
                  <Box pr={3}>
                    <img
                      src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/icon-email-blue-tint.svg`}
                      className={FooterStyles.icons}
                    />
                  </Box>
                  <Link legacyBehavior href="https://www.examplesite.org.uk/contact-us/email-updates/">
                    Sign up to our email updates
                  </Link>
                </Flex>
              </VStack>
            </Box>
            <Box maxWidth="475">
              <VStack spacing={3} alignItems="flex-start" pl={12}>
                <Heading fontSize="2.125rem">Social media</Heading>
                <Text>
                  Want to keep up to date with all the latest at South One Newham?
                  Follow us on social media.
                </Text>
              </VStack>
            </Box>
            <Spacer />
          </Flex>
        </Box>

        {/*Final implementation*/}

        <Box p={0}>
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
                  © South One Newham 2023
                </Box>
                <Box className={TypographyStyles.bodyCopySS} color="white">
                  South One Newham is a Primary Care Network consisting of a group of GP 
                  surgeries in Newham
                </Box>
              </Box>
            </Flex>
            
            
          </Flex>

          <Flex direction={{ base: "column", md: "row" }}>
            <Box className={FooterStyles.bottomlinks}>
              <Link legacyBehavior href="www.southonenewham.com">Sitemap</Link>
            </Box>
                   <Box className={FooterStyles.bottomlinks}>
              <Link legacyBehavior href="www.southonenewham.com">
                Privacy policy
              </Link>
            </Box>
            <Spacer />
          </Flex>
        </Box>
      </Container>
    </footer>
  );
}
