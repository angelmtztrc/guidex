export default () => ({
  port: parseInt(process.env.PORT),
  database: {
    port: process.env.DATABASE_PORT,
    host: process.env.DATABASE_HOST,
    name: process.env.DATABASE_NAME,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
  },
});
