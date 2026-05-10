import { Post } from "@/entities/post";
import { User } from "@/entities/user";
import path from "path";
import { DataSource } from "typeorm";

const DB_PATH = path.join(process.cwd(), "database.sqlite");

const globalForTypeorm = global as unknown as {
  dataSource: DataSource | undefined;
};

// export const AppDataSource =
//   globalForTypeorm.dataSource ??
//   new DataSource({
//     type: "better-sqlite3",
//     database: DB_PATH,
//     synchronize: true,
//     logging: false,
//     entities: [User, Post],
//   });

// if (process.env.NODE_ENV !== "production") {
//   globalForTypeorm.dataSource = AppDataSource;
// }

// export async function getDataSource(): Promise<DataSource> {
//   if (!AppDataSource.isInitialized) {
//     await AppDataSource.initialize();
//   }
//   return AppDataSource;
// }

function createDataSource() {
  return new DataSource({
    type: "better-sqlite3",
    database: DB_PATH,
    synchronize: true,
    logging: false,
    entities: [User, Post],
  });
}

export async function getDataSource(): Promise<DataSource> {
  if (!globalForTypeorm.dataSource) {
    globalForTypeorm.dataSource = createDataSource();
  }

  const dataSource = globalForTypeorm.dataSource;

  if (!dataSource.isInitialized) {
    await dataSource.initialize();
  }
  return dataSource;
}
