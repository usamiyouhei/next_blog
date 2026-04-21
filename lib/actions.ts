"use server";

import { User } from "@/entities/user";
import { getDataSource } from "./db";

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
  if (password.length > 6) {
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
}
