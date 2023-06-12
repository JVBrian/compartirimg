"use client";
import { experimental_useOptimistic as useOptimistic } from "react";
import PostCard from "./PostCard";
import { deletePost } from "@/actions/postAction";

const PostList = ({ posts }) => {
  const [optimisticPosts, addOptimisticPosts] = useOptimistic(
    { posts },
    (state, newPosts) => ({ ...state, posts: newPosts })
  );

  const handleDelete = async (id) => {
    if (window.confirm("¿Estás seguro que quieres borrar esta imagen?")) {
      const newPosts = posts.filter((post) => post._id !== id);
      addOptimisticPosts((optimisticPosts.posts = newPosts));
      await deletePost(id);
    }
  };

  return (
    <div className="post_list">
      {optimisticPosts.posts.map((post) => (
        <PostCard key={post._id} post={post} handleDelete={handleDelete} />
      ))}
    </div>
  );
};

export default PostList;
