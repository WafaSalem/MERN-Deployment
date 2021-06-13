const mongoose = require("mongoose");
const PetsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "{PATH} is required"],
      minlength: [3, "{PATH} must be at least {MINLENGTH}"],
      unique: [true,"{PATH}  Must be Unique"]
    },
    type: {
      type: String,
      required: [true, "{PATH} is required"],
      minlength: [3, "{PATH} must be at least {MINLENGTH}"],
    },
    desc: {
      type: String,
      required: [true, "{PATH} is required"],
      minlength: [3, "{PATH} must be at least {MINLENGTH}"],
    },
    skill1: {
      type: String,
      default: 'Nothing'
    },
    skill2: {
      type: String,
      default: 'Nothing'
    },
    skill3: {
      type: String,
      default: 'Nothing'
    },
    likes:{
      type:Number,
      default:0
    }
  },
  { timestamps: true }
);


module.exports.Pets = mongoose.model("Pets", PetsSchema)