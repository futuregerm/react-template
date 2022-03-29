const express = require("express");
const app = express();
app.use("/", require("./routes"));

// Use server build if in production
if (process.env.NODE_ENV === "production") {
  // Set the statics folder
  app.use(express.static("frontend/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`express is listening on port: ${port}`);
});
