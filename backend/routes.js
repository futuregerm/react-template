const router = require("express").Router();

var count = 0;

router.get("/contact-server", (req, res) => {
  count += 1;
  res.send(`server ping count: ${count}`);
});

module.exports = router;
