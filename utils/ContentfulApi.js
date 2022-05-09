import { createNoSubstitutionTemplateLiteral } from "typescript";
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
  static async getPageContentBySlug(slug, options = defaultOptions) {
    const query = `
    {
      pageContentCollection(limit: 1, where: {slug: "${slug}"}, preview: ${options.preview}) {
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
                  ... on BlogPost {
                    title
                    slug
                  }
                  ... on Button {
                    title
                    embedUrl
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
                    embedUrl
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

    const pageContent = response.data.pageContentCollection.items
      ? response.data.pageContentCollection.items
      : [];

    return pageContent.pop();
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
        blogPostCollection(limit: ${queryLimit}, skip: ${skip}, order: date_DESC, preview: ${options.preview} ) {
          total
          items {
            slug
            }
          }
        }`;

    const response = await this.callContentful(query);

    const { total } = response.data.blogPostCollection;
    const slugs = response.data.blogPostCollection.items
      ? response.data.blogPostCollection.items.map((item) => item.slug)
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
        blogPostCollection(limit: ${queryLimit}, skip: ${skip}, order: date_DESC) {
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
   // console.log(response);
    //console.log(response.data.blogPostCollection.items[0].contentfulMetadata.tags[0].id,);
    //console.log(response.data.blogPostCollection.items[1].contentfulMetadata.tags[0].id,);
    //console.log(response.data.blogPostCollection.items[2].contentfulMetadata.tags[0].id,);

    const { total } = response.data.blogPostCollection;

    const tags = response.data.blogPostCollection.items
      ? response.data.blogPostCollection.items.map(
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
  static async getPaginatedBlogPosts(page) {
    const queryLimit = 10;
    const skipMultiplier = page === 1 ? 0 : page - 1;
    const skip = skipMultiplier > 0 ? queryLimit * skipMultiplier : 0;

    const query = `{
        blogPostCollection(limit: ${queryLimit}, skip: ${skip}, order: date_DESC) {
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
            date
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
                    ... on BlogPost {
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

    const { total } = response.data.blogPostCollection;
    const posts = response.data.blogPostCollection.items
      ? response.data.blogPostCollection.items
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
  static async getAllBlogPosts() {
    let page = 1;
    let shouldQueryMorePosts = true;
    const returnPosts = [];

    while (shouldQueryMorePosts) {
      const response = await this.getPaginatedBlogPosts(page);

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
    const query = `{
      blogPostCollection(limit: 1, where: {slug: "${slug}"}, preview: ${options.preview}) {
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
          date
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
                  ... on BlogPost {
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
                    embedUrl
                  }
                }
                block {
                  sys {
                    id
                  }
                  __typename
                  ... on BlogPost {
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
                    embedUrl
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
    const post = response.data.blogPostCollection.items
      ? response.data.blogPostCollection.items
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
  static async getFeaturedPost() {
    const fquery = `{
      featuredPostCollection {
        total
        items {
          featuredPost {
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
   // console.log(fresponse.data.featuredPostCollection.items[0].featuredPost);

    //const fpostid = `a`;

    if (fresponse.data.featuredPostCollection.items[0].featuredPost !== null) {
      const fpostid =
        fresponse.data.featuredPostCollection.items[0].featuredPost.slug;

   //   console.log("fpostid:");
   //   console.log(fpostid);

      const query = `{
      blogPostCollection(limit: 1, where: {slug: "${fpostid}"}) {
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
          date
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
                  ... on BlogPost {
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

      const post = response.data.blogPostCollection.items
        ? response.data.blogPostCollection.items
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
    topPostsCollection {
      total
      items {
        post1 {
          sys {
            id
            
          }
          slug
        }
        post2 {
          sys {
            id
          }
           slug
        }
        post3 {
          sys {
            id
          }
           slug
        }
        post4 {
          sys {
            id
          }
           slug
        }
        post5 {
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
 // console.log(tresponse.data.topPostsCollection.items[0].post1);

  //const fpostid = `a`;

  if (tresponse.data.topPostsCollection.items[0].post1 !== null) {
    const tpostid1 =
      tresponse.data.topPostsCollection.items[0].post1.sys.id;

    const tpostid2 =
      tresponse.data.topPostsCollection.items[0].post2.sys.id;

      const tpostid3 =
      tresponse.data.topPostsCollection.items[0].post3.sys.id;

      const tpostid4 =
      tresponse.data.topPostsCollection.items[0].post4.sys.id;

      const tpostid5 =
      tresponse.data.topPostsCollection.items[0].post5.sys.id;

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
    topPostsCollection {
      total
      items {
        post1 {
          sys {
            id
            
          }
          slug
        }
        post2 {
          sys {
            id
          }
           slug
        }
        post3 {
          sys {
            id
          }
           slug
        }
        post4 {
          sys {
            id
          }
           slug
        }
        post5 {
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
 // console.log(tresponse.data.topPostsCollection.items[0].post1);

  //const fpostid = `a`;

  if (tresponse.data.topPostsCollection.items[0].post1 !== null) {
    const tpostid1 =
      tresponse.data.topPostsCollection.items[0].post1.sys.id;

    const tpostid2 =
      tresponse.data.topPostsCollection.items[0].post2.sys.id;

      const tpostid3 =
      tresponse.data.topPostsCollection.items[0].post3.sys.id;

      const tpostid4 =
      tresponse.data.topPostsCollection.items[0].post4.sys.id;

      const tpostid5 =
      tresponse.data.topPostsCollection.items[0].post5.sys.id;

    //console.log("tpostid1:");
    //console.log(tpostid1);

   



    const query = `{
    blogPostCollection(limit: 5,  where: {
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
        date
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
                ... on BlogPost {
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

    const posts = response.data.blogPostCollection.items
      ? response.data.blogPostCollection.items
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
        blogPostCollection(limit: ${Config.pagination.pageSize}, skip: ${skip}, order: date_DESC) {
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
            date
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

    const paginatedPostSummaries = response.data.blogPostCollection
      ? response.data.blogPostCollection
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
      blogPostCollection(limit: ${Config.pagination.recentPostsSize}, order: date_DESC) {
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
          date
          title
          slug
          excerpt


        }
      }
    }`;

    const response = await this.callContentful(query);

    const recentPosts = response.data.blogPostCollection.items
      ? response.data.blogPostCollection.items
      : [];
    return recentPosts;
  }

  /**
   * Fetch the total number of blog posts.
   */
  static async getTotalPostsNumber() {
    const query = `
      {
        blogPostCollection {
          total
        }
      }
    `;

    const response = await this.callContentful(query);
    const totalPosts = response.data.blogPostCollection.total
      ? response.data.blogPostCollection.total
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
        topicCollection(limit: 5, order: date_DESC) {
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
            date
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

    const paginatedPostSummaries = response.data.blogPostCollection
      ? response.data.blogPostCollection
      : { total: 0, items: [] };

    return paginatedPostSummaries;
  }
}
