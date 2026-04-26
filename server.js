require("dotenv").config();

const express = require("express");
const cors = require("cors");
const path = require("path");

const db = require("./db");
const sequelize = require("./config/db");

const app = express();

// ✅ Middleware
app.use(cors({
  origin: "*", // you can restrict later
}));
app.use(express.json());

// ✅ Routes
app.use("/auth", require("./routes/authRoutes"));
app.use("/habits", require("./routes/habitRoutes"));

// ✅ Health Check
app.get("/", (req, res) => {
  res.send("API Running PRO 🚀");
});

// ✅ DB Check (optional)
db.query("SELECT 1")
  .then(() => console.log("✅ DB Connected Successfully"))
  .catch(err => console.error("❌ DB Error:", err));

// ✅ Serve Frontend (if deployed together)
app.use(express.static(path.join(__dirname, "frontend")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "index.html"));
});

// ✅ Start Server
const PORT = process.env.PORT || 5000;

sequelize.sync()
  .then(() => {
    app.listen(PORT, "0.0.0.0", () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error("❌ Sequelize Error:", err);
  });