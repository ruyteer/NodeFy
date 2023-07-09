const mongoose = require("mongoose");
const { Schema } = mongoose;

const Files = mongoose.model(
  "Files",
  new Schema(
    {
      fileName: {
        type: String,
      },
      fileUrl: {
        type: String,
      },
    },
    { timestamps: true }
  )
);

module.exports = Files;
