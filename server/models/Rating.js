const mongoose = require('mongoose')

const Schema = mongoose.Schema

const RatingSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    post: { type: Schema.Types.ObjectId, ref: 'Post' },
    score: {type: Number, required: true}
},{
  timestamps: true 
})

module.exports = mongoose.model('Rating', RatingSchema);