const { Schema, model } = require('mongoose');

const usersSchema = new Schema({
    name:       { type: String },
    last_name:  { type: String },
    email:      { type: String },
    user_name:  { type: String }
});

users = model('users', usersSchema, 'users');

module.exports = users;