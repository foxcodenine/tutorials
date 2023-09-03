const express = require('express');

const controllers = require('./controllers.js');

// ---------------------------------------------------------------------

const router = express.Router();

// ---------------------------------------------------------------------


router.get('/', controllers.getIndex);

router.post('/task/add', controllers.postAddTask);

router.post('/task/delete', controllers.postDeleteTask);

router.post('/call/add', controllers.postAddCall);

// ---------------------------------------------------------------------

module.exports = router;