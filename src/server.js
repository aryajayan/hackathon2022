const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();

const PORT = process.env.PORT || 3000;
const indexPath = path.resolve(
  __dirname,
  "..",
  "src",
  "dist",
  "hackathon-http2",
  "index.html"
);

// static resources should just be served as they are
// app.use(
//   express.static(
//     path.resolve(__dirname, "..", "src", "dist", "hackathon-http2"),
//     {
//       maxAge: "30d",
//     }
//   )
// );
// here we serve the index.html page
app.get("*", (req, res) => {
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
});
// listening...
app.listen(PORT, (error) => {
  if (error) {
    return console.log("Error during app startup", error);
  }
  console.log("listening on " + PORT + "...");
});
