import DataType from "sequelize";
import { UUIDV4 } from "sequelize";

async function init(connection) {
  connection.define("User", {
    id: {
      type: DataType.UUID,
      primaryKey: true,
      defaultValue: UUIDV4(),
    },
    email: {
      type: DataType.STRING,
      allowNull: false,
    },
    password: {
      type: DataType.STRING,
      allowNull: false,
    },
    role: {
      type: DataType.ENUM("user", "admin"),
      allowNull: false,
      defaultValue: "user",
    },
  });
}
export { init };
