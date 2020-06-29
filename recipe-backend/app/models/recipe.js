let mongoose = require('mongoose');
const Schema=mongoose.Schema;
let fileSchema = new mongoose.Schema({
    'name': {type: String, required:true},
    'description': {type: String, required:true},
    'image': { type: String, required:true},
    'cat_name':{ type: String, required:true},
    'ingrediends':{ type: String, required:true},
    
});
fileSchema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

let recipe = mongoose.model('recipe', fileSchema);

module.exports = recipe;