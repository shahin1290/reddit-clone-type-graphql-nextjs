import { _prod_ } from "./constants";
import { Post } from "./entities/Post";
import { MikroORM } from "@mikro-orm/core";
import path from "path";

export default {
  migrations: {
    path: path.join(__dirname, "./migrations"), // path to the folder with migrations
    glob: "!(*.d).{js,ts}",
  },
  entities: [Post],
  user: "postgres",
  password: process.env.SQL_PASSWORD,
  dbName: "lireddit",
  type: "postgresql",
  debug: !_prod_,
  allowGlobalContext: true,
} as Parameters<typeof MikroORM.init>[0];
