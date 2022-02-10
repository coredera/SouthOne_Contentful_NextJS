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
  Checkbox,
} from "@chakra-ui/react";



export default function BlogIndexPage(props) {
  const {
    posts,
    totalPages,
    currentPage,
    pageContent,
    preview,
    tag
  } = props;

  const postListType = `/topic/${tag}/`;

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
        title={`${pageTitle} Page ${currentPage}`}
        description={pageDescription}
        url={`${Config.pageMeta.blogIndex.url}/page/${currentPage}`}
      />

      {pageContent.heroBanner !== null && (
        <HeroBanner data={pageContent.heroBanner} />
      )}

      <ContentWrapper>
        {pageContent.body && (
          <PageContentWrapper>
            <RichTextPageContent richTextBodyField={pageContent.body} />
          </PageContentWrapper>
        )}
         <Flex
        alignItems="center"
        style={{ display: currentPage === "1" ? "none" : "block" }}
        pb={20}
        pt={5}
      >
        <Box alignSelf="center">
          <Link href={`${Config.pageMeta.home.slug}`}>
            <a>
            <Flex>
                  <h3 className={ContentListStyles.contentList__readmorelink}>
                    <Box alignSelf="center" pr={1.5}>
                      <img
                        src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/arrow-left--left-small.svg`}
                        width={15}
                        height={15}
                      />
                    </Box>
                    <Box>
                    {" "} 
                    Go to home
                    </Box>
                  </h3>
                </Flex>              
            </a>
          </Link>
        </Box>
        <Spacer />
      </Flex>
        <PostList
          postListType = {postListType}
          posts={posts}
          totalPages={totalPages}
          currentPage={currentPage}
        />
      </ContentWrapper>
    </MainLayout>
  );
}

export async function getStaticPaths() {
  //const totalPosts = await ContentfulApi.getTotalPostsNumber();
  //const totalPages = Math.ceil(totalPosts / Config.pagination.pageSize);

  //const paths = [];
  //const tag = "puppy";

  const paths = [];

  const posts = await ContentfulApi.getAllBlogPosts();

  const blogPostTags = await ContentfulApi.getAllUniquePostTags();

  const temp = blogPostTags.map(({ id }) => {

  //const id = "puppy";

  //for(const fid of blogPostTags){

  
    const acc =[];

    var totalPages = Math.ceil(
      acc.length / Config.pagination.pageSize,
    );
  
    const relatedPosts = posts.reduce((acc, post) => {
      if ( 
        post.contentfulMetadata &&
        post.contentfulMetadata.tags &&
        post.contentfulMetadata.tags.find(({ id }) => id === id)
      ) {
        
        acc.push(post);

       // console.log("ACC.........");
       // console.log(acc);
  
        totalPages = Math.ceil(
          acc.length / Config.pagination.pageSize,
        );
        return acc;
      }
      totalPages = Math.ceil(
        acc.length / Config.pagination.pageSize,
      );
  
      return acc;
    }, []);
  
    for (let page = 2; page <= totalPages; page++) {
      paths.push(
        { params: { page: page.toString(), tag: id}},
       // { params: { tag } }
      
      );
    }
  });

   // return { params: { tag: id } };
  //});


  /**
   * Start from page 2, so we don't replicate /blog
   * which is page 1
   */

  //for (let page = 2; page <= totalPages; page++) {
  //  paths.push(
  //    { params: { page: page.toString(), tag: tag}},
     // { params: { tag } }
    
  //  );
  //}

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params, preview = false }) {
  const posts = await ContentfulApi.getAllBlogPosts();

  const pageContent = await ContentfulApi.getPageContentBySlug(
    Config.pageMeta.blogIndex.slug,
    {
      preview: preview,
    },
  );

  const acc =[];

  var totalPages = Math.ceil(
    acc.length / Config.pagination.pageSize,
  );

  const relatedPosts = posts.reduce((acc, post) => {
    if ( 
      post.contentfulMetadata &&
      post.contentfulMetadata.tags &&
      post.contentfulMetadata.tags.find(({ id }) => id === params.tag)
    ) {
      acc.push(post);

      console.log("ACC.........");
      console.log(acc.length);
      console.log(acc);

      totalPages = Math.ceil(
        acc.length / Config.pagination.pageSize,
      );
      return acc;
    }
    totalPages = Math.ceil(
      acc.length / Config.pagination.pageSize,
    );

    return acc;
  }, []);


  const paginatedRelatedPosts = relatedPosts.slice(params.page*Config.pagination.pageSize-Config.pagination.pageSize, params.page*Config.pagination.pageSize);

  // Add this with fallback: "blocking"
  // So that if we do not have a post on production,
  // the 404 is served
  if (relatedPosts.length === 0) {
    return {
      notFound: true,
    };
  }



  console.log("totalPages:")
  console.log(totalPages);
  
  return {
    props: {
      preview,
      totalPages,
      currentPage: params.page,
      posts: paginatedRelatedPosts,
      tag: params.tag,
      pageContent: pageContent || null,
    },
  };
}
