import mongoose from "mongoose";


const docHospitalHours = new mongoose.Schema({
    doctor:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Doctor",
        required: true,
    },
    hospital: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospital", 
        required: true,
      },

      dayOfWeek:{
        type:String,
        required: true,
        enum: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      },
      startTime:{
        type: String,
        required:true,
      },
      endTime:{
        type: String,
        required:true,
      },
      shiftType:{
        type: String, 
        default: "General",
      }
})



const doctorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    salary: {
      type: String,
      required: true,
    },
    qualification: {
      type: String,
      required: true,
    },
    experienceInYears: {
      type: Number,
      default: 0,
    },

    worksInHospitals: [
      {
        type: [docHospitalHours],
      },
    ],

  },
  { timestamps: true }
);

export const Doctor = mongoose.model("Doctor", doctorSchema);
