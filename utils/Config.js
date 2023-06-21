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
 
const SITE_URL = "https://www.examplesite.org.uk";

export const Config = {
  site: {
    owner: "Guide Dogs UK",
    title: "Guide Dogs UK Blog in config file",
    domain: "examplesite.org.uk",
    email: "jason.fang@examplesite.org.uk",
    feedDescription: "RSS Feed for examplesite.org.uk",
  },
  pageMeta: {
    openGraph: {
      twitterUser: "examplesite",
    },
    home: {
      url: SITE_URL,
      slug: "/",
    },
    blogIndex: { 
      url: `${SITE_URL}/blog`,
      slug: "/blog",
    },
    blogIndexPage: {
      slug: "/blog/page/[page]",
    },
    post: {
      slug: "/blog/[slug]",
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
    pageSize: 3,
    recentPostsSize: 3,
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
