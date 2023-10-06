const express = require("express");
// const bodyParser = require("body-parser");
const cors = require("cors");

const db = require("./db");

const app = express();
const productRouter = require('./routes/productRouter');

var corsOptions = {
  origin: "http://localhost:3000"
}

app.use(cors(corsOptions));

db
  .once('open', () => console.log('Connected'))
  .on('error', console.error.bind(console, 'MongoDB connection error'));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to Food Ordering" });
});

const PORT = process.env.PORT || 8087;
app.listen(PORT, () => { console.log(`Server is running on port ${PORT}`)});

app.use('/api/', productRouter);