import * as React from "react";
//
import ContentfulApi from "@utils/ContentfulApi";
import { Config } from "@utils/Config";
import PageMeta from "@components/PageMeta";
import PostList from "@components/PostList";
import RichTextPageContent from "@components/RichTextPageContent";
import MainLayout from "@layouts/main";
import ContentWrapper from "@components/ContentWrapper";
import PageContentWrapper from "@components/PageContentWrapper";
import HeroBanner from "@components/HeroBanner";
import TypographyStyles from "@styles/Typography.module.scss";
import ContentListStyles from "@styles/ContentList.module.css";
import Link from "next/link";
import Tags from "@components/Post/Tags";
import ReactMarkdownRenderers from "@utils/ReactMarkdownRenderers";
import ReactMarkdown from "react-markdown";
import PublishedDate from "@components/Post/PublishedDate";
import router, { useRouter } from "next/router";
import FeaturedPost from "@components/FeaturedPost";
import PopularTopics from "@components/PopularTopics";
import PopularPosts from "@components/PopularPosts";
import BlogBanner from "@components/BlogBanner";
import SocialMedia from "@components/SocialMedia";

import algoliasearch from "algoliasearch/lite";
//import { InstantSearch, SearchBox, Hits } from "react-instantsearch-dom";

import AlgoliaStyle from "@styles/Algolia.module.scss";

//import CustomHits from "@components/search/CustomHits";

import { useState, useEffect, useRef } from "react";

//import { useLocation, useHistory } from "react-router-dom";

import "instantsearch.css/themes/reset.css";

import qs from "qs";

import {
  InstantSearch,
  Breadcrumb,
  Configure,
  ClearRefinements,
  CurrentRefinements,
  DynamicWidgets,
  HierarchicalMenu,
  Highlight,
  Hits,
  HitsPerPage,
  InfiniteHits,
  Menu,
  Pagination,
  RangeInput,
  RefinementList,
  PoweredBy,
  SearchBox,
  SortBy,
  ToggleRefinement,
} from "react-instantsearch-hooks-web";

import { Hit as AlgoliaHit } from "instantsearch.js";


/*
import {
 // InstantSearch,
  Hits,
 // SearchBox,
 // Highlight,
 // ClearRefinements,
 // Configure,
} from 'react-instantsearch-dom';
*/

import { history } from "instantsearch.js/es/lib/routers";
import { simple } from "instantsearch.js/es/lib/stateMappings";
//import algoliasearch from 'algoliasearch/lite';

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
  //Link,
  Input,
  LinkBox,
  LinkOverlay,
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

type HitProps = {
  hit: AlgoliaHit<{
    title: string;
    description: string;
    image: string;
  }>;
};

const DEBOUNCE_TIME = 700;

const createURL = (state) => `?${qs.stringify(state)}`;

const searchStateToUrl = (location, searchState) =>
  searchState ? `${location.pathname}${createURL(searchState)}` : "";

const urlToSearchState = (location) => qs.parse(location.search.slice(1));

const searchState = "";

/*
const routing = {
  router: history({
    windowTitle({ query }) {
      const queryTitle = query ? `Results for "${query}"` : "Search";

      return queryTitle;
    },

    createURL({ qsModule, routeState, location }) {
      const urlParts = location.href.match(/^(.*?)\/search/);
      //const baseUrl = `${urlParts ? urlParts[1] : ''}/`;
      const baseUrl =
        window.location.protocol + "//" + window.location.host + "/";

      console.log("baseURL:");
      console.log(baseUrl);

      const categoryPath = routeState.category
        ? `${getCategorySlug(routeState.category)}/`
        : "";
      const queryParameters = {};

      if (routeState.query) {
        queryParameters.query = encodeURIComponent(routeState.query);
      }
      if (routeState.page !== 1) {
        queryParameters.page = routeState.page;
      }
      if (routeState.brands) {
        queryParameters.brands = routeState.brands.map(encodeURIComponent);
      }

      const queryString = qsModule.stringify(queryParameters, {
        addQueryPrefix: true,
        arrayFormat: "repeat",
      });

      return `${baseUrl}search/${queryString}`;
    },

    parseURL({ qsModule, location }) {
      const pathnameMatches = location.pathname.match(/search\/(.*?)\/?$/);

      const {
        query = "",
        page,
        brands = [],
      } = qsModule.parse(location.search.slice(1));
      // `qs` does not return an array when there's a single value.
      const allBrands = Array.isArray(brands)
        ? brands
        : [brands].filter(Boolean);

      return {
        query: decodeURIComponent(query),
        page,
      };
    },
  }),

  stateMapping: {
    stateToRoute(uiState) {
      const indexUiState = uiState["instant_search"] || {};

      return {
        query: indexUiState.query,
        page: indexUiState.page,
        brands: indexUiState.refinementList?.brand,
        category: indexUiState.menu?.categories,
      };
    },

    routeToState(routeState) {
      return {
        instant_search: {
          query: routeState.query,
          page: routeState.page,
          menu: {
            categories: routeState.category,
          },
          refinementList: {
            brand: routeState.brands,
          },
        },
      };
    },
  },
};
*/

export default function BlogSearch(props) {
  const {
    sortedBlogPostTags,
    blogPostTags,
    featuredPost,
    topPostsArray,
    postSummaries,
    currentPage,
    totalPages,
    pageContent,
    preview,
  } = props;

  const postListType = "/";

  const searchClient = algoliasearch(
    "9JP2M7VJDW",
    "e16fe5b9512b4405cea4bcfd94c41bfe",
  );

  //console.log(postSummaries);

  //console.log("featuredPost:");
  //console.log(featuredPost);

  /**
   * This provides some fallback values to PageMeta so that a pageContent
   * entry is not required for /blog
   */
  const pageTitle = pageContent ? pageContent.title : "Blog";
  const pageDescription = pageContent
    ? pageContent.description
    : "Guidedogs UK Blog";

  //console.log(featuredPost);

  //console.log(pageContent.heroBanner.image.url);

  // Original hero banner code
  //  {pageContent.heroBanner !== null && (
  //    <HeroBanner data={pageContent.heroBanner} />
  //  )}

  //console.log(postSummaries);

  /*
  const q = useRef(null);
  //q.currrent = "";

  // const location = useLocation();

  // const location = useLocation();

  
  useEffect(() => {
    console.log("this is pre URL");

    // Adding a query paramater.
    var url_string =
      window.location.protocol +
      "//" +
      window.location.host +
      "/" +
      window.location.pathname +
      window.location.search; //window.location.href
    var url = new URL(url_string);
    q.current = url.searchParams.get("q");

    console.log("hihi");
    console.log(q);
  }, []);

  console.log(q.current);

  const searchState = q.current;
*/

  //q.current = createURL(q.current);

  pageContent.title = "Search Results";

  if (true) {
    return (
      <MainLayout preview={preview} posts={postSummaries}>
        <PageMeta
          title={pageContent.title}
          description={pageContent.description}
          url={Config.pageMeta.blogIndex.url}
          canonical={Config.pageMeta.blogIndex.url}
          metatitle={pageContent.metaTitle}
          metadescription={pageContent.metaDescription}
        />

        <BlogBanner pageContent={pageContent} />

        <Box bgColor="brand.50" pt={10} pb={20}>
          <ContentWrapper>
            <Box>
              <InstantSearch
                searchClient={searchClient}
                indexName="searchall"
                routing={true}
              >
                <Box style={{ display: "none" }}>
                  <SearchBox />
                </Box>
                <Hits hitComponent={Hit} />
              </InstantSearch>
            </Box>
          </ContentWrapper>
        </Box>
      </MainLayout>
    );
  } else {
    return (
      <MainLayout preview={preview}>
        <PageMeta
          title={pageContent.title}
          description={pageContent.description}
          url={Config.pageMeta.blogIndex.url}
          metatitle={pageContent.metaTitle}
          metadescription={pageContent.metaDescription}
        />

        <Box
          backgroundImage={pageContent.heroBanner.image.url}
          height="450"
          bgRepeat="no-repeat"
          bgSize="cover"
          bgPosition="center"
        >
          <Box
            backgroundImage={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/top-left-swirl.svg`}
            bgSize="contain"
            bgRepeat="no-repeat"
            bgPos="top-left"
            className={ContentListStyles.contentList__landingTopSection}
            height="430"
          >
            <ContentWrapper>
              <Flex alignItems="center" pb={0} pt={5}>
                <Box alignSelf="center">
                  <Link href={`${Config.pageMeta.home.slug}`}>
                    <a>
                      <Flex>
                        <h3 className={ContentListStyles.contentList__homelink}>
                          <Box> Home</Box>
                        </h3>
                      </Flex>
                    </a>
                  </Link>
                </Box>
                <Spacer />
              </Flex>
              <Flex>
                <Box pb={10} pt={7} maxWidth="600" pl={0}>
                  <h1 className={TypographyStyles.heading__h1}>
                    {pageContent.title}
                  </h1>
                  {pageContent.body && (
                    <RichTextPageContent
                      richTextBodyField={pageContent.body}
                      className={TypographyStyles.bodyCopy}
                    />
                  )}
                </Box>
                <Box></Box>
              </Flex>
            </ContentWrapper>
          </Box>
        </Box>

        <PopularTopics sortedBlogPostTags={sortedBlogPostTags} />
        <Box bgColor="brand.50">
          <ContentWrapper>
            <Flex pt={10}>
              <Box pr={10}>
                <PostList
                  postListType={postListType}
                  posts={postSummaries}
                  totalPages={totalPages}
                  currentPage={currentPage}
                />
              </Box>
              <Spacer />
              <Box minW="300" pt={8}>
                <PopularPosts topPostsArray={topPostsArray} />
              </Box>
            </Flex>
            <Flex direction="column" display={{ base: "block,", md: "none" }}>
              <ContentWrapper>
                <Box pb={10}>
                  <h2 className={ContentListStyles.contentList__title}>
                    You might also like
                  </h2>
                </Box>
                {topPostsArray.map((post) => (
                  <div key={post.sys.id}>
                    <article className={ContentListStyles.contentList__post}>
                      <Link href={`/${post.slug}`}>
                        <a>
                          <img
                            src={post.image.url}
                            width={post.image.width}
                            height={post.image.height}
                            layout="responsive"
                            objectFit="contain"
                            alt={post.image.description}
                            style={{ borderRadius: "20px" }}
                          />
                        </a>
                      </Link>

                      <Flex p={2} />
                      <Link href={`/${post.slug}`}>
                        <a className={ContentListStyles.contentList__titleLink}>
                          <h2 className={ContentListStyles.contentList__title}>
                            {post.title}
                          </h2>
                        </a>
                      </Link>
                      <Box className={ContentListStyles.contentList__author}>
                        {post.author !== null && (
                          <> Author: {post.author.name}</>
                        )}
                      </Box>
                      {post.contentfulMetadata.tags !== null && (
                        <Tags tags={post.contentfulMetadata.tags} />
                      )}
                      <div className={ContentListStyles.contentList__excerpt}>
                        <ReactMarkdown
                          children={post.excerpt}
                          renderers={ReactMarkdownRenderers(post.excerpt)}
                        />
                      </div>
                      <Flex alignItems="center">
                        <Box alignSelf="center">
                          <Link href={`/${post.slug}`}>
                            <a>
                              <h3
                                className={
                                  ContentListStyles.contentList__readmorelink
                                }
                              >
                                Read more
                              </h3>
                            </a>
                          </Link>
                        </Box>
                        <Spacer />
                        <Box
                          alignSelf="center"
                          className={TypographyStyles.bodyCopy}
                        >
                          <PublishedDate date={post.date} alignSelf="center" />
                        </Box>
                      </Flex>
                    </article>
                  </div>
                ))}
              </ContentWrapper>
            </Flex>
          </ContentWrapper>
        </Box>
      </MainLayout>
    );
  }
}

export async function getStaticProps({ preview = false }) {
  const blogPostTags = await ContentfulApi.getAllUniquePostTags();
  const posts = await ContentfulApi.getAllBlogPosts();

  // console.log("blogPostTags");
  // console.log(blogPostTags);

  const postSummaries = await ContentfulApi.getPaginatedPostSummaries(1);
  const pageContent = await ContentfulApi.getPageContentBySlug(
    Config.pageMeta.blogIndex.slug,
    {
      preview: preview,
    },
  );

  const totalPages = Math.ceil(
    postSummaries.total / Config.pagination.pageSize,
  );

  const featuredPost = await ContentfulApi.getFeaturedPost();

  //const topPosts = await ContentfulApi.getTopPosts();

  //  console.log("topPosts");
  //console.log(topPosts);

  const topPostsIds = await ContentfulApi.getTopPostsIds();

  //  console.log("topPostsIds");
  // console.log(topPostsIds);
  //console.log(topPostsIds.length);

  const topPostId1 = topPostsIds.tpostid1;
  const topPostId2 = topPostsIds.tpostid2;
  const topPostId3 = topPostsIds.tpostid3;
  const topPostId4 = topPostsIds.tpostid4;
  const topPostId5 = topPostsIds.tpostid5;

  // console.log("topPostId1");
  // console.log(topPostId1);

  //  console.log("topPostId2");
  //  console.log(topPostId2);

  // console.log("posts");
  // console.log(posts);

  const topPost1 = posts.find((p) => p.sys.id === topPostId1);
  const topPost2 = posts.find((p) => p.sys.id === topPostId2);
  const topPost3 = posts.find((p) => p.sys.id === topPostId3);
  const topPost4 = posts.find((p) => p.sys.id === topPostId4);
  const topPost5 = posts.find((p) => p.sys.id === topPostId5);

  //  console.log("topPost1:");
  //  console.log(topPost1);

  const topPostsIdsArray = [
    topPostId1,
    topPostId2,
    topPostId3,
    topPostId4,
    topPostId5,
  ];

  const topPostsArray = [topPost1, topPost2, topPost3, topPost4, topPost5];

  const topPosts = posts.reduce((acc, post) => {
    // for (var i = 0; i < 4; i++) {
    //  console.log(i);
    //  console.log("entering loop");
    if (post.sys.id === topPostsIdsArray[0]) {
      acc.push(post);

      //  console.log("ACC.........");
      //  console.log(acc);

      // totalPages = Math.ceil(
      //  acc.length / Config.pagination.pageSize,
      //);
      return acc;
    } else if (post.sys.id === topPostsIdsArray[1]) {
      acc.push(post);

      //  console.log("ACC.........");
      //  console.log(acc);

      // totalPages = Math.ceil(
      //  acc.length / Config.pagination.pageSize,
      //);
      return acc;
    }
    return acc;
  }, []);

  const sortedBlogPostTags = blogPostTags.sort((a, b) =>
    a.name.localeCompare(b.name),
  );

  return {
    props: {
      sortedBlogPostTags,
      featuredPost,
      topPostsArray,
      preview,
      postSummaries: postSummaries.items,
      totalPages,
      currentPage: "1",
      pageContent: pageContent || null,
    },
  };
}

/*
export async function changeFunc(tagid) {
  var selectBox = document.getElementById("selectBox");
  var selectedValue = selectBox.options[selectBox.selectedIndex].value;
  // alert(selectedValue);

  router.push(`/topic/${selectedValue}`);
}
*/

function Hit({ hit }: HitProps) {
  const url = `https://www.guidedogs.org.uk${hit.url}`;

  return (
    <>
      <Box pb={5} pt={5} pl={5} pr={5}>
        <Box
          borderLeft="4px"
          borderLeftColor="brand.100"
         
          borderBottom="1px"
          borderBottomColor="lightgrey"
          borderTop="1px"
          borderTopColor="lightgrey"
          pl={5}
        >
          <Flex pb={20} pt={10}>
            <Box pr={10}>
              <Flex direction="column">
                <Box pb={3}>
                  <a href={url}>
                    <h3 className={TypographyStyles.heading__h3}>
                      {hit.title}
                    </h3>
                  </a>
                </Box>
                <Box className={ContentListStyles.contentList__excerpt2}>
                  {hit.description}
                </Box>
              </Flex>
            </Box>
            <Spacer />
            <Box>
              {hit.image && (
                <Box width="20rem">
                  <a href={url}>
                    <img
                      src={hit.image}
                      alt={hit.title}
                      layout="responsive"
                      style={{
                        borderTopLeftRadius: "20px",
                        borderTopRightRadius: "20px",
                        borderRadius: "20px",
                        objectFit: "cover",
                        width: "30rem",
                      }}
                    ></img>
                  </a>
                </Box>
              )}
            </Box>
          </Flex>
        </Box>
      </Box>
    </>
  );
}
