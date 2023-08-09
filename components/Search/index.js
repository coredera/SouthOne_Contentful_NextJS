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
        indexName="netlify_826eaf7e-b1c5-4dd8-8052-b03d4d9209dd_main_all"
      
        >
        <SearchBox />
        <CustomHits />
      </InstantSearch>
    </>
  );
}