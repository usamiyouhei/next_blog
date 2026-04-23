"use server";

import { User } from "@/entities/user";
import { getDataSource } from "./db";
import bcrypt from "bcrypt";
import { generateToken } from "./jwt";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function signup(
  _prevState: { error: string } | null,
  formData: FormData,
): Promise<{ error: string } | null> {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  if (!name || !email || !password) {
    return { error: "すべての項目を入力してください" };
  }
  if (password.length < 6) {
    return { error: "パスワードは６文字以上で入力してください" };
  }

  const ds = await getDataSource();
  const userRepo = ds.getRepository(User);

  const existing = await userRepo.findOne({ where: { email } });
  if (existing) {
    return {
      error: "このメールアドレスで登録しているユーザーがすでに存在します。",
    };
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = userRepo.create({ name, email, password: hashedPassword });
  await userRepo.save(user);
  console.log(user);

  const token = generateToken({ id: user.id, name: user.name });
  const cookiesStore = await cookies();
  cookiesStore.set("token", token, {
    httpOnly: true,
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });
  redirect("/");
}

export async function signin(
  _prevState: { error: string } | null,
  formData: FormData,
): Promise<{ error: string }> {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  if (!email || !password) {
    return { error: "メールアドレスとパスワードを入力してください" };
  }

  const ds = await getDataSource();
  const userRepo = ds.getRepository(User);
  const user = await userRepo.findOne({ where: { email } });

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return { error: "メールアドレスとパスワードを入力してください" };
  }
  console.log(user);

  const token = generateToken({ id: user.id, name: user.name });
  const cookieStore = await cookies();
  cookieStore.set("token", token, {
    httpOnly: true,
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });
  redirect("/");
}
