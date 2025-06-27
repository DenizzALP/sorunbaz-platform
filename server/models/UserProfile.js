const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserProfileSchema = new Schema ({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    posts: [{ type: Schema.Types.ObjectId, ref: 'Post' }],
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
    totalLikes: {type: Number},
    totalRatings: {type: Number}
},{
  timestamps: true 
})

module.exports = mongoose.model('UserProfile', UserProfileSchema)