/*
 * This Config object is used throughout the application to
 * personalise your code and preferences for how you would
 * like things to work.
 *
 * For example, use the Config object to configure your menu links
 * without editing HTML, or change the page size on /blog without
 * touching any of the functional code.
 *
 */  
 
const SITE_URL = "https://southonenewham.com";

export const Config = {
  site: {
    owner: "South One Newham",
    title: "South One Newham Website",
    domain: "southonenewham.com",
    email: "",
    feedDescription: "RSS Feed for southonenewham.com",
  },
  pageMeta: {
    openGraph: {
      twitterUser: "examplesite",
    },
    home: {
      url: SITE_URL,
      slug: "/",
    },
    homePage: {
      url: SITE_URL,
      slug: "/page/[page]",
    },
    blogIndex: { 
      url: `${SITE_URL}/blog`,
      slug: "/blog",
    },
    blogIndexPage: {
      slug: "/blog/page/[page]",
    },
    post: {
      slug: "/[slug]",
    },
    privacyPolicy: { 
      url: `${SITE_URL}/privacy-policy`,
      slug: "/privacy-policy",
    },
    buildRss: {
      url: `${SITE_URL}/buildrss`,
      slug: "/buildrss",
    },
    notFound: {
      url: SITE_URL,
      slug: "/404",
    },
  },
  pagination: {
    pageSize: 5,
    recentPostsSize: 5,
  },
  menuLinks: [
    {
      displayName: "Home",
      path: "/",
    },
    {
      displayName: "Blog",
      path: "/blog",
    },
  ],
};
