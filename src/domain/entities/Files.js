const mongoose = require("mongoose");
const { Schema } = mongoose;

const Files = mongoose.model(
  "Files",
  new Schema(
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
      },
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
