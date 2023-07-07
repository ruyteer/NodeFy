const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

async function main() {
  await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("MongoDB connected");
}

main().catch((e) => {
  console.log(e);
});

module.exports = mongoose;
