import dotenv from "dotenv";

// If index.js file is restructured later this will help to find where .env file is
dotenv.config({
  path: "./.env",
});

const myusername = process.env.username;

console.log("welcome string :: hello", myusername);
