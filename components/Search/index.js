// .components/Search/index.js

import algoliasearch from "algoliasearch/lite";
import { InstantSearch, SearchBox, Hits } from "react-instantsearch-dom";

import CustomHits from "./CustomHits";

const searchClient = algoliasearch(
    "I8CXOUI8JQ",
  "16d7ec50ca6f517544eaba5c0a325afd",
);

export default function Search() {
  return (
    <>
      <InstantSearch 
        searchClient={searchClient} 
        indexName="searchall"
      
        >
        <SearchBox />
        <CustomHits />
      </InstantSearch>
    </>
  );
}