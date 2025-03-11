import express from "express";
import axios from "axios";
const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com";

app.use(express.static("public"));
app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.listen(port, () => {
  console.log("App started listening on Port" + port);
});

// 5. Use axios to get a random secret and pass it to index.ejs to display the
// secret and the username of the secret.
