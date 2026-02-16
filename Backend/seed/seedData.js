const Incident = require("../models/Incident");

const seedData = async () => {
  const count = await Incident.countDocuments();

  if (count === 0) {
    const incidents = Array.from({ length: 200 }).map((_, i) => ({
      title: `Incident ${i + 1}`,
      service: ["Payments", "Orders", "Auth"][i % 3],
      severity: ["SEV1", "SEV2", "SEV3", "SEV4"][i % 4],
      status: "OPEN",
      summary: "Auto generated incident"
    }));

    await Incident.insertMany(incidents);
    console.log("Seeded 200 incidents");
  }
};

module.exports = seedData;
