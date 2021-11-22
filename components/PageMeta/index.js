import Head from "next/head";
import OpenGraph from "@utils/OpenGraph";
import { Config } from "@utils/Config";

export default function PageMeta(props) {
  const { title, description, url, canonical, image } = props;
  const siteTitle = `${title} | ${Config.site.title}`;

  /** 
  const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: {siteTitle},
    description: {description},
    image: {image},
    datePublished: new Date("2021-09-04T09:25:01.340Z").toISOString(),
    author: {
      "@type": "Person",
      name: "John Reilly",
      url: "https://twitter.com/johnny_reilly",
    },
  };

  */

  const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Structured data for you",
    description: "This is an article that demonstrates structured data.",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/40/JSON-LD.svg",
    datePublished: new Date("2021-09-04T09:25:01.340Z").toISOString(),
    author: {
      "@type": "Person",
      name: "John Reilly",
      url: "https://twitter.com/johnny_reilly",
    },
  };


  return (
    <Head>
      <title>{siteTitle}</title>

      {canonical && <link rel="canonical" href={canonical} />}

      <link
        rel="alternate"
        type="application/rss+xml"
        title={`RSS Feed for ${Config.site.domain}`}
        href={`https://${Config.site.domain}/feed.xml`}
      />

      <meta name="title" content={siteTitle} />
      <meta property="og:title" content={title} />
      <meta property="twitter:title" content={title} />

      <meta name="description" content={description} />
      <meta property="og:description" content={description} />
      <meta property="twitter:description" content={description} />

      <meta property="og:url" content={url} />
      <meta property="twitter:url" content={url} />

      <meta property="og:image" content={image} />
      <meta
        property="twitter:image"
        content={OpenGraph.generateImageUrl(title)} 
      />

      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:site"
        content={`@${Config.pageMeta.openGraph.twitterUser}`}
      />
      <meta
        name="twitter:creator"
        content={`@${Config.pageMeta.openGraph.twitterUser}`}
      />

      <link rel="icon" href="/favicon.ico" />

      <script type="application/ld+json">
        {JSON.stringify(articleStructuredData)}
      </script>
    
      
      {/*
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#0f111a" />
      <meta name="msapplication-TileColor" content="#002b5b" />
      <meta name="theme-color" content="#002b5b" />
      */}

    </Head>
  );
}
