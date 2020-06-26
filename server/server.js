const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

let obj = {
  message: "Привет от Никиты!",
};
app.get("/api/message", (req, res) => {
  res.send(obj);
});

app.listen(port, () =>
  console.log(`Сервер запущен на http://localhost:${port}`)
);
