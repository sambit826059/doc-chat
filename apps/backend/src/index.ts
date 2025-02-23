import express from "express";

const PORT = process.env.PORT || 8080;

const app = express();

app.get("/", (req, res) => {
  res.send("Server is healthy");
});

app.post("/docs", (req, res) => {});

app.get("/docs", (req, res) => {});

app.get("/docs/:id", (req, res) => {});

app.delete("/docs/bulk", (req, res) => {});

app.delete("docs/:id", (req, res) => {});

// another http request to interact with the doc using ai

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
