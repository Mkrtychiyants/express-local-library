var mongoose = require ('mongoose');
var Schema = mongoose.Schema;
var GenreSchema = Schema({
    name : {type: String, required: true, min:3, max: 100},
    //genre: {type: String, required: true, enum: ['fiction','non-fiction', 'romance', 'military', 'history']}
});

GenreSchema.virtual('url').get(function(){return  '/catalog/genre/' + this._id;});

module.exports = mongoose.model('Genre',GenreSchema);