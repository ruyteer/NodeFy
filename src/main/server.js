const express = require("express");
const dataBase = require("./database/db");
const cors = require("cors");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());

const uploadRoutes = require("./routes/uploadRoutes.js");
const userRoutes = require("./routes/userRoutes");
app.use(uploadRoutes);
app.use(userRoutes);

app.listen(3000);
