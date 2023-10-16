//import { createNoSubstitutionTemplateLiteral } from "typescript";
import { Config } from "./Config";

/**
 * This class constructs GraphQL queries for blog posts, page content and other data
 * and calls out to the Contentful GraphQL API.
 *
 * Contentful GraphQL API docs:
 * https://www.contentful.com/developers/docs/references/graphql/
 *
 * Explore the GraphQL API in depth in the GraphiQL Playground:
 * https://graphql.contentful.com/content/v1/spaces/{SPACE_ID}/explore?access_token={ACCESS_TOKEN}
 *
 */



const defaultOptions = {
  preview: process.env.CONTENTFUL_PREVIEW,
};

export default class ContentfulApi {
  /**
   * Fetch the content for a single page by slug.
   *
   * The content type uses the powerful Rich Text field type for the
   * body of the post.
   *
   * This query fetches linked assets (i.e. images) and entries
   * (i.e. video embed and code block entries) that are embedded
   * in the Rich Text field. This is rendered to the page using
   * @components/RichTextPageContent.
   *
   * For more information on Rich Text fields in Contentful, view the
   * documentation here: https://www.contentful.com/developers/docs/concepts/rich-text/
   *
   * Linked assets and entries are parsed and rendered using the npm package
   * @contentful/rich-text-react-renderer
   *
   * https://www.npmjs.com/package/@contentful/rich-text-react-renderer
   *
   * param: slug (string)
   *
   */
  static async getPageBySlug(slug, options = defaultOptions) {
    const query = `
    {
      pageCollection(limit: 1, where: {slug: "${slug}"}, preview: ${options.preview}) {
        items {
          sys {
            id
          }
          heroBanner {
            headline
            subHeading
            internalLink
            externalLink
            ctaText
            image {
              url
              title
              description
              width
              height
            }
          }
          title
          description
          metaTitle
          metaDescription
          slug
          body {
            json
            links {
              entries {
                inline {
                  sys {
                    id
                  }
                  __typename
                  ... on VideoEmbed {
                    title
                    embedUrl
                  }
                  ... on Article {
                    title
                    slug
                  }
                  ... on Button {
                    title
                    url
                  }
                }
                block {
                  sys {
                    id
                  }
                  __typename
                  ... on VideoEmbed {
                    title
                    embedUrl
                  }
                  ... on CodeBlock {
                    description
                    language
                    code
                  }
                  ... on Button {
                    title
                    url
                  }
                }
              }
              assets {
                block {
                  sys {
                    id
                  }
                  url
                  title
                  width
                  height
                  description
                }
              }
            }
          }
        }
      }
    }`;

    const response = await this.callContentful(query, options);

    const page = response.data.pageCollection.items
      ? response.data.pageCollection.items
      : [];

    return page.pop();
  }

  /**
   * Fetch a batch of blog post slugs (by given page number).
   *
   * This method queries the GraphQL API for a single batch of blog post slugs.
   *
   * The query limit of 100 is the maximum number of slugs
   * we can fetch with this query due to GraphQL complexity costs.
   *
   * For more information about GraphQL query complexity, visit:
   * https://www.contentful.com/developers/videos/learn-graphql/#graphql-fragments-and-query-complexity
   *
   * param: page (number)
   *
   */
  static async getPaginatedSlugs(page,  options = defaultOptions) {
    const queryLimit = 100;
    const skipMultiplier = page === 1 ? 0 : page - 1;
    const skip = skipMultiplier > 0 ? queryLimit * skipMultiplier : 0;

    const query = `{
        articleCollection(limit: ${queryLimit}, skip: ${skip}, order: datePublished_DESC, preview: ${options.preview} ) {
          total
          items {
            slug
            }
          }
        }`;

    const response = await this.callContentful(query);

    //console.log(response);

    const { total } = response.data.articleCollection;
    const slugs = response.data.articleCollection.items
      ? response.data.articleCollection.items.map((item) => item.slug)
      : [];



      

    return { slugs, total };
  }

  /**
   * Fetch all blog post slugs.
   *
   * This method queries the GraphQL API for blog post slugs
   * in batches that accounts for the query complexity cost,
   * and returns them in one array.
   *
   * This method is used on pages/blog/[slug] inside getStaticPaths() to
   * generate all dynamic blog post routes.
   *
   * For more information about GraphQL query complexity, visit:
   * https://www.contentful.com/developers/videos/learn-graphql/#graphql-fragments-and-query-complexity
   *
   */
  static async getAllPostSlugs() {
    let page = 1;
    let shouldQueryMoreSlugs = true;
    const returnSlugs = [];

    while (shouldQueryMoreSlugs) {
      const response = await this.getPaginatedSlugs(page);

      if (response.slugs.length > 0) {
        returnSlugs.push(...response.slugs);
      }

      shouldQueryMoreSlugs = returnSlugs.length < response.total;
      page++;
    }

    return returnSlugs;
  }

  /**
   * Fetch a batch of blog post slugs (by given page number).
   *
   * This method queries the GraphQL API for a single batch of blog post slugs.
   *
   * The query limit of 100 is the maximum number of slugs
   * we can fetch with this query due to GraphQL complexity costs.
   *
   * For more information about GraphQL query complexity, visit:
   * https://www.contentful.com/developers/videos/learn-graphql/#graphql-fragments-and-query-complexity
   *
   * param: page (number)
   *
   */
  static async getPaginatedUniquePostTags(page) {
    const queryLimit = 100;
    const skipMultiplier = page === 1 ? 0 : page - 1;
    const skip = skipMultiplier > 0 ? queryLimit * skipMultiplier : 0;

    const query = `{
        articleCollection(limit: ${queryLimit}, skip: ${skip}, order: datePublished_DESC) {
          total
          items {
            
            contentfulMetadata{
              tags {
                id
                name
              }
            }
            }
          }
        }`;

    const response = await this.callContentful(query);

   // console.log("reponse:");
    //console.log(response);
    //console.log(response.data.articleCollection.items[0].contentfulMetadata.tags[0].id,);
    //console.log(response.data.articleCollection.items[1].contentfulMetadata.tags[0].id,);
    //console.log(response.data.articleCollection.items[2].contentfulMetadata.tags[0].id,);
    


    const { total } = response.data.articleCollection;

    const tags = response.data.articleCollection.items
      ? response.data.articleCollection.items.map(
          (item) =>
            // function(item.contentfulMetadata.tags) {
            //return
            item.contentfulMetadata.tags.map((item2) => item2),
          //}
        )
      : //(item) => item.contentfulMetadata.tags[0].id)
        [];

    var merged = [].concat.apply([], tags);

    let foo = new Map();
    for (const val of merged) {
      foo.set(val.id, val);
    }
    let final = [...foo.values()];

    const tagtotal = final.length;


    /** 
    console.log("tags:");
    console.log(tags);
    console.log("merged:");
    console.log(merged);
    console.log("final:");
    console.log(final);
    console.log("tagtotal:");
    console.log(tagtotal);
    **/
    return { final, tagtotal };
  }

  /**
   * Fetch all unique blog post tags.
   *
   * This method queries the GraphQL API for blog post slugs
   * in batches that accounts for the query complexity cost,
   * and returns them in one array.
   *
   * This method is used on pages/blog/[slug] inside getStaticPaths() to
   * generate all dynamic blog post routes.
   *
   * For more information about GraphQL query complexity, visit:
   * https://www.contentful.com/developers/videos/learn-graphql/#graphql-fragments-and-query-complexity
   *
   */

  static async getAllUniquePostTags() {
    let page = 1;
    let shouldQueryMoreTags = true;
    let returnTags = [];

    while (shouldQueryMoreTags) {
      const response = await this.getPaginatedUniquePostTags(page);

     // console.log("response:");
     // console.log(response);
      /**
      if (response.slugs.length > 0) {
        returnSlugs.push(...response.slugs);
      }
**/
      //if (response.slugs.length > 0) {
      returnTags.push(...response.final);
      //}

      shouldQueryMoreTags = returnTags.length < response.total;
      page++;
    }

    //return returnSlugs;

    /**
      const { tags, total } = await this.getPaginatedUniquePostTags(page);

      console.log("const tags:");
      console.log(tags);

      // slugs: Array<string>
      if (tags.id.length > 0) {
        returnTags = [...returnTags];
      }

      console.log("returnTags:");
      console.log(returnTags);

      shouldQueryMoreTags = returnTags.length < total;
      page++;
    }
**/
  //  console.log("returnTags:");
   // console.log(returnTags);
    return returnTags;
  }

  /**
   * Fetch a batch of blog posts (by given page number).
   *
   * This method queries the GraphQL API for a single batch of blog posts.
   *
   * The query limit of 10 is the maximum number of posts
   * we can fetch with this query due to GraphQL complexity costs.
   *
   * For more information about GraphQL query complexity, visit:
   * https://www.contentful.com/developers/videos/learn-graphql/#graphql-fragments-and-query-complexity
   *
   * param: page (number)
   *
   */
  static async getPaginatedArticles(page) {
    const queryLimit = 10;
    const skipMultiplier = page === 1 ? 0 : page - 1;
    const skip = skipMultiplier > 0 ? queryLimit * skipMultiplier : 0;

    const query = `{
        articleCollection(limit: ${queryLimit}, skip: ${skip}, order: datePublished_DESC) {
          total
          items {
            sys {
              id
            }
            contentfulMetadata{
              tags {
                id
                name
              }
            }
            image {
              title
              description
              contentType
              fileName
              size
              url
              width
              height
            }
            datePublished
            title
            slug
            excerpt
            externalUrl
            author {
              name
              description
              twitchUsername
              twitterUsername
              gitHubUsername
              websiteUrl
              image {
                url
                title
                width
                height
                description
              }
            }
            body {
              json
              links {
                entries {
                  inline {
                    sys {
                      id
                    }
                    __typename
                    ... on Article {
                      title
                      slug
                    }
                  }
                  block {
                    sys {
                      id
                    }
                    __typename
                    ... on VideoEmbed {
                      title
                      embedUrl
                    }
                    ... on CodeBlock {
                      description
                      language
                      code
                    }
                  }
                }
                assets {
                  block {
                    sys {
                      id
                    }
                    url
                    title
                    width
                    height
                    description
                  }
                }
              }
            }
          }
        }
      }`;

    const response = await this.callContentful(query);

    const { total } = response.data.articleCollection;
    const posts = response.data.articleCollection.items
      ? response.data.articleCollection.items
      : [];

    return { posts, total };
  }

  /**
   * Fetch all blog posts.
   *
   * This method queries the GraphQL API for blog posts
   * in batches that accounts for the query complexity cost,
   * and returns them in one array.
   *
   * This method is used to build the RSS feed on pages/buildrss.
   *
   * For more information about GraphQL query complexity, visit:
   * https://www.contentful.com/developers/videos/learn-graphql/#graphql-fragments-and-query-complexity
   *
   */
  static async getAllArticles() {
    let page = 1;
    let shouldQueryMorePosts = true;
    const returnPosts = [];

    while (shouldQueryMorePosts) {
      const response = await this.getPaginatedArticles(page);

      if (response.posts.length > 0) {
        returnPosts.push(...response.posts);
      }

      shouldQueryMorePosts = returnPosts.length < response.total;
      page++;
    }

    return returnPosts;
  }

  /**
   * Fetch a single blog post by slug.
   *
   * This method is used on pages/blog/[slug] to fetch the data for
   * individual blog posts at build time, which are prerendered as
   * static HTML.
   *
   * The content type uses the powerful Rich Text field type for the
   * body of the post.
   *
   * This query fetches linked assets (i.e. images) and entries
   * (i.e. video embed and code block entries) that are embedded
   * in the Rich Text field. This is rendered to the page using
   * @components/RichTextPageContent.
   *
   * For more information on Rich Text fields in Contentful, view the
   * documentation here: https://www.contentful.com/developers/docs/concepts/rich-text/
   *
   * Linked assets and entries are parsed and rendered using the npm package
   * @contentful/rich-text-react-renderer
   *
   * https://www.npmjs.com/package/@contentful/rich-text-react-renderer
   *
   * param: slug (string)
   *
   */
  static async getPostBySlug(slug, options = defaultOptions) {
    console.log("running graphQL");
    const query = `{
      articleCollection(limit: 1, where: {slug: "${slug}"}, preview: ${options.preview}) {
        total
        items {
          sys {
            id
          }
          contentfulMetadata{
            tags {
              id
              name
            }
          }
          image {
            title
            description
            contentType
            fileName
            size
            url
            width
            height
          }
          datePublished
          title
          metaTitle
          metaDescription
          slug
          excerpt
          externalUrl
          author {
            type
            name
            description
            twitchUsername
            twitterUsername
            gitHubUsername
            websiteUrl
            email
            image {
              url
              title
              width
              height
              description
            }
          }
          youMightAlsoLikeCollection {
            items {
              sys {
                id
              }
              slug
              title
              excerpt
              image {
                title
                description
                contentType
                fileName
                size
                url
                width
                height
              }
            }
          }
          body {
            json
            links {
              entries {
                inline {
                  sys {
                    id
                  }
                  __typename
                  ... on Article {
                    title
                    slug
                  }
                  ... on VideoEmbed {
                    title
                    embedUrl
                  }
                  ... on CodeBlock {
                    description
                    language
                    code
                  }
                  ... on Button {
                    title
                    url
                  }
                  ... on Page {
                    title
                    slug
                  }
                }
                block {
                  sys {
                    id
                  }
                  __typename
                  ... on Article {
                    title
                    slug
                  }
                  ... on VideoEmbed {
                    title
                    embedUrl
                  }
                  ... on CodeBlock {
                    description
                    language
                    code
                  }
                  ... on Button {
                    title
                    url
                  }
                  ... on Page {
                    title
                    slug
                  }
                }
              }
              assets {
                block {
                  sys {
                    id
                  }
                  url
                  title
                  width
                  height
                  description
                }
              }
            }
          }
        }
      }
    }`;

    const response = await this.callContentful(query, options);
    const post = response.data.articleCollection.items
      ? response.data.articleCollection.items
      : [];

     

    return post.pop();
  }

  /**
   * Fetch a featured blog post.
   *
   * This method is used on blog landing page to fetch the data for
   * individual blog posts at build time, which are prerendered as
   * static HTML.
   *
   * The content type uses the powerful Rich Text field type for the
   * body of the post.
   *
   * This query fetches linked assets (i.e. images) and entries
   * (i.e. video embed and code block entries) that are embedded
   * in the Rich Text field. This is rendered to the page using
   * @components/RichTextPageContent.
   *
   * For more information on Rich Text fields in Contentful, view the
   * documentation here: https://www.contentful.com/developers/docs/concepts/rich-text/
   *
   * Linked assets and entries are parsed and rendered using the npm package
   * @contentful/rich-text-react-renderer
   *
   * https://www.npmjs.com/package/@contentful/rich-text-react-renderer
   *
   * param: not required
   *
   */
  static async getFeaturedArticle() {
    const fquery = `{
      featuredArticleCollection {
        total
        items {
          featuredArticle {
            slug
            sys {
              id
            }
          }
        }
      }
    }`;

    const fresponse = await this.callContentful(fquery);

   // console.log("fresponse:");
   // console.log(fresponse.data.featuredArticleCollection.items[0].featuredArticle);

    //const fpostid = `a`;

    if (fresponse.data.featuredArticleCollection.items[0].featuredArticle !== null) {
      const fpostid =
        fresponse.data.featuredArticleCollection.items[0].featuredArticle.slug;

   //   console.log("fpostid:");
   //   console.log(fpostid);

      const query = `{
      articleCollection(limit: 1, where: {slug: "${fpostid}"}) {
        total
        items {
          sys {
            id
          }
          contentfulMetadata{
            tags {
              id
              name
            }
          }
          image {
            title
            description
            contentType
            fileName
            size
            url
            width
            height
          }
          datePublished
          title
          metaTitle
          metaDescription
          slug
          excerpt
          externalUrl
          author {
            type
            name
            description
            twitchUsername
            twitterUsername
            gitHubUsername
            websiteUrl
            image {
              url
              title
              width
              height
              description
            }
          }
          body {
            json
            links {
              entries {
                inline {
                  sys {
                    id
                  }
                  __typename
                  ... on Article {
                    title
                    slug
                  }
                }
                block {
                  sys {
                    id
                  }
                  __typename
                  ... on VideoEmbed {
                    title
                    embedUrl
                  }
                  ... on CodeBlock {
                    description
                    language
                    code
                  }
                }
              }
              assets {
                block {
                  sys {
                    id
                  }
                  url
                  title
                  width
                  height
                  description
                }
              }
            }
          }
        }
      }
    }`;

      const response = await this.callContentful(query);

    //  console.log(response);

      const post = response.data.articleCollection.items
        ? response.data.articleCollection.items
        : [];

      return post.pop();
    } else {
      return null;
    }
  }

/**
   * Fetch the top posts IDs.
   *
   * This method is used on blog landing page to fetch the data for
   * the top posts at build time, which are prerendered as
   * static HTML.
   *
   * The content type uses the powerful Rich Text field type for the
   * body of the post.
   *
   * This query fetches linked assets (i.e. images) and entries
   * (i.e. video embed and code block entries) that are embedded
   * in the Rich Text field. This is rendered to the page using
   * @components/RichTextPageContent.
   *
   * For more information on Rich Text fields in Contentful, view the
   * documentation here: https://www.contentful.com/developers/docs/concepts/rich-text/
   *
   * Linked assets and entries are parsed and rendered using the npm package
   * @contentful/rich-text-react-renderer
   *
   * https://www.npmjs.com/package/@contentful/rich-text-react-renderer
   *
   * param: not required
   *
   */
 static async getTopPostsIds() {
  const tquery = `{
    topArticlesCollection {
      total
      items {
        article1 {
          sys {
            id
            
          }
          slug
        }
        article2 {
          sys {
            id
          }
           slug
        }
        article3 {
          sys {
            id
          }
           slug
        }
        article4 {
          sys {
            id
          }
           slug
        }
        article5 {
          sys {
            id
          }
           slug
        }
      }
    }
  }`;

  const tresponse = await this.callContentful(tquery);

 // console.log("tresponse:");
 // console.log(tresponse.data.topArticlesCollection.items[0].post1);

  //const fpostid = `a`;

  if (tresponse.data.topArticlesCollection.items[0].article1 !== null) {
    const tpostid1 =
      tresponse.data.topArticlesCollection.items[0].article1.sys.id;

    const tpostid2 =
      tresponse.data.topArticlesCollection.items[0].article2.sys.id;

      const tpostid3 =
      tresponse.data.topArticlesCollection.items[0].article3.sys.id;

      const tpostid4 =
      tresponse.data.topArticlesCollection.items[0].article4.sys.id;

      const tpostid5 =
      tresponse.data.topArticlesCollection.items[0].article5.sys.id;

  //  console.log("tpostid1:");
  //  console.log(tpostid1);

   




      return { tpostid1, tpostid2, tpostid3, tpostid4, tpostid5 };
  } else {
    return null;
  }
}



/**
   * Fetch the top posts.
   *
   * This method is used on blog landing page to fetch the data for
   * the top posts at build time, which are prerendered as
   * static HTML.
   *
   * The content type uses the powerful Rich Text field type for the
   * body of the post.
   *
   * This query fetches linked assets (i.e. images) and entries
   * (i.e. video embed and code block entries) that are embedded
   * in the Rich Text field. This is rendered to the page using
   * @components/RichTextPageContent.
   *
   * For more information on Rich Text fields in Contentful, view the
   * documentation here: https://www.contentful.com/developers/docs/concepts/rich-text/
   *
   * Linked assets and entries are parsed and rendered using the npm package
   * @contentful/rich-text-react-renderer
   *
   * https://www.npmjs.com/package/@contentful/rich-text-react-renderer
   *
   * param: not required
   *
   */
 static async getTopPosts() {
  const tquery = `{
    topArticlesCollection {
      total
      items {
        article1 {
          sys {
            id
            
          }
          slug
        }
        article2 {
          sys {
            id
          }
           slug
        }
        article3 {
          sys {
            id
          }
           slug
        }
        article4 {
          sys {
            id
          }
           slug
        }
        article5 {
          sys {
            id
          }
           slug
        }
      }
    }
  }`;

  const tresponse = await this.callContentful(tquery);

 // console.log("tresponse:");
 // console.log(tresponse.data.topArticlesCollection.items[0].article1);

  //const fpostid = `a`;

  if (tresponse.data.topArticlesCollection.items[0].article1 !== null) {
    const tpostid1 =
      tresponse.data.topArticlesCollection.items[0].article1.sys.id;

    const tpostid2 =
      tresponse.data.topArticlesCollection.items[0].article2.sys.id;

      const tpostid3 =
      tresponse.data.topArticlesCollection.items[0].article3.sys.id;

      const tpostid4 =
      tresponse.data.topArticlesCollection.items[0].article4.sys.id;

      const tpostid5 =
      tresponse.data.topArticlesCollection.items[0].article5.sys.id;

    //console.log("tpostid1:");
    //console.log(tpostid1);

   



    const query = `{
    articleCollection(limit: 5,  where: {
      sys: {
        id_in: ["${tpostid1}", "${tpostid2}", "${tpostid3}", "${tpostid4}", "${tpostid5}"]
      }
    })
    {
      total
      items {
        sys {
          id
        }
        contentfulMetadata{
          tags {
            id
            name
          }
        }
        image {
          title
          description
          contentType
          fileName
          size
          url
          width
          height
        }
        datePublished
        title
        metaTitle
        metaDescription
        slug
        excerpt
        externalUrl
        author {
          type
          name
          description
          twitchUsername
          twitterUsername
          gitHubUsername
          websiteUrl
          image {
            url
            title
            width
            height
            description
          }
        }
        body {
          json
          links {
            entries {
              inline {
                sys {
                  id
                }
                __typename
                ... on Article {
                  title
                  slug
                }
              }
              block {
                sys {
                  id
                }
                __typename
                ... on VideoEmbed {
                  title
                  embedUrl
                }
                ... on CodeBlock {
                  description
                  language
                  code
                }
              }
            }
            assets {
              block {
                sys {
                  id
                }
                url
                title
                width
                height
                description
              }
            }
          }
        }
      }
    }
  }`;

    const response = await this.callContentful(query);

    //console.log(response);

    const posts = response.data.articleCollection.items
      ? response.data.articleCollection.items
      : [];



      return { posts };
  } else {
    return null;
  }
}





  /**
   * Fetch n post summaries that are displayed on pages/blog.js.
   *
   * This method accepts a parameter of a page number that calculates
   * how many blog posts to skip in the GraphQL query.
   *
   * Set your desired page size in @utils/Config:
   * Config.pagination.pageSize
   *
   * The page size is currently set to 2 so you can view how the pagination
   * works on a fresh clone of the repository.
   *
   * param: page (number)
   *
   */
  static async getPaginatedPostSummaries(page) {
    /**
     * Calculate the skip parameter for the query based on the incoming page number.
     * For example, if page === 2, and your page length === 3,
     * the skip parameter would be calculated as 3 (the length of a page)
     * therefore skipping the results of page 1.
     */

    const skipMultiplier = page === 1 ? 0 : page - 1;
    const skip =
      skipMultiplier > 0 ? Config.pagination.pageSize * skipMultiplier : 0;

    const query = `{
        articleCollection(limit: ${Config.pagination.pageSize}, skip: ${skip}, order: datePublished_DESC) {
          total
          items {
            sys {
              id
            }
            contentfulMetadata{
              tags {
                id
                name
              }
            }
            image {
              title
              description
              contentType
              fileName
              size
              url
              width
              height
            }
            datePublished
            title
            slug
            excerpt
            author{
              name
            }
          }
        }
      }`;

    const response = await this.callContentful(query);

    const paginatedPostSummaries = response.data.articleCollection
      ? response.data.articleCollection
      : { total: 0, items: [] };

    return paginatedPostSummaries;
  }

  /**
   * Fetch n recent post summaries that are displayed on pages/index.js.
   *
   * This query is purposefully not paginated as it serves as a single
   * responsibility function to display a fixed size group of posts.
   *
   * Set your desired recent post list size in @utils/Config:
   * Config.pagination.recentPostsSize
   *
   */
  static async getRecentPostList() {
    const query = `{
      articleCollection(limit: ${Config.pagination.recentPostsSize}, order: datePublished_DESC) {
        items {
          contentfulMetadata{
            tags {
              id
              name
            }
          }
          image {
            title
            description
            contentType
            fileName
            size
            url
            width
            height
          }
          sys {
            id
          }
          datePublished
          title
          slug
          excerpt


        }
      }
    }`;

    const response = await this.callContentful(query);

    const recentPosts = response.data.articleCollection.items
      ? response.data.articleCollection.items
      : [];
    return recentPosts;
  }

  /**
   * Fetch the total number of blog posts.
   */
  static async getTotalPostsNumber() {
    const query = `
      {
        articleCollection {
          total
        }
      }
    `;

    const response = await this.callContentful(query);
    const totalPosts = response.data.articleCollection.total
      ? response.data.articleCollection.total
      : 0;

    return totalPosts;
  }

  /**
   * Call the Contentful GraphQL API using fetch.
   *
   * param: query (string)
   */
  static async callContentful(query, options = defaultOptions) {
    const fetchUrl = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/${process.env.CONTENTFUL_ENVIRONMENT}`;

    const accessToken = options.preview
      ? process.env.NEXT_PUBLIC_CONTENTFUL_PREVIEW_ACCESS_TOKEN
      : process.env.CONTENTFUL_ACCESS_TOKEN;

    const fetchOptions = {
      method: "POST",
      headers: {
        Authorization: "Bearer " + accessToken,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    };

    try {
      const data = await fetch(fetchUrl, fetchOptions).then((response) =>
        response.json(),
      );
      return data;
    } catch (error) {
      throw new Error("Could not fetch data from Contentful!");
    }
  }








  /**
   * Fetch all blog posts.
   *
   * This method queries the GraphQL API for blog posts
   * in batches that accounts for the query complexity cost,
   * and returns them in one array.
   *
   * This method is used to build the RSS feed on pages/buildrss.
   *
   * For more information about GraphQL query complexity, visit:
   * https://www.contentful.com/developers/videos/learn-graphql/#graphql-fragments-and-query-complexity
   *
   */
   static async getAllTopicPostSummaries() {
    let page = 1;
    let shouldQueryMorePosts = true;
    const returnPosts = [];

    while (shouldQueryMorePosts) {
      const response = await this.getPaginatedTopicPostSummaries(page);

      if (response.posts.length > 0) {
        returnPosts.push(...response.posts);
      }

      shouldQueryMorePosts = returnPosts.length < response.total;
      page++;
    }

    return returnPosts;
  }



  /**
   * Fetch n post summaries that are displayed on pages/blog.js.
   *
   * This method accepts a parameter of a page number that calculates
   * how many blog posts to skip in the GraphQL query.
   *
   * Set your desired page size in @utils/Config:
   * Config.pagination.pageSize
   *
   * The page size is currently set to 2 so you can view how the pagination
   * works on a fresh clone of the repository.
   *
   * param: page (number)
   *
   */
   static async getPaginatedTopicPostSummaries(page) {
    /**
     * Calculate the skip parameter for the query based on the incoming page number.
     * For example, if page === 2, and your page length === 3,
     * the skip parameter would be calculated as 3 (the length of a page)
     * therefore skipping the results of page 1.
     */

    //const skipMultiplier = page === 1 ? 0 : page - 1;
    //const skip =
    //  skipMultiplier > 0 ? Config.pagination.pageSize * skipMultiplier : 0;

    const queryLimit = 10;
    const skipMultiplier = page === 1 ? 0 : page - 1;
    const skip = skipMultiplier > 0 ? queryLimit * skipMultiplier : 0;


    const query = `{
        topicCollection(limit: 5, order: datePublished_DESC) {
          total
          items {
            sys {
              id
            }
            contentfulMetadata{
              tags {
                id
                name
              }
            }
            image {
              title
              description
              contentType
              fileName
              size
              url
              width
              height
            }
            datePublished
            title
            slug
            excerpt
            author{
              name
            }
          }
        }
      }`;

    const response = await this.callContentful(query);

    const paginatedPostSummaries = response.data.articleCollection
      ? response.data.articleCollection
      : { total: 0, items: [] };

    return paginatedPostSummaries;
  }
}
