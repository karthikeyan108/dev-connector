const express = require("express");
const connectDB = require("./config/db");
const app = express();
//connect database
connectDB();

app.get("/", (req, res) => res.send("api running"));

//init middleware
app.use(express.json({ extended: false }));

//define routes

app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/post", require("./routes/api/post"));
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => "sever started on port 5000");
