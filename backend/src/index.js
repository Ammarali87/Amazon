import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import express from 'express';

dotenv.config();

const app = express();

// Configure MongoDB connection URL
const MONGO_URL = process.env.MONGO_URL || "mongodb://localhost:27017/your_database_name";

// Mongoose settings
mongoose.set("strictQuery", true);
mongoose.connect(MONGO_URL)
  .then(() => {
    console.log("Connected to MongoDB successfully");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error.message);
  });


  app.use("/api/products", productRouter);

// Configure CORS
app.use(cors({
  credentials: true,
  origin: 'http://localhost:5173', // Replace with your actual frontend URL if needed
}));

// Your other middleware and routes would go here

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});


