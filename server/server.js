const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.NODE_ENV || 3333;
const db = require('./config/connection');

const routes = require('./routes');

app.use(express.json());

app.use(cookieParser());

app.use(routes);

db.once('open', () => {
  console.log('DB Connection Established!')

  app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
});
