import mongoose from "mongoose";

export const connectDB = async (req, res) => {
  const db =
    "mongodb://arunsug21cs:I91EDt4TvcMyWaG@arunsug21cs/?ssl=true&replicaSet=atlas-aubsi4-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0";

  const { connection } = await mongoose.connect(db, { useNewUrlParser: true });

  console.log(`MongoDB Connected to ${connection.host}`);
};
