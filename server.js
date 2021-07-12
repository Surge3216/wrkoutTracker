const express = require("express");
const morgan = require('morgan');
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// routes
require("./routes/api-routes")(app);
require("./routes/html-routes")(app);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});


app.listen(PORT, () => {
  console.log(`App running on port http://localhost:${PORT}`);
});