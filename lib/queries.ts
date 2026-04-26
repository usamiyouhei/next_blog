import { Post } from "@/entities/post";
import { getDataSource } from "./db";

export async function getPosts() {
  const ds = await getDataSource();
  const postRepo = ds.getRepository(Post);

  const [posts, total] = await postRepo.findAndCount({
    relations: ["user"],
    order: { createdAt: "DESC" },
  });

  return { posts, total };
}
