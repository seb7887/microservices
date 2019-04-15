const express = require("express");
const bodyParser = require("body-parser");
const fetch = require("node-fetch");

const Video = require("./models/videos");
const Book = require("./models/books");

const app = express();

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({ msg: "search" });
});

app.get("/api/v1/search", async (req, res) => {
  const videoPromise = Video.find({});
  const bookPromise = Book.find({});
  const promises = [videoPromise, bookPromise];
  const [videos, books] = await Promise.all(promises);

  res.json(videos.concat(books));
});

app.get("/api/v1/search/depends-on", async (req, res) => {
  try {
    const videoPromise = fetch("http://videos:3000/");
    const bookPromise = fetch("http://books:3000/");
    const promises = [videoPromise, bookPromise];
    const [videos, books] = await Promise.all(promises);
    const videoJson = await videos.json();
    const bookJson = await books.json();

    res.json({ video: videoJson, book: bookJson });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = app;
