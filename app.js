const express = require("express");

const app = express();

/* app.use((req, res, next) => {
  console.log("This is the first middleware");
  next();
});

app.use((req, res, next) => {
  console.log("This is the second middleware");
  res.send("<h1>Hello to the assignment!</h1>");
}); */

app.use("/users", (req, res, next) => {
  res.send("<h1>Users page!</h1>");
});

app.use("/", (req, res, next) => {
  res.send("<h1>Home page!</h1>");
});

app.listen(3000);
