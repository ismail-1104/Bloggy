const mongoose = require("mongoose");

const uri =
  "mongodb+srv://ismail-1104:shaikh786@cluster0.tmbuea2.mongodb.net/bloggy?retryWrites=true&w=majority";

const connectDatabase = async () => {
  try {
    await mongoose.connect(
      uri,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
      (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("Database connected successfully.");
        }
      }
    );
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDatabase;
