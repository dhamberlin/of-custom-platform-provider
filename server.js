const express = require('express');
const morgan = require('morgan');
const app = express();
app.use(morgan('dev'));
app.use(express.static(__dirname));
const PORT = 1337;
app.listen(PORT, () => console.log(PORT));