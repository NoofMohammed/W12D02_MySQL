const connection = require("./db");
// Pulse Check
const addNewBook = (req, res) => {
  console.log(req.body, "99999");
  const { title, author, published_at, price } = req.body;

  const query = `INSERT INTO books (title, author, published_at, price) VALUES (?, ?, ?, ?)`;
  const data = [title, author, published_at, price];

  connection.query(query, data, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
};

const getalBooks = (req, res) => {
  const query = `SELECT * FROM books`;
  connection.query(query, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
};

//   Practice
// updatBookById

const updatBookById = (req, res) => {
  const id = req.params.book_id;
  const { title, author, published_at, price } = req.body;
  const data = [title, author, published_at, price];
  const query = `UPDATE books SET title=?, author=?, published_at=?, price=? WHERE id=${id}`;
  connection.query(query, data, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
};

const deleteBookById = (req, res) => {
  const id = req.params.book_id;
  const query = `DELETE FROM books WHERE id=${id}`;
  connection.query(query, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
};

const descendingOrder = (req, res) => {
  const order = req.params.order;
  const query = `SELECT * from books order by ${order} DESC`;
  connection.query(query, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
};

const getallBooksPriceEmpty = (req, res) => {
  const query = `SELECT * FROM books WHERE price is null`;
  connection.query(query, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
};

const getallBooksPrice = (req, res) => {
  const query = `SELECT * FROM books WHERE price is not null`;
  connection.query(query, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
};

module.exports = {
  addNewBook,
  getalBooks,
  updatBookById,
  deleteBookById,
  descendingOrder,
  getallBooksPriceEmpty,
  getallBooksPrice,
};
