import TagsStyles from "@styles/Tags.module.css";
import { Config } from "@utils/Config";
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
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

export default function Tags(props) {
  const { tags } = props;

  return (
    <>
      <Flex>
        <Wrap>
          <b> Topics:</b>

          {tags.map((tag) => (
            <WrapItem>
              <Link legacyBehavior href={`/topic/${tag.id}`}>
                <a>
                  <div className={TagsStyles.tags__tag} key={tag.id}>
                    <b> {tag.name} </b>
                  </div>
                </a>
              </Link>
            </WrapItem>
          ))}
        </Wrap>
      </Flex>
    </>
  );
}
