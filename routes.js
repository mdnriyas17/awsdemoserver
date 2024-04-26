const express = require('express');

const router = express.Router();

const { createUser, getAllUsers } = require('./usercontoller');

router

.get('/users', getAllUsers)
.post('/createusers', createUser)

module.exports = router