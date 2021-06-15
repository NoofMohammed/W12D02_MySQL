const express = require("express");
const app = express();
require("dotenv").config();
const {
  addNewBook,
  getalBooks,
  updatBookById,
  deleteBookById,
  descendingOrder,
  getallBooksPriceEmpty,
  getallBooksPrice,
} = require("./books");
const db = require("./db");

app.use(express.json());

app.post("/books", addNewBook);
app.get("/books", getalBooks);
app.put("/books/:book_id", updatBookById);
app.delete("/books/:book_id", deleteBookById);
app.get("/books_no_price", getallBooksPriceEmpty);
app.get("/books_have_price", getallBooksPrice);
app.get("/books/:order",descendingOrder);
const port = 3000;

app.listen(port, () => {
  console.log("SERVER IS WORKING ON http://localhost:" + port);
});
