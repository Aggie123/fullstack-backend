// /backend/data.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//data structure 
const userSchema = new Schema(
  {
    id: Number,
    name: String,
    age: Number,
  },
  { timestamps: true }
);

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.models.User || mongoose.model('User', userSchema);
// module.exports = mongoose.model("user", userSchema);