//romis server file
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const path = require('path');
const connectDB = require('./backend/config/db');
const ErrorResponse = require('./backend/utils/errorResponse');

//connectDB
connectDB();

const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());

//routes
app.use('/api', require('./backend/routes/authRouter'));
app.use('/api', require('./backend/routes/categoryRouter'));
app.use('/api', require('./backend/routes/productRouter'));


//on production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/frontend-web/build')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend-web', 'build', 'index.html'));
  });
} else {
  // on development
  app.get('/', (req, res) => {
    res.send('Romis Api running');
  });
}

app.all('*', (req, res, next) => {
  next(new ErrorResponse(`Can't find ${req.originalUrl} on this server!`, 404));
});


const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () =>
  console.log(`Msb shop Server running on port http://localhost:${PORT}`)
);

//handle server crash error
process.on('unhandleRejection', (err, promise) => {
  console.log(`Logged Error:${err}`);
  server.close(() => process.exit(1));
});
