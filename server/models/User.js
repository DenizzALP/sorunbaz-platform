const mongoose = require('mongoose')
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;

const UserSchema = new Schema({ 
    userName: { type: String, required: true, unique: true },
    email:    { type: String, required: true, unique: true },
    password: { type: String, required: true },
    bio:      { type: String, default: '' },
    profileImage: { type: String, default: '' },
    role:     { type: String, enum: ['user', 'admin', 'banned'], default: 'user' }
    }, {
    timestamps: true
})

// Şifre hashleme 
UserSchema.pre('save', async function(next) {
  const user = this;

  if (!user.isModified('password')) return next(); // şifre değişmediyse geç

  try {
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    next();
  } catch (err) {
    next(err);
  }
});

// Şifre karşılaştırma metodu
UserSchema.methods.comparePassword = async function(candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

module.exports = mongoose.model('User', UserSchema);