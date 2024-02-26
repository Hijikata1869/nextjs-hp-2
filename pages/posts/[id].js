import Link from "next/link";
import Layout from "../../components/Layout";
import { getAllPostsData, getAllPostsIds } from "../../lib/posts";

export async function getStaticPaths() {
  const paths = await getAllPostsIds();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { post: post } = await getPostData(params.id);
  return {
    props: {
      post,
    },
  };
}
