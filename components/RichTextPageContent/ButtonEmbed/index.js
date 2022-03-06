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
      <Flex alignItems="center" p={7}>
                <Box alignSelf="center">
      <Link href={`${embedUrl}`}>
        <a>
          <h3 className={ContentListStyles.contentList__readmorelink}>
            {title}
          </h3>
        </a>
      </Link>
      </Box>
      </Flex>
    </div>
  );
}
