const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema({
  name: String,
  password: String,
  gender: String
}, { versionKey: false });

userSchema.pre('save', function(next) {

  next();
});

let user_schema = mongoose.model('User', userSchema);

module.exports = user_schema;








