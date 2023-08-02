const mongoose = require("mongoose");
const DB =
  "mongodb+srv://sharmashreya00070:xp47YjSBNSh2VfWA@cluster0.e0d7adz.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connection start"))
  .catch((error) => console.log(error.message));
