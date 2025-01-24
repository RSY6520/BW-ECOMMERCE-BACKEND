const { configDotenv } = require("dotenv");
const { Sequelize } = require("sequelize");
configDotenv();
const ENV = process.env;
const connectionString = `postgres://${ENV.DB_USER}:${ENV.DB_PASSWORD}@${ENV.DB_HOST}:${ENV.DB_PORT}/${ENV.DB_NAME}`;

console.log(`connection string: ${connectionString}`);

// const sequelize = new Sequelize(
//     connectionString,
//     {
//         logging: false
//     }
// );

const sequelize = new Sequelize(
    ENV.RENDER_POSTGRES_URL,
    {
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true, // Render requires SSL for external connections
        rejectUnauthorized: false, // Allow self-signed certificates
      },
    },
    logging: false, // Disable logging for cleaner output (optional)
  });

sequelize.authenticate().then(() => {
    console.log("Connection has been established successfully!");    
})
.catch((error) => {
    console.log("Unable to connect to the database: ", error);    
});

module.exports.sequelize = sequelize;
