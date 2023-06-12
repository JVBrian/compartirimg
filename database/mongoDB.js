import mongoose from "mongoose";

const connectDB = () => {
  if (mongoose.connections[0].readyState) {
    console.log("La base de datos ha sido conectada.");
    return;
  }

  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("MongoDB conectado"))
    .catch((error) => console.log(error));
};

export default connectDB;
