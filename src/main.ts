import * as dotenv from "dotenv";
import { Table } from "typeorm/schema-builder/table/Table";
import AppDataSource from "./data-source";
import { QueryRunner, SimpleConsoleLogger } from "typeorm";
import { Repository } from "typeorm/repository/Repository";

dotenv.config();

const table = new Table({
  name: "testeaaaa",
});

class Service {
  constructor(private runner: QueryRunner, repo?: Repository<any>) {}

  mountTable() {}

  async createTable(table: Table) {
    if (!(await this.runner.hasTable(table))) {
      return this.runner.createTable(table);
    }
  }
}

async function main() {
  await AppDataSource.initialize().then(() => {
    console.log("[APP] Banco de dados iniciado!");
  });

  const runner = AppDataSource.createQueryRunner();
  const service = new Service(runner);

  service.createTable(table);
}

main();
