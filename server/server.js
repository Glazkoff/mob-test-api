const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

let obj = {
  message: "Привет от Никиты!",
};
let objError = {
  status: 404,
  message: "Такого пути не сущетсвует!",
};

app.get("/api/message", (req, res) => {
  res.send(obj);
});
app.get("/api/*", (req, res) => {
  res.send(obj);
});
app.listen(port, () =>
  console.log(`Сервер запущен на http://localhost:${port}`)
);
