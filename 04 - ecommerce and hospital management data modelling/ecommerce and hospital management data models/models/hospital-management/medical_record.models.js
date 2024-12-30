import mongoose from "mongoose";

const medicalSchema = new mongoose.Schema(
  {
    patient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Patient",
      required: true,
    },
    doctor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Doctor",
      required: true,
    },
    diagnosis: {
      type: String,
      required: true,
    },
    medications: [
      {
        name: {
          type: String,
          required: true,
        },
        dosage: {
          type: String,
          required: true,
        },
        frequency: {
          type: String,
          required: true,
        },
      },
    ],
    treatmentPlan: {
      type: String,
      required: true,
    },
    visitDate: {
      type: Date,
      default: Date.now,
      required: true,
    },
    followUpDate: {
      type: Date,
    },
  },
  { timestamps: true }
);

export const Medical = mongoose.model("Medical", medicalSchema);
