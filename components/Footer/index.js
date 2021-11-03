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
} from "@chakra-ui/react";

import Link from "next/link";

export default function Footer() {
  const date = new Date();

  return (
    <footer className={FooterStyles.footer}>
      <Flex>
        <Box>
          <Heading fontSize="2.125rem">Useful links</Heading>
          Want to find out more about Guide Dogs and sight loss? Here are other
          helpful links...
          
          <SimpleGrid columns="2">
            <GridItem colspac="1">
              <Flex className={FooterStyles.links}>
              <img src="./images/icon-arrow-blue-tint.svg" className={FooterStyles.icons} />  
              <Link href="https://www.guidedogs.org.uk/faqs/">
              FAQs  
              </Link>        
              </Flex>
            </GridItem>
            <GridItem colspac="1">two</GridItem>
          </SimpleGrid>
        </Box>
        <Box>
          <Heading fontSize="2.125rem">Keep in touch</Heading>
          Do you have an enquiry? Why not contact a member of our friendly
          staff?
        </Box>
        <Box>
          <Heading fontSize="2.125rem">Social media</Heading>
          Want to keep up to date with all the latest at Guide Dogs? Follow us
          on social media.
        </Box>
      </Flex>
      <Flex>
        <Box width="50%">
          © The Guide Dogs for the Blind Association 2021
          <p></p>
          Guide Dogs is a working name of The Guide Dogs for the Blind
          Association. Registered Office: Hillfields, Burghfield Common,
          Reading, Berkshire RG7 3YG. A company limited by guarantee registered
          in England and Wales (291646) and a charity registered in England and
          Wales (209617) and Scotland (SC038979)
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
