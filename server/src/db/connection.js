import mongoose from 'mongoose';

function connectDB() {
  mongoose.connect(process.env.MONGODB_URL, {
  })
    .then(() => {
      console.log("Connected to DB");
    })
    .catch((err) => {
      console.log("Something went wrong", err);
    })
}

export default connectDB;