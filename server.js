const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose.set("strictQuery", true);

const app = require("./index");

mongoose
  .connect(
    "mongodb+srv://viktor_hrimli:haobanjia@cluster0.kcc9uch.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("DB connected!");
    app.listen(5000, () => {
      console.log("Server run on 5000 port!");
    });
  })
  .catch((err) => {
    console.log(err.message);
    process.exit(1);
  });
