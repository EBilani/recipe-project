let mongoose = require('mongoose');
const Schema=mongoose.Schema;
let CategorySchema = new mongoose.Schema({
    'name': {type: String, required:true},
    'description': {type: String, required:true},
    'recipes': [{ type: Schema.Types.ObjectId, ref:'recipes' }],
});

let category = mongoose.model('category', CategorySchema);

module.exports = category;