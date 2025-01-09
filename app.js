require('dotenv').config();
require('express-async-errors');

const express = require('express');
const app = express();

const connectDB = require('./db/connect');
const productsRouter = require('./routes/products');

const notFoundMiddleware = require('./middleware/not-found');
const errorMiddleware = require('./middleware/error-handler');

// middleware
app.use(express.json());

// routes
app.get('/', (req, res) => {
  res.send('<h1>Store API</h1><a href="api/v1/products">products route</a>');
});

app.use('/api/v1/products', productsRouter);

// products route
app.use(errorMiddleware);
app.use(notFoundMiddleware);

const PORT = process.env.PORT || 3000;

const start = async () => {
  try {
    const response = await connectDB(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${response.connection.host}`);
    app.listen(PORT, console.log(`Server is running on port ${PORT}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
