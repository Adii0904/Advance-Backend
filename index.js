import express from "express";
import dotenv from "dotenv";

dotenv.config();

// acquring the port Number
const port = process.env.PORT || 8000;

const app = express();

app.get("/", (req, res) => {
  res.status(200).json({
    ok: true,
    message: "hello from docker baby",
  });
});

// staring the server;

app.listen(port, () => {
  console.log("server is running perfectly");
});
