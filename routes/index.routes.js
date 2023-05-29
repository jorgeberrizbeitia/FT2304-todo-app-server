const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

const todoRoutes = require("./todo.routes")
router.use("/todo", todoRoutes)

module.exports = router;
