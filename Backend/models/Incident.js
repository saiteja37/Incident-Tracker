const mongoose = require("mongoose");

const IncidentSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
    trim: true,
    maxlength: 200
  },

  service: {
    type: String,
    required: true,
    index: true
  },

  severity: {
    type: String,
    enum: ["SEV1", "SEV2", "SEV3", "SEV4"],
    required: true,
    index: true
  },

  status: {
    type: String,
    enum: ["OPEN", "MITIGATED", "RESOLVED"],
    default: "OPEN",
    index: true
  },

  owner: {
    type: String,
    default: null
  },

  summary: {
    type: String,
    default: ""
  }

}, { timestamps: true });

// Compound index (important for filtering performance)
IncidentSchema.index({ severity: 1, status: 1, createdAt: -1 });

module.exports = mongoose.model("Incident", IncidentSchema);
