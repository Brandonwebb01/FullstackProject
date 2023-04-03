const express = require("express");
const CategoryController = require("./controllers/CategoryController");
//const ItemsController = require("./controllers/ItemsController");

const router = express.Router();

router.get('/entries', CategoryController.index);
router.post('/entries', CategoryController.store);
router.patch('/entries/:entry', CategoryController.update);
router.delete('/entries/:entry', CategoryController.destroy);

// router.get('/items', ItemsController.index);
// router.post('/items', ItemsController.store);
// router.patch('/items/:entry', ItemsController.update);
// router.delete('/items/:entry', ItemsController.destroy);

module.exports = router;
