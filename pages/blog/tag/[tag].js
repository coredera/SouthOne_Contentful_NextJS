import ContentfulApi from "@utils/ContentfulApi";
import Post from "@components/Post";
import { Config } from "@utils/Config";
import PageMeta from "@components/PageMeta";
import MainLayout from "@layouts/main";
import ContentWrapper from "@components/ContentWrapper";

export default function PostWrapper(props) {
  const { post, preview } = props;

  return (
    <MainLayout preview={preview}>
      <PageMeta
        title={post.title}
        description={post.excerpt}
        url={`${Config.pageMeta.blogIndex.url}/${post.slug}`}
        canonical={post.externalUrl ? post.externalUrl : false}
      />
      <ContentWrapper>
        <Post post={post} />
      </ContentWrapper>
    </MainLayout>
  );
}

export async function getStaticPaths() {
  // Array<string>
  const blogPostSlugs = await ContentfulApi.getAllUniquePostTags();

  const paths = blogPostSlugs.map((tag) => {
    return { params: { tag } };
  });

  // Using fallback: "blocking" here enables preview mode for unpublished blog slugs
  // on production
  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps({ params, preview = false }) {
  console.log("====================================");
  console.log("params", params);
  console.log("====================================");
  const post = await ContentfulApi.getPostBySlug(params.tag, {
    preview: preview,
  });

  // Add this with fallback: "blocking"
  // So that if we do not have a post on production,
  // the 404 is served
  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      preview,
      post,
    },
  };
}