// .components/Search/index.js

import algoliasearch from "algoliasearch/lite";
import { InstantSearch, SearchBox, Hits } from "react-instantsearch-dom";

import CustomHits from "./CustomHits";

const searchClient = algoliasearch(
    "9JP2M7VJDW",
  "e16fe5b9512b4405cea4bcfd94c41bfe",
);

export default function Search() {
  return (
    <>
      <InstantSearch 
        searchClient={searchClient} 
        indexName="netlify_e0a8ea41-0317-4ff0-8f21-e5258252626f_master_all"
      
        >
        <SearchBox />
        <CustomHits />
      </InstantSearch>
    </>
  );
}