import { Post } from "@/entities/post";
import { getDataSource } from "./db";

export async function getPosts(options: { page?: number; limit?: number }) {
  const { page = 1, limit = 2 } = options;
  const ds = await getDataSource();
  const postRepo = ds.getRepository(Post);

  const [posts, total] = await postRepo.findAndCount({
    relations: ["user"],
    order: { createdAt: "DESC" },
    skip: (page - 1) * limit,
    take: limit,
  });

  return { posts, total, page, totalPages: Math.ceil(total / limit) };
}
