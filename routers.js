const express = require('express');
const router = express.Router();

const todosController = require('../controllers/todosController');

router.get('/', todosController.getAll);
router.post('/', todosController.create);
router.patch('/:id', todosController.toggle);

module.exports = router;
