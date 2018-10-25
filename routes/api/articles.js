var router = require("express").Router();
var headlineController = require("../../controllers/headline");

router.get("/", articleController.findAll);
router.delete("/:id", articleController.delete);
router.put("/:id", articleController.update);

module.exports = router;
