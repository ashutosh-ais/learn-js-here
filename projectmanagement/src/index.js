import dotenv from "dotenv";
import app from "./app.js";

// If index.js file is restructured later this will help to find where .env file is
dotenv.config({
  path: "./.env",
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
