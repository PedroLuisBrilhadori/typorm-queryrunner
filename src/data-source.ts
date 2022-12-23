import * as dotenv from "dotenv";
import { DataSource } from "typeorm";

dotenv.config();

const AppDataSource = new DataSource({
  type: "mssql",
  host: process.env.BD_HOST,
  port: Number(process.env.BD_PORT),
  username: process.env.BD_USER,
  password: process.env.BD_PASSWORD,
  database: process.env.BD_DATABASE,
  synchronize: true,
  logging: false,
  extra: {
    trustServerCertificate: true,
  },
});

export default AppDataSource;
