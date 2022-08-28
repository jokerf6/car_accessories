import Sequelize from "sequelize";

const connection = new Sequelize({
  dialect: "mysql",
  host: "localhost",
  database: "car",
  username: "root",
  password: "",
  logging: false,
});
export { connection as default };
