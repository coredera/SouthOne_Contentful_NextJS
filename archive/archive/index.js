/*
import { Config } from "@utils/Config";
import PageMeta from "@components/PageMeta";
import ContentfulApi from "@utils/ContentfulApi";
import RichTextPageContent from "@components/RichTextPageContent";
import MainLayout from "@layouts/main";
import RecentPostList from "@components/RecentPostList";
import HeroBanner from "@components/HeroBanner";
import ContentWrapper from "@components/ContentWrapper";
import PageContentWrapper from "@components/PageContentWrapper";


export default function Home(props) {
  const { page, recentPosts, preview } = props;

  const pageTitle = page ? page.title : "Homey";

  const pageDescription = page
    ? page.description
    : "Welcome to the UK website";

  return (
    <>
      <MainLayout preview={preview}>
        <PageMeta
          title={pageTitle}
          description={pageDescription}
          url={Config.pageMeta.home.url}
        />

        <ContentWrapper>
          {page && page.body && (
            <PageContentWrapper>
              <RichTextPageContent richTextBodyField={page.body} />
            </PageContentWrapper>
          )}
          <RecentPostList posts={recentPosts} />
        </ContentWrapper>
      </MainLayout>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const page = await ContentfulApi.getPageBySlug(
    Config.pageMeta.home.slug,
    {
      preview: preview,
    },
  );

  const recentPosts = await ContentfulApi.getRecentPostList();

  return {
    props: {
      preview,
      page: page || null,
      recentPosts,
    },
  };
} 

/*

  {page && page.heroBanner !== null && (
          <HeroBanner data={page.heroBanner} />
        )}

        */

        