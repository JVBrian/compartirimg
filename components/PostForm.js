"use client";
import React, { useRef } from "react";

import { createPost, updatePost } from "@/actions/postAction";
import ButtonSubmit from "./ButtonSubmit";
import { useMyContext } from "@/context/Provider";

const PostForm = () => {
  const formRef = useRef();
  const { editPost, setEditPost } = useMyContext();

  const handleSubmit = async (formData) => {
    const title = formData.get("title").toLowerCase();
    const image = formData.get("image");

    if (editPost) {
      await updatePost({ title, image, id: editPost._id });
    } else {
      await createPost({ title, image });
    }

    formRef.current.reset();
  };
  return (
    <form action={handleSubmit} ref={formRef} className="form form_upload">
      <div className="coolinput">
        <label htmlFor="name" className="text">
          Nombre:
        </label>
        <input
          type="text"
          name="title"
          placeholder="Título"
          required
          defaultValue={editPost?.title}
          className="text text_name"
        />
      </div>
      <div className="coolinput">
        <label htmlFor="url" className="text">
          URL:
        </label>
        <input
          type="text"
          name="image"
          placeholder="Imagen"
          required
          defaultValue={editPost?.image}
          className="text text_url"
        />
      </div>
      {editPost ? (
        <>
          <ButtonSubmit value="Actualizar" />
          <button type="button" onClick={() => setEditPost()} className="button-name upload">
            Cancelar
          </button>
        </>
      ) : (
        <ButtonSubmit value="Subir imagen" />
      )}
    </form>
  );
};

export default PostForm;
