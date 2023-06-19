import * as React from "react";

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

export default function BlogIndex(props) {
  const { postSummaries, currentPage, totalPages, page, preview } =
    props;

  /**
   * This provides some fallback values to PageMeta so that a page
   * entry is not required for /blog
   */
  const pageTitle = page ? page.title : "Blog";
  const pageDescription = page
    ? page.description
    : "Guidedogs UK Blog";

  return (
    <MainLayout preview={preview}>
      <PageMeta
        title={page.title}
        description={page.description}
        url={Config.pageMeta.blogIndex.url}
        metatitle={page.metaTitle}
        metadescription={page.metaDescription} 
      />
 


      {page.heroBanner !== null && (
        <HeroBanner data={page.heroBanner} />
      )}


      <ContentWrapper>
        <Box pb={10} pt={7}>
          <h1 className={TypographyStyles.heading__h1}>Welcome to Guide Dogs Blog</h1>
          <body className={TypographyStyles.heading__h4}>
          Discover true stories, big issues, actioning change and more.......
          </body>
        </Box>
        {page.body && (
          <PageContentWrapper>
            <RichTextPageContent richTextBodyField={page.body} />
          </PageContentWrapper>
        )} 
        <PostList
          posts={postSummaries}
          totalPages={totalPages}
          currentPage={currentPage}
        />
      </ContentWrapper>
    </MainLayout>
  );
} 

export async function getStaticProps({ preview = false }) {
  const postSummaries = await ContentfulApi.getPaginatedPostSummaries(1);
  const page = await ContentfulApi.getPageBySlug(
    Config.pageMeta.blogIndex.slug,
    {
      preview: preview,
    },
  );

  const totalPages = Math.ceil(
    postSummaries.total / Config.pagination.pageSize,
  );

  return {
    props: {
      preview,
      postSummaries: postSummaries.items,
      totalPages,
      currentPage: "1",
      page: page || null,
    },
  };
}
