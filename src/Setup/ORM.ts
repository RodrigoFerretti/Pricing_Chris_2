import { Sequelize } from 'sequelize';

require(`dotenv`).config()

const sequelize = new Sequelize(
    `mysql://${process.env.db_user}:${process.env.db_password}@${process.env.db_host}:${process.env.db_port}/${process.env.db_schema}`
)

sequelize.authenticate().then(
  () => {
    console.log(`Database connection OK!`);
  }
).catch(
  (error) => {
    console.log(`Database connection ERROR! ${error}`);
  }
)
