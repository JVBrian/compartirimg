import React from "react";

import { getAllPosts } from "@/actions/postAction";
import Feature from "@/components/Feature";
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";
import Pagination from "@/components/Pagination";

const Home = async ({ params, searchParams }) => {
  const { posts, totalPage } = await getAllPosts(searchParams);

  return (
    <div className="container card">
      <h1>Compartir IMG [Pexels]</h1>
      <p>Página para sacar imágenes: https://www.pexels.com/</p>

      <PostForm />
      <Feature />

      {posts && <PostList posts={posts} />}
      {totalPage && <Pagination totalPage={totalPage} />}
    </div>
  );
};

export default Home;
