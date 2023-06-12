"use server";
import connectDB from "@/database/mongoDB";
import Post from "@/models/postModel";
import { revalidatePath } from "next/cache";

connectDB();

export const getAllPosts = async (searchParams) => {
  const search = searchParams.search || "";
  const sort = searchParams.sort || "createdAt";

  const limit = searchParams.limit * 1 || 4;
  const page = searchParams.page * 1 || 1;
  const skip = searchParams.skip * 1 || limit * (page - 1);

  try {
    const posts = await Post.find({ title: { $regex: search } })
      .sort(sort)
      .limit(limit)
      .skip(skip);

    // if (posts) throw new Error("Ha ocurrido un error!");

    const count = await Post.find({ title: { $regex: search } }).count();
    const totalPage = Math.ceil(count / limit);

    const newData = posts.map((post) => ({
      ...post._doc,
      _id: post._doc._id.toString(),
    }));
    return { posts: newData, count, totalPage };
  } catch (error) {
    throw new Error(
      error.message || "No hemos podido traer la lista de imágenes"
    );
  }
};

export const getOnePost = async (id) => {
  try {
    const post = await Post.findById(id);

    return { ...post._doc, _id: post._doc._id.toString() };
  } catch (error) {
    throw new Error(error.message || "No hemos podido traer la imagen");
  }
};

export const createPost = async (data) => {
  try {
    const newPost = new Post(data);
    newPost.save();
    revalidatePath("/");
    return { ...newPost._doc, _id: newPost._id.toString() };
  } catch (error) {
    throw new Error(error.message || "Ha fallado la subida de imagen");
  }
};

export const updatePost = async ({ title, image, id }) => {
  try {
    const post = await Post.findByIdAndUpdate(
      id,
      { title, image },
      { new: true }
    );

    revalidatePath("/");
    return { ...post._doc, _id: post._id.toString() };
  } catch (error) {
    throw new Error(
      error.message || "Ha fallado la actualización de la imagen"
    );
  }
};

export const deletePost = async (id) => {
  try {
    const post = await Post.findByIdAndDelete(id, { new: true });

    revalidatePath("/");
    return { ...post._doc, _id: post._id.toString() };
  } catch (error) {
    throw new Error(error.message || "Ha fallado la eliminación de la imagen");
  }
};
