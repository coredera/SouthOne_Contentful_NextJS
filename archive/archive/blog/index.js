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
  const { postSummaries, currentPage, totalPages, pageContent, preview } =
    props;

  /**
   * This provides some fallback values to PageMeta so that a pageContent
   * entry is not required for /blog
   */
  const pageTitle = pageContent ? pageContent.title : "Blog";
  const pageDescription = pageContent
    ? pageContent.description
    : "Articles | Next.js Contentful blog starter";

  return (
    <MainLayout preview={preview}>
      <PageMeta
        title={pageContent.title}
        description={pageContent.description}
        url={Config.pageMeta.blogIndex.url}
        metatitle={pageContent.metaTitle}
        metadescription={pageContent.metaDescription} 
      />
 


      {pageContent.heroBanner !== null && (
        <HeroBanner data={pageContent.heroBanner} />
      )}


      <ContentWrapper>
        <Box pb={10} pt={7}>
          <h1 className={TypographyStyles.heading__h1}>Welcome to Guide Dogs Blog</h1>
          <body className={TypographyStyles.heading__h4}>
          Discover true stories, big issues, actioning change and more.......
          </body>
        </Box>
        {pageContent.body && (
          <PageContentWrapper>
            <RichTextPageContent richTextBodyField={pageContent.body} />
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
  const pageContent = await ContentfulApi.getPageContentBySlug(
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
      pageContent: pageContent || null,
    },
  };
}