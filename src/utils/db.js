import mongoose from "mongoose";

const connect = () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then((conn) => {
      console.log("Connected to MongoDB");
    })
    .catch((err) => {
      console.log(err);
      process.exit(1);
    });
};

export default connect;
