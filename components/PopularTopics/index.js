
import TypographyStyles from "@styles/Typography.module.scss";
import ContentListStyles from "@styles/ContentList.module.css";
import Link from "next/link";

import router, { useRouter } from "next/router";

import {
  Box,
  Flex,
  Heading,
  useBreakpointValue,
  useColorMode,
  SimpleGrid,
  GridItem,
  Spacer,
  Select,
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
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

export default function PopularTopics(props) {
  const sortedBlogPostTags = props.sortedBlogPostTags;

  //console.log(sortedBlogPostTags);

  return (
    <>
      <Flex
        className={ContentListStyles.contentList__topSectionblue}
        backgroundColor="brand.50"
        direction="column"
       
      >
        <Flex>
          <h2 className={TypographyStyles.heading__h2}>Popular Topics</h2>
        </Flex>
        <Flex>
          <Wrap spacing="1.8rem" justify="center" align="center">
            <WrapItem>
              <Link
                href={`/topic/inspiring-people`}
                className={TypographyStyles.popularTopics}
              >
                <a className={TypographyStyles.popularTopics}>
                  Inspiring People
                </a>
              </Link>
            </WrapItem>

            <WrapItem>
              <Link href={`/topic/eye-health`}>
                <a className={TypographyStyles.popularTopics}>Eye Health</a>
              </Link>
            </WrapItem>

            <WrapItem>
              <Link href={`/topic/news`}>
                <a className={TypographyStyles.popularTopics}>News</a>
              </Link>
            </WrapItem>

            <WrapItem>
              <Link href={`/topic/technology`}>
                <a className={TypographyStyles.popularTopics}>Technology</a>
              </Link>
            </WrapItem>

            <WrapItem>
              <Link href={`/topic/campaigning`}>
                <a className={TypographyStyles.popularTopics}>Campaigning</a>
              </Link>
            </WrapItem>

            <WrapItem>
              <Link href={`/topic/dogs`}>
                <a className={TypographyStyles.popularTopics}>Dogs</a>
              </Link>
            </WrapItem>
          </Wrap>
        </Flex>
        <Flex>
          <Box className={ContentListStyles.contentList__selectTopic}>
            <Select
              placeholder="Select a topic"
              id="selectBox"
              onChange={() => changeFunc()}
              bgColor="white"
              fontFamily="Trebuchet MS"
            >
              {sortedBlogPostTags.map((tag) => (
                <option value={tag.id} key={tag.id}>
                  {tag.name}
                </option>
              ))}
            </Select>
          </Box>

          <Spacer />
        </Flex>
      </Flex>
    </>
  );
}

export async function changeFunc(tagid) {
  var selectBox = document.getElementById("selectBox");
  var selectedValue = selectBox.options[selectBox.selectedIndex].value;
  // alert(selectedValue);

  router.push(`/topic/${selectedValue}`);
}
