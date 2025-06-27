const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BanLogSchema = new Schema ({
   user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
   admin: { type: Schema.Types.ObjectId, ref: 'User', required: true },
   reason: {type: String, required:true}
},{
  timestamps: true
})

module.exports = mongoose.model('BanLog', BanLogSchema)