// /backend/data.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//connected to database
// var db = mongoose.connect('mongodb://localhost/chihuo');//；连接数据库

//data structure 
const UserSchema = new Schema(
  {
    id: Number,
    name: String,
    age: Number,
  },
  { timestamps: true }
);

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("User", UserSchema);