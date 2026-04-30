import { Post } from "@/entities/post";
import { getDataSource } from "./db";
import { FindOptionsWhere } from "typeorm";
import { cookies } from "next/headers";
import { redirect } from "next/dist/server/api-utils";
import { verifyToken } from "./jwt";

export async function getPosts(options: {
  page?: number;
  limit?: number;
  isOwn?: boolean;
}) {
  const { page = 1, limit = 2, isOwn = false } = options;
  const ds = await getDataSource();
  const postRepo = ds.getRepository(Post);

  let where: FindOptionsWhere<Post> = { published: true };

  if (isOwn) {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;
    const user = verifyToken(token);
    if (!user) {
      redirect("/auth/signin");
    }

    where = { userId: user.id };
  }

  const [posts, total] = await postRepo.findAndCount({
    where,
    relations: ["user"],
    order: { createdAt: "DESC" },
    skip: (page - 1) * limit,
    take: limit,
  });

  return { posts, total, page, totalPages: Math.ceil(total / limit) };
}
