import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

// Connect to MongoDB using Mongoose
export const connectToDatabase = async () => {
  const remoteDB = 'mongodb+srv://fahadashraf9612:JN2FfuxlLjogDnfG@cluster0.v5nfpvl.mongodb.net/liviin_db?retryWrites=true&w=majority&appName=Cluster0';

  try {
    await mongoose.connect(remoteDB || 'mongodb://localhost:27017/liviin_db');
    console.log('Successfully connected to MongoDB!');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};
