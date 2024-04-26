const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const db = require("./db");
const morgan = require("morgan");
const router = require("./routes");

app.use(morgan("dev"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);


app.get("/", (req, res) => {
    res.send("Hello World!");
})



app.listen(7000, () => {
    db();
    console.log("Server started on port 3000");
})