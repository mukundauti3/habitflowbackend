require("dotenv").config();
const express = require("express");
const cors = require("cors");

const sequelize = require("./config/db");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/auth", require("./routes/authRoutes"));
app.use("/habits", require("./routes/habitRoutes"));

app.get("/", (req, res) => {
  res.send("API Running PRO");
});

// ✅ START SERVER ONLY AFTER DB CONNECT
sequelize.authenticate()
  .then(() => {
    console.log("✅ DB Connected");

    return sequelize.sync();
  })
  .then(() => {
    app.listen(5000, "0.0.0.0", () => {
      console.log("🚀 Server running on port 5000");
    });
  })
  .catch((err) => {
    console.error("❌ DB ERROR:", err);
  });