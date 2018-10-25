var router = require("express").Router();
var fetchRoutes = require("./fetch");
var noteRoutes = require("./comments");
var headlineRoutes = require("./articles");
var clearRoutes = require("./clear");

router.use("/fetch", fetchRoutes);
router.use("/comments", commentRoutes);
router.use("/articles", headlineRoutes);
router.use("/clear", clearRoutes);

module.exports = router;
