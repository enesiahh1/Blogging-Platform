const express = require("express");
const bodyParser = require("body-parser");
const { sequelize } = require("./models");
require("dotenv").config();

const userRoutes = require("./routes/userRoutes");
const blogRoutes = require("./routes/blogRoutes");
const likeRoutes = require("./routes/likeRoutes");

const app = express();
app.use(bodyParser.json());

app.use("/users", userRoutes);
app.use("/blogs", blogRoutes);
app.use("/likes", likeRoutes);

const PORT = process.env.PORT || 3000;

sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
