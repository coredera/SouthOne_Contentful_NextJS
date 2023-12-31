import ContentfulApi from "@utils/ContentfulApi";
import { Config } from "@utils/Config";
import PageMeta from "@components/PageMeta";
import PostList from "@components/PostList";
import RichTextPageContent from "@components/RichTextPageContent";
import MainLayout from "@layouts/main";
import ContentWrapper from "@components/ContentWrapper";
import PageContentWrapper from "@components/PageContentWrapper";
import HeroBanner from "@components/HeroBanner";

//import Image from "next/image";
import ContentListStyles from "@styles/ContentList.module.css";
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
} from "@chakra-ui/react";



export default function BlogIndexPage(props) {
  const {
    postSummaries,
    totalPages,
    currentPage,
    page,
    preview,
  } = props;

  /**
   * This provides some fallback values to PageMeta so that a page
   * entry is not required for /blog
   */



  const pageTitle = page ? page.title : "Blog";
  const pageDescription = page
    ? page.description
    : "Articles | Next.js Contentful blog starter";

  return (
    <MainLayout preview={preview}>
      <PageMeta
        title={`${pageTitle} Page ${currentPage}`}
        description={pageDescription}
        url={`${Config.pageMeta.blogIndex.url}/page/${currentPage}`}
      />

      {page.heroBanner !== null && (
        <HeroBanner data={page.heroBanner} />
      )}

      <ContentWrapper>
        {page.body && (
          <PageContentWrapper>
            <RichTextPageContent richTextBodyField={page.body} />
          </PageContentWrapper>
        )}
         <Flex
        alignItems="center"
        style={{ display: currentPage === "1" ? "none" : "block" }}
        pb={20}
        pt={5}
      >
        <Box alignSelf="center">
          <Link legacyBehavior href={`${Config.pageMeta.home.slug}`}>
            <a>
              <h3 className={ContentListStyles.contentList__readmorelink}>
              
                <img
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/arrow-left--left-small.svg`}
                  height="10em"
                  width="10em"
                  
                />
        
              
                 {" "}Go to home
                
                 
              </h3>
            </a>
          </Link>
        </Box>
        <Spacer />
      </Flex>
        <PostList
          posts={postSummaries}
          totalPages={totalPages}
          currentPage={currentPage}
        />
      </ContentWrapper>
    </MainLayout>
  );
}

export async function getStaticPaths() {
  const totalPosts = await ContentfulApi.getTotalPostsNumber();
  const totalPages = Math.ceil(totalPosts / Config.pagination.pageSize);

  const paths = [];

  /**
   * Start from page 2, so we don't replicate /blog
   * which is page 1
   */
  for (let page = 2; page <= totalPages; page++) {
    paths.push({ params: { page: page.toString() } });
  }

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params, preview = false }) {
  const postSummaries = await ContentfulApi.getPaginatedPostSummaries(
    params.page,
  );
  const totalPages = Math.ceil(
    postSummaries.total / Config.pagination.pageSize,
  );
  const page = await ContentfulApi.getPageBySlug(
    Config.pageMeta.blogIndex.slug,
    {
      preview: preview,
    },
  );

  return {
    props: {
      preview,
      postSummaries: postSummaries.items,
      totalPages,
      currentPage: params.page,
      page: page || null,
    },
  };
}
