const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const PostSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  tags: [String],
  comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
  likes: { type: Number, default: 0 },
  ratings: [{ type: Schema.Types.ObjectId, ref: 'Rating' }],
  isDeleted: { type: Boolean, default: false },
}, {
  timestamps: true // createdAt ve updatedAt otomatik gelir
});

module.exports = mongoose.model('Post', PostSchema);