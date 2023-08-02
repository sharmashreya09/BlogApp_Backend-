const mongoose = require("mongoose");

const PersonalSchema = new mongoose.Schema({
  Occupation: {
    type: String,
  },
  Skills: {
    type: [String]
  },
  DOB: {
    type: Date
    },
  Country: {
    type: String
  },
  Instagram: {
    type: String
  },
  Linkedin: {
    type: String
  },
  TwitterProfile: {
    type: String
  },
  user_email: 
  { type: String,
    required: true
 }

});

const PersonalInfo = mongoose.model("PersonalData", PersonalSchema);

module.exports = PersonalInfo;
