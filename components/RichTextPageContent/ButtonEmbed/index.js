import RichTextPageContentStyles from "@styles/RichTextPageContent.module.css";
import TypographyStyles from "@styles/Typography.module.scss";
import ContentListStyles from "@styles/ContentList.module.css";
import Link from "next/link";

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

export default function ButtonEmbed(props) {
  const { embedUrl, title } = props;

  return (
    <div>
      <Flex alignItems="center" p={0}>
        <Box>
          <Link href={`${embedUrl}`}>
            <a>
              <Flex
                alignSelf="center"
                className={ContentListStyles.contentList__readmorelink}
              >
                <h3>{title}</h3>

                <Box pl={2} alignSelf="center">
                  <img
                    src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/icon-arrow-blue.svg`}
                    width="12"
                    style={{ border: "none" }}
                  />
                </Box>
              </Flex>
            </a>
          </Link>
        </Box>
        <Spacer />
      </Flex>
    </div>
  );
}
