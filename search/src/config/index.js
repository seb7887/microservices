const DB_URI =
  process.env.MONGO_URI || "mongodb://localhost:27017/microservices";

module.exports = { DB_URI };