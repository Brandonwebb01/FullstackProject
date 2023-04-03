const express = require("express");
const CategoryController = require("./controllers/CategoryController");
const ItemsController = require("./controllers/ItemsController");

const router = express.Router();

router.get('/categories', CategoryController.index);
router.post('/categories', CategoryController.store);
router.patch('/categories/:entry', CategoryController.update);
router.delete('/categories/:entry', CategoryController.destroy);

router.get('/items', ItemsController.index);
router.post('/items', ItemsController.store);
router.patch('/items/:entry', ItemsController.update);
router.delete('/items/:entry', ItemsController.destroy);

module.exports = router;
