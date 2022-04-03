const express = require("express");
const app = express();
const path = require("path");
const request = require("request");

app.use(express.static("public"));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/search", (req, res) => {
  res.render("search");
});

app.get("/results", (req, res) => {
  let query = req.query.search;
  let API_URL = `https://api.themoviedb.org/3/movie/550?api_key=cc7865530fd3f81090af95c598709e32&query=${query}`;
  request(API_URL, (err, res, body) => {
    if (err) console.log(err);
    let data = JSON.parse(body);
    res.render(data);
  });
});

app.listen(3000, console.log("Server is running"));
