"use client";
import React, { useTransition } from "react";
import Link from "next/link";
import Image from "next/image";

import { useMyContext } from "@/context/Provider";


const PostCard = ({ post, handleDelete }) => {
  const { setEditPost } = useMyContext();
  let [isPending, startTransition] = useTransition();

  
  return (
    <div>
      <Link href={`/post/${post._id}`}>
        <Image
          src={post?.image}
          alt="
            image"
          width={200}
          height={200}
          priority
        />
        <h3>{post?.title.charAt(0).toUpperCase() + post.title?.slice(1).toLowerCase()}</h3>
      </Link>

      <div className="btn_card">
        <button onClick={() => setEditPost(post)} className="button-name">Editar</button>
        <button
          onClick={() => startTransition(() => handleDelete(post._id))}
          disabled={isPending}
          className="button-name"
        >
          {isPending ? "Cargando..." : "Eliminar"}
        </button>
      </div>
    </div>
  );
};

export default PostCard;
