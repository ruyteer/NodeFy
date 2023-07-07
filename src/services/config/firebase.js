const admin = require("firebase-admin");

const serviceAccount = require("../../main/database/firebasekey.json");

const BUCKET = "nodefy-app.appspot.com";

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: BUCKET,
});

const bucket = admin.storage().bucket();

const uploadFile = (req, res, next) => {
  if (!req.file) {
    res.status(404).json({
      msg: "Você precisa enviar um arquivo",
    });
    return;
  }

  const file = req.file;

  const fileName = Date.now() + "." + file.originalname;

  const newFile = bucket.file(fileName);

  const stream = newFile.createWriteStream({
    metadata: {
      contentType: file.mimetype,
    },
  });

  stream.on("error", (e) => {
    console.error(e);
  });

  stream.on("finish", async () => {
    await newFile.makePublic();

    const signedUrl = await newFile.getSignedUrl({
      action: "read",
      expires: "03-01-2500",
    });

    req.file.firebaseUrl = signedUrl[0];

    next();
  });

  stream.end(file.buffer);
};

module.exports = uploadFile;
