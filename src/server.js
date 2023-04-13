const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();

const PORT = process.env.PORT || 3000;
const indexPath = path.resolve(
  __dirname,
  "index.html"
);

// static resources should just be served as they are
app.get(
  "*.*",
  express.static(path.resolve(__dirname, "*"))
);

// here we replace the tags in the index.html page and send them
app.all("*", function (req, res) {
  fs.readFile(indexPath, "utf8", (err, htmlData) => {
    if (err) {
      console.error("Error during file reading", err);
      return res.status(404).end();
    }
    // get post info
    const post = {
      title: "testTitle",
      description: "testDescription",
    };
    // inject meta tags
    htmlData = htmlData
      .replace("__META_OG_TITLE__", post.title)
      .replace("__META_OG_DESCRIPTION__", post.description);
    return res.send(htmlData);
  });
  //test
});
// listening...
app.listen(PORT, (error) => {
  if (error) {
    return console.log("Error during app startup", error);
  }
  console.log("listening on " + PORT + "...");
});
