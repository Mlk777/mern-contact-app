const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');

const PORT = process.env.PORT || 5000;

dotenv.config({ path: './config.env' });

const app = express();
connectDB();

app.use(express.json(), cors());
app.use('/api/auth', require('./routes/auth'));
app.use('/api/users', require('./routes/users'));
app.use('/api/contacts', require('./routes/contacts'));

// Server static assets in production
if (process.env.NODE_ENV === 'PRODUCTION') {
  //Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(PORT, console.log(`Server up and running on port ${PORT}`));

process.on('SIGINT', () => {
  console.log('Bye bye!');
  process.exit();
});

process.on('SIGTERM', () => {
  console.log('app terminated!');
  process.exit();
});
