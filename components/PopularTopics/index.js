import TypographyStyles from "@styles/Typography.module.scss";
import ContentListStyles from "@styles/ContentList.module.css";
import Link from "next/link";
import ContentWrapper from "@components/ContentWrapper";

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
      <Box bgColor="brand.100">
        <ContentWrapper>
          <Box pb={20} pt={5}>
            <Flex color="white" pt={10}>
              <h2 className={TypographyStyles.heading__h2}>Popular Topics</h2>
            </Flex>
            <Box display={{ base: "none", md: "block" }}>
              <Flex color="white" alignSelf="center">
                <Box>
                  <Flex>
                    <Box pr={5} alignSelf="center">
                      <img
                        src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/icon-arrow-blue-tint.svg`}
                        width="15"
                      />
                    </Box>

                    <Link
                      href={`/topic/inspiring-people`}
                      className={TypographyStyles.popularTopics}
                    >
                      <a className={TypographyStyles.popularTopics}>
                        Inspiring People
                      </a>
                    </Link>
                  </Flex>
                  <Box pt={4}></Box>
                  <Flex>
                    <Box pr={5} alignSelf="center">
                      <img
                        src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/icon-arrow-blue-tint.svg`}
                        width="15"
                      />
                    </Box>
                    <Link href={`/topic/eye-health`}>
                      <a className={TypographyStyles.popularTopics}>
                        Eye Health
                      </a>
                    </Link>
                  </Flex>
                </Box>
                <Spacer />
                <Box>
                  <Flex>
                    <Box pr={5} alignSelf="center">
                      <img
                        src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/icon-arrow-blue-tint.svg`}
                        width="15"
                      />
                    </Box>
                    <Link href={`/topic/news`}>
                      <a className={TypographyStyles.popularTopics}>News</a>
                    </Link>
                  </Flex>
                  <Flex pt={4}>
                    <Box pr={5} alignSelf="center">
                      <img
                        src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/icon-arrow-blue-tint.svg`}
                        width="15"
                      />
                    </Box>
                    <Link href={`/topic/technology`}>
                      <a className={TypographyStyles.popularTopics}>
                        Technology
                      </a>
                    </Link>
                  </Flex>
                </Box>
                <Spacer />
                <Box>
                  <Flex>
                    <Box pr={5} alignSelf="center">
                      <img
                        src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/icon-arrow-blue-tint.svg`}
                        width="15"
                      />
                    </Box>
                    <Link href={`/topic/campaigning`}>
                      <a className={TypographyStyles.popularTopics}>
                        Campaigning
                      </a>
                    </Link>
                  </Flex>
                  <Flex pt={4}>
                    <Box pr={5} alignSelf="center">
                      <img
                        src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/icon-arrow-blue-tint.svg`}
                        width="15"
                      />
                    </Box>
                    <Link href={`/topic/dogs`}>
                      <a className={TypographyStyles.popularTopics}>Dogs</a>
                    </Link>
                  </Flex>
                </Box>
                <Spacer />
                <Box
                  className={ContentListStyles.contentList__selectTopic}
                  pt={3}
                >
                  <Select
                    placeholder="View all topics.."
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
              </Flex>
            </Box>

            <Box display={{ base: "block", md: "none" }}>
              <Flex color="white" alignSelf="center" pb={10}>
                <Box pr={20}>
                  <Flex>
                    <Box pr={5} alignSelf="center">
                      <img
                        src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/icon-arrow-blue-tint.svg`}
                        width="15"
                      />
                    </Box>

                    <Link
                      href={`/topic/inspiring-people`}
                      className={TypographyStyles.popularTopics}
                    >
                      <a className={TypographyStyles.popularTopics}>
                        Inspiring People
                      </a>
                    </Link>
                  </Flex>
                
                  <Flex pt={2}>
                    <Box pr={5} alignSelf="center">
                      <img
                        src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/icon-arrow-blue-tint.svg`}
                        width="15"
                      />
                    </Box>
                    <Link href={`/topic/eye-health`}>
                      <a className={TypographyStyles.popularTopics}>
                        Eye Health
                      </a>
                    </Link>
                  </Flex>

                  <Flex pt={2}>
                    <Box pr={5} alignSelf="center">
                      <img
                        src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/icon-arrow-blue-tint.svg`}
                        width="15"
                      />
                    </Box>
                    <Link href={`/topic/news`}>
                      <a className={TypographyStyles.popularTopics}>News</a>
                    </Link>
                  </Flex>
                  
                </Box>
               
                <Box>
                  <Flex>
                    <Box pr={5} alignSelf="center">
                      <img
                        src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/icon-arrow-blue-tint.svg`}
                        width="15"
                      />
                    </Box>
                    <Link href={`/topic/technology`}>
                      <a className={TypographyStyles.popularTopics}>
                        Technology
                      </a>
                    </Link>
                  </Flex>

                  <Flex pt={2}>
                    <Box pr={5} alignSelf="center">
                      <img
                        src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/icon-arrow-blue-tint.svg`}
                        width="15"
                      />
                    </Box>
                    <Link href={`/topic/campaigning`}>
                      <a className={TypographyStyles.popularTopics}>
                        Campaigning
                      </a>
                    </Link>
                  </Flex>

                  <Flex pt={2}>
                    <Box pr={5} alignSelf="center">
                      <img
                        src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/icon-arrow-blue-tint.svg`}
                        width="15"
                      />
                    </Box>
                    <Link href={`/topic/dogs`}>
                      <a className={TypographyStyles.popularTopics}>Dogs</a>
                    </Link>
                  </Flex>
                </Box>
                <Spacer />
              </Flex>
              <Flex
                className={ContentListStyles.contentList__selectTopic}
                pt={3}
                maxWidth="300"
              >
                <Select
                  placeholder="View all topics.."
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
              </Flex>
            </Box>
          </Box>
        </ContentWrapper>
      </Box>
    </>
  );
}

export async function changeFunc(tagid) {
  var selectBox = document.getElementById("selectBox");
  var selectedValue = selectBox.options[selectBox.selectedIndex].value;
  // alert(selectedValue);

  router.push(`/topic/${selectedValue}`);
}
