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
      <Box bgColor="brand.150">
        <ContentWrapper>
          <Box pb={20} pt={5} height={[360, 360, 125]}> 
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
                        FAQ
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
                        Medication
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
                        Social
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
                    <Link href={`/topic/campaigns`}>
                      <a className={TypographyStyles.popularTopics}>
                        Asthma
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
                      <a className={TypographyStyles.popularTopics}>Diabetes</a>
                    </Link>
                  </Flex>
                </Box>
                <Spacer />
                <Box
                  className={ContentListStyles.contentList__selectTopic}
                  pt={3}
                >
                  <Select
                    placeholder="Full Menu.."
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
                <Box pr={4}>
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
                        FAQ
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
                        Medication
                      </a>
                    </Link>
                  </Flex>

                  <Flex pt={2} pb={2}>
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
                
                  <Flex>
                    <Box pr={5} alignSelf="center">
                      <img
                        src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/icon-arrow-blue-tint.svg`}
                        width="15"
                      />
                    </Box>
                    <Link href={`/topic/technology`}>
                      <a className={TypographyStyles.popularTopics}>
                        Social
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
                    <Link href={`/topic/campaigns`}>
                      <a className={TypographyStyles.popularTopics}>
                        Asthma
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
                      <a className={TypographyStyles.popularTopics}>Diabetes</a>
                    </Link>
                  </Flex>
                </Box>
                <Spacer />
              </Flex>
              <Flex>
              <Box
                  className={ContentListStyles.contentList__selectTopic}
                  pt={3}
                >
                  <Select
                    placeholder="Full Menu.."
                    id="selectBox2"
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

  //console.log(selectedValue);

  if(selectedValue==="")
  {
    var selectBox = document.getElementById("selectBox2");
    var selectedValue = selectBox.options[selectBox.selectedIndex].value;

  }

  router.push(`/topic/${selectedValue}`);
}
