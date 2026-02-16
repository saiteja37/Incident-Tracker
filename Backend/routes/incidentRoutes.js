const express = require("express");
const router = express.Router();
const Incident = require("../models/Incident");

router.post("/", async (req, res) => {
  try {
    const incident = await Incident.create(req.body);
    res.status(201).json(incident);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});


router.get("/", async (req, res) => {
  try {
    let {
      page = 1,
      limit = 10,
      severity,
      status,
      service,
      search,
      sortBy = "createdAt",
      order = "desc"
    } = req.query;

    page = parseInt(page);
    limit = parseInt(limit);

    const query = {};

    if (severity) query.severity = severity;
    if (status) query.status = status;
    if (service) query.service = service;

    if (search) {
      query.title = { $regex: search, $options: "i" };
    }

    const sortOrder = order === "asc" ? 1 : -1;

    const incidents = await Incident.find(query)
      .sort({ [sortBy]: sortOrder })
      .skip((page - 1) * limit)
      .limit(limit);

    const total = await Incident.countDocuments(query);

    res.json({
      page,
      totalPages: Math.ceil(total / limit),
      totalRecords: total,
      data: incidents
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});



router.get("/:id", async (req, res) => {
  const incident = await Incident.findById(req.params.id);
  if (!incident) return res.status(404).json({ msg: "Not Found" });
  res.json(incident);
});


router.patch("/:id", async (req, res) => {
  const updated = await Incident.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true, runValidators: true }
  );

  res.json(updated);
});

router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Incident.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.status(404).json({ message: "Incident not found" });
    }

    res.json({ message: "Incident deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;