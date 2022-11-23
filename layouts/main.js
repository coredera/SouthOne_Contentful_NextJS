import GlobalStyles from "./main.styles.js";
import Header from "@components/Header";
import Footer from "@components/Footer";
import PreviewBanner from "@components/PreviewBanner";

export default function MainLayout(props) {
  const {
    preview,
    posts,
  } = props;

  //console.log("postSummaries:");
  //console.log(posts);

  return (
    <>
      <Header />
      <div id="content" />
      <main>{props.children}</main>

      <Footer />

      <style jsx global>
        {GlobalStyles}
      </style>
    </>
  );
}
