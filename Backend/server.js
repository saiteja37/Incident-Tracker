require("dotenv").config();
const dns = require("dns"); 
dns.setServers(["1.1.1.1", "8.8.8.8"])
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const seedData = require("./seed/seedData");

const app = express();

app.use(cors());
app.use(express.json());

connectDB().then(() => {
  seedData(); 
});

// Routes
app.use("/api/incidents", require("./routes/incidentRoutes"));

app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);
