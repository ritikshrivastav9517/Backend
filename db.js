// backend/db.js
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
   await mongoose.connect('mongodb+srv://ritikshrivastav2003:6KQkIAVvSdpw1Nwr@cluster0.vhsdzvx.mongodb.net', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('MongoDB connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
//mongodb+srv://ritikshrivastav2003:6KQkIAVvSdpw1Nwr@cluster0.vhsdzvx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0