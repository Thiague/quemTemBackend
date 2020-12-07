const express = require('express');

const app = express();
const port = 3333;
const router = require('./routes');

app.use('/', router);

app.listen(port);

