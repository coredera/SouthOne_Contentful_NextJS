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

export default function Populartags(props) {
  const sortedBlogPostTags = props.sortedBlogPostTags;

  //console.log(sortedBlogPostTags);

  return (
    <>
      <Box
       bgColor="brand.900">
        <ContentWrapper>
          <Box pb={20} pt={5} pl={20} height={[360, 360, 125]}> 
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
         {/* <Link legacyBehavior href={`/tag/eye-health`}> */}
                      <a className={TypographyStyles.popularTags}>
                        FAQ
                      </a>
                      {/* </Link> */}
                  </Flex>
                  <Box pt={4}></Box>
                  <Flex>
                    <Box pr={5} alignSelf="center">
                      <img
                        src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/icon-arrow-blue-tint.svg`}
                        width="15"
                       
                      />
                    </Box>
                   {/* <Link legacyBehavior href={`/tag/eye-health`}> */}
                      <a className={TypographyStyles.popularTags}>
                        Medication
                      </a>
                    {/* </Link> */}
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
                     {/* <Link legacyBehavior href={`/tag/eye-health`}> */}
                      <a className={TypographyStyles.popularTags}>News</a>
                      {/* </Link> */}
                  </Flex>
                  <Flex pt={4}>
                    <Box pr={5} alignSelf="center">
                      <img
                        src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/icon-arrow-blue-tint.svg`}
                        width="15"
                      
                      />
                    </Box>
                    {/* <Link legacyBehavior href={`/tag/eye-health`}> */}
                      <a className={TypographyStyles.popularTags}>
                        Social
                      </a>
                       {/* </Link> */}
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
                     {/* <Link legacyBehavior href={`/tag/eye-health`}> */}
                      <a className={TypographyStyles.popularTags}>
                        Asthma
                      </a>
                       {/* </Link> */}
                  </Flex>
                  <Flex pt={4}>
                    <Box pr={5} alignSelf="center">
                      <img
                        src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/icon-arrow-blue-tint.svg`}
                        width="15"
                       
                      />
                    </Box>
                    {/* <Link legacyBehavior href={`/tag/eye-health`}> */}
                      <a className={TypographyStyles.popularTags}>Diabetes</a>
                       {/* </Link> */}
                  </Flex>
                </Box>
                <Spacer />
                <Box
                  className={ContentListStyles.contentList__selectTag}
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

                 {/*  <Link legacyBehavior
                      href={`/tag/inspiring-people`}
                      className={TypographyStyles.popularTags}
                    > */} 
                      <a className={TypographyStyles.popularTags}>
                        FAQ
                      </a>
                       {/* </Link> */}
                  </Flex>

                  <Flex pt={2}>
                    <Box pr={5} alignSelf="center">
                      <img
                        src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/icon-arrow-blue-tint.svg`}
                        width="15"
                      />
                    </Box>
                      {/*  <Link legacyBehavior
                      href={`/tag/inspiring-people`}
                      className={TypographyStyles.popularTags}
                    > */} 
                      <a className={TypographyStyles.popularTags}>
                        Medication
                      </a>
                       {/* </Link> */}
                  </Flex>

                  <Flex pt={2} pb={2}>
                    <Box pr={5} alignSelf="center">
                      <img
                        src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/icon-arrow-blue-tint.svg`}
                        width="15"
                      />
                    </Box>
                     {/*  <Link legacyBehavior
                      href={`/tag/inspiring-people`}
                      className={TypographyStyles.popularTags}
                    > */} 
                      <a className={TypographyStyles.popularTags}>News</a>
    {/* </Link> */}
                      </Flex>
                
                  <Flex>
                    <Box pr={5} alignSelf="center">
                      <img
                        src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/icon-arrow-blue-tint.svg`}
                        width="15"
                      />
                    </Box>
                    {/*  <Link legacyBehavior
                      href={`/tag/inspiring-people`}
                      className={TypographyStyles.popularTags}
                    > */} 
                      <a className={TypographyStyles.popularTags}>
                        Social
                      </a>
                     {/* </Link> */}
                  </Flex>

                  <Flex pt={2}>
                    <Box pr={5} alignSelf="center">
                      <img
                        src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/icon-arrow-blue-tint.svg`}
                        width="15"
                      />
                    </Box>
                     {/*  <Link legacyBehavior
                      href={`/tag/inspiring-people`}
                      className={TypographyStyles.popularTags}
                    > */} 
                      <a className={TypographyStyles.popularTags}>
                        Asthma
                      </a>
                       {/* </Link> */}
                  </Flex>

                  <Flex pt={2}>
                    <Box pr={5} alignSelf="center">
                      <img
                        src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/icon-arrow-blue-tint.svg`}
                        width="15"
                      />
                    </Box>
                       {/*  <Link legacyBehavior
                      href={`/tag/inspiring-people`}
                      className={TypographyStyles.popularTags}
                    > */} 
                      <a className={TypographyStyles.popularTags}>Diabetes</a>
                     {/* </Link> */}
                  </Flex>
                </Box>
                <Spacer />
              </Flex>
              <Flex>
              <Box
                  className={ContentListStyles.contentList__selectTag}
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

  router.push(`/tag/${selectedValue}`);
}
