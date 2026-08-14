import dotenv from "dotenv";
import app from "./app.js";
import connectDB from "./db/index.js";

// If index.js file is restructured later this will help to find where .env file is
dotenv.config({
  path: "./.env",
});

const port = process.env.PORT || 3000;

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Example app listening on port http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB connection error", err);
  });
