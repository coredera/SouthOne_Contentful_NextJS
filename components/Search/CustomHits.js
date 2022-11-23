// ./components/Search/CustomHits.js
import { connectStateResults } from "react-instantsearch-dom";


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

function Hits({ searchState, searchResults }) {
  const validQuery = searchState.query?.length >= 3;

  return (
    <>
    <Box bgColor="white">
      {searchResults?.hits.length === 0 && validQuery && (
        <p>Aw snap! No search results were found.</p>
      )}
      {searchResults?.hits.length > 0 && validQuery && (
        <ol>
            <Box>
          {searchResults.hits.map((hit) => (
            <li key={hit.objectID}>{hit.title}</li>
          ))}
          </Box>
        </ol>
      )}
      </Box>
    </>
  );
}

export default connectStateResults(Hits);