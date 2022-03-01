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

export default function BlogIndex(props) {
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

  if (featuredPost) {
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

        <Box className={ContentListStyles.contentList__topSection}>
          <Flex>
            <Box pb={10} pt={7}>
              <h1 className={TypographyStyles.heading__h1}>
                Welcome to the Guide Dogs Blog
              </h1>
              <text className={TypographyStyles.bodyCopy}>
                Discover true stories, big issues, actioning change and
                more.......
              </text>
            </Box>

            {pageContent.body && (
              <PageContentWrapper>
                <RichTextPageContent richTextBodyField={pageContent.body} />
              </PageContentWrapper>
            )}
          </Flex>

          <Flex display={{ base: "none", md: "block" }} className={ContentListStyles.contentList__featuredPost} p={3}>

            <article
              
              style={{ display: featuredPost === null ? "none" : "block" }}
            >
              <Link href={`/${featuredPost.slug}`}>
                <a className={ContentListStyles.contentList__titleLink}>
                  <h2 className={ContentListStyles.contentList__title}>
                    {featuredPost.title}
                  </h2>
                </a>
              </Link>

              <Flex justifyContent>
                <Box pr={30}>
                  <Box className={ContentListStyles.contentList__author}>
                    {featuredPost.author !== null && (
                      <> Author: {featuredPost.author.name}</>
                    )}
                  </Box>
                  {featuredPost.contentfulMetadata.tags !== null && (
                    <Tags tags={featuredPost.contentfulMetadata.tags} />
                  )}
                  <div className={ContentListStyles.contentList__excerpt}>
                    <ReactMarkdown
                      children={featuredPost.excerpt}
                      renderers={ReactMarkdownRenderers(featuredPost.excerpt)}
                    />
                  </div>
                  <Flex alignItems="center">
                    <Box alignSelf="center">
                      <Link href={`/${featuredPost.slug}`}>
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
                      <PublishedDate
                        date={featuredPost.date}
                        alignSelf="center"
                      />
                    </Box>
                  </Flex>
                </Box>
                <Spacer />
                <Box pl={30} width="70rem">
                  <Link href={`/${featuredPost.slug}`}>
                    <a>
                      <img
                        src={featuredPost.image.url}
                        width={featuredPost.image.width}
                        height={featuredPost.image.height}
                        layout="responsive"
                        objectFit="contain"
                        alt={featuredPost.image.description}
                        style={{borderRadius:'20px'}}
                      />
                    </a>
                  </Link>
                </Box>
              </Flex>
            </article>
          </Flex>

          <Flex display={{ base: "block", md: "none" }}>
            <article className={ContentListStyles.contentList__post}>
              <Link href={`/${featuredPost.slug}`}>
                <a>
                  <img
                    src={featuredPost.image.url}
                    width={featuredPost.image.width}
                    height={featuredPost.image.height}
                    layout="responsive"
                    objectFit="contain"
                    alt={featuredPost.image.description}
                  />
                </a>
              </Link>

              <Flex p={2} />
              <Link href={`/${featuredPost.slug}`}>
                <a className={ContentListStyles.contentList__titleLink}>
                  <h2 className={ContentListStyles.contentList__title}>
                    {featuredPost.title}
                  </h2>
                </a>
              </Link>
              <Box className={ContentListStyles.contentList__author}>
                {featuredPost.author !== null && (
                  <> Author: {featuredPost.author.name}</>
                )}
              </Box>
              {featuredPost.contentfulMetadata.tags !== null && (
                <Tags tags={featuredPost.contentfulMetadata.tags} />
              )}
              <div className={ContentListStyles.contentList__excerpt}>
                <ReactMarkdown
                  children={featuredPost.excerpt}
                  renderers={ReactMarkdownRenderers(featuredPost.excerpt)}
                />
              </div>
              <Flex alignItems="center">
                <Box alignSelf="center">
                  <Link href={`/${featuredPost.slug}`}>
                    <a>
                      <h3
                        className={ContentListStyles.contentList__readmorelink}
                      >
                        Read more
                      </h3>
                    </a>
                  </Link>
                </Box>
                <Spacer />
                <Box alignSelf="center" className={TypographyStyles.bodyCopy}>
                  <PublishedDate date={featuredPost.date} alignSelf="center" />
                </Box>
              </Flex>
            </article>
          </Flex>
        </Box>
        <Box className={ContentListStyles.contentList__topSection}>
          <Flex>
            <h2 className={TypographyStyles.heading__h2}>Popular Topics</h2>
          </Flex>
          <Flex>
            <Link
              href={`/topic/inspiring-people`}
              className={TypographyStyles.inlineLink}
            >
              <a className={TypographyStyles.inlineLink}>
                Inspiring People (fundraising, celebrities, volunteers)
              </a>
            </Link>
            <Spacer />
            <Link href={`/topic/eye-health`}>
              <a className={TypographyStyles.inlineLink}>Eye Health</a>
            </Link>
            <Spacer />
            <Link href={`/topic/news`}>
              <a className={TypographyStyles.inlineLink}>
                News (fundraising, services)
              </a>
            </Link>
            <Spacer />
            <Link href={`/topic/technology`}>
              <a className={TypographyStyles.inlineLink}>Technology</a>
            </Link>
            <Spacer />
            <Link href={`/topic/campaigning`}>
              <a className={TypographyStyles.inlineLink}>Campaigning</a>
            </Link>
            <Spacer />
            <Link href={`/topic/dogs`}>
              <a className={TypographyStyles.inlineLink}>Dogs</a>
            </Link>
          </Flex>
        </Box>
        <Flex className={ContentListStyles.contentList__topSection}>
          <Box>
            <Select
              placeholder="Select a Topic"
              id="selectBox"
              onChange={() => changeFunc()}
            >
              {sortedBlogPostTags.map((tag) => (
                <option value={tag.id} key={tag.id}>
                  {tag.name}
                </option>
              ))}
            </Select>
          </Box>

          <Spacer />
        </Flex>
        <Flex>
          <Box>
            <ContentWrapper>
              <PostList
                postListType={postListType}
                posts={postSummaries}
                totalPages={totalPages}
                currentPage={currentPage}
              />
            </ContentWrapper>
          </Box>

          <Box w="30rem" p={5} display={{ base: "none", md: "block" }}>
            <h2 className={ContentListStyles.contentList__title}>
              Popular Posts
            </h2>
            {topPostsArray.map((post) => (
              <div key={post.sys.id}>
                <Link href={`/${post.slug}`}>
                  <a className={ContentListStyles.contentList__titleLink}>
                    <h3 className={ContentListStyles.contentList__topposttitle}>
                      {post.title}
                    </h3>
                  </a>
                </Link>
              </div>
            ))}
          </Box>
        </Flex>
        <Flex direction="column" display={{base: 'block,', md: 'none'}}>
          <ContentWrapper>
            <h2 className={ContentListStyles.contentList__title}>
              Popular Posts
            </h2>
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
                        style={{borderRadius:'20px'}}
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
                    {post.author !== null && <> Author: {post.author.name}</>}
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

        {pageContent.heroBanner !== null && (
          <HeroBanner data={pageContent.heroBanner} />
        )}

        <ContentWrapper>
          <Box pb={10} pt={7}>
            <h1 className={TypographyStyles.heading__h1}>
              Welcome to the Guide Dogs Blog
            </h1>
            <body className={TypographyStyles.bodyCopy}>
              Discover true stories, big issues, actioning change and
              more.......
            </body>
          </Box>
          {pageContent.body && (
            <PageContentWrapper>
              <RichTextPageContent richTextBodyField={pageContent.body} />
            </PageContentWrapper>
          )}

          <PostList
            postListType={postListType}
            posts={postSummaries}
            totalPages={totalPages}
            currentPage={currentPage}
          />
        </ContentWrapper>
      </MainLayout>
    );
  }
}

export async function getStaticProps({ preview = false }) {
  const blogPostTags = await ContentfulApi.getAllUniquePostTags();
  const posts = await ContentfulApi.getAllBlogPosts();

  console.log("blogPostTags");
  console.log(blogPostTags);

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

  console.log("topPostsIds");
  console.log(topPostsIds);
  //console.log(topPostsIds.length);

  const topPostId1 = topPostsIds.tpostid1;
  const topPostId2 = topPostsIds.tpostid2;
  const topPostId3 = topPostsIds.tpostid3;
  const topPostId4 = topPostsIds.tpostid4;
  const topPostId5 = topPostsIds.tpostid5;

  console.log("topPostId1");
  console.log(topPostId1);

  console.log("topPostId2");
  console.log(topPostId2);

  console.log("posts");
  console.log(posts);

  const topPost1 = posts.find((p) => p.sys.id === topPostId1);
  const topPost2 = posts.find((p) => p.sys.id === topPostId2);
  const topPost3 = posts.find((p) => p.sys.id === topPostId3);
  const topPost4 = posts.find((p) => p.sys.id === topPostId4);
  const topPost5 = posts.find((p) => p.sys.id === topPostId5);

  console.log("topPost1:");
  console.log(topPost1);

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

      console.log("ACC.........");
      console.log(acc);

      // totalPages = Math.ceil(
      //  acc.length / Config.pagination.pageSize,
      //);
      return acc;
    } else if (post.sys.id === topPostsIdsArray[1]) {
      acc.push(post);

      console.log("ACC.........");
      console.log(acc);

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

export async function changeFunc(tagid) {
  var selectBox = document.getElementById("selectBox");
  var selectedValue = selectBox.options[selectBox.selectedIndex].value;
  // alert(selectedValue);

  router.push(`/topic/${selectedValue}`);
}
