// .components/Search/index.js

import algoliasearch from "algoliasearch/lite";
import { InstantSearch, SearchBox, Hits } from "react-instantsearch-dom";

import CustomHits from "./CustomHits";

const searchClient = algoliasearch(
    "I8CXOUI8JQ",
  "b8a8af29d3b1b51be28d9665de97bab9",
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