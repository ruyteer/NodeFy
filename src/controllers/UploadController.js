const Files = require("../domain/entities/Files");

module.exports = class UploadController {
  static async upload(req, res) {
    const file = req.file;
    const { name } = req.body;

    if (!name) {
      res.status(422).json({
        msg: "Preencha todos os campos",
      });
      return;
    }

    try {
      const files = new Files({
        fileName: name,
        fileUrl: file.firebaseUrl,
      });

      await files.save();

      res.json(file.firebaseUrl);
    } catch (err) {
      res.status(500).json({
        error: err.message,
      });
      return;
    }
  }

  static async getFiles(req, res) {
    try {
      const files = await Files.find();

      res.json({
        files: files,
      });
    } catch (err) {
      res.status(500).json({
        error: err.message,
      });
      return;
    }
  }
};
