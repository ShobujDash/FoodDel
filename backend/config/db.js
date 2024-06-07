import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://shobujd6:11223344@cluster0.qxifitj.mongodb.net/food-del"
    )
    .then(() => console.log("BD Connected"));
};
