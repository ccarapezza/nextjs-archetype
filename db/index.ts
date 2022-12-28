import { Sequelize } from "sequelize-typescript";
import config from "./config/config.json";
import { Post } from "./models/Post";
import { Account } from "./models/Account";
import { Session } from "./models/Session";
import { User } from "./models/User";
import { VerificationToken } from "./models/VerificationToken";

const env = process.env.NODE_ENV || 'development';

const sequelizeInstace = new Sequelize(config[env].database, config[env].username, config[env].password!, {dialect: "mysql"});

sequelizeInstace.addModels([
  User,
  Account,
  Session,
  VerificationToken,
  Post,
]);

export {
  User,
  Account,
  Session,
  VerificationToken,
  Post,
}

export const initDb = async() => {
  console.info("Authenticating to database...");
  await sequelizeInstace.authenticate();
  console.info("Database authenticated!");
}

export { sequelizeInstace }