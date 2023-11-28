const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.NODE_ENV || 3333;
const is_prod = process.env.NODE_ENV === 'production';

const db = require('./config/connection');

const routes = require('./routes');

// Open channel for JSON to be sent from the client
app.use(express.json());

// Serve up static assets
app.use('/images', express.static(path.join(__dirname, '../client/public/images')))

// Open cookie middleware channel so we can view cookies on the request object
app.use(cookieParser());

app.use(routes);

// Trigger React router to handle all routing outside of our auth/api routes
if (is_prod) {
  app.use(express.static(path.join(__dirname, '../client/dist')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'));
  });
}

db.once('open', () => {
  console.log('DB Connection Established!')

  app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
});
