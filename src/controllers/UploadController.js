const Files = require("../domain/entities/Files");
const fileCases = require("../domain/useCases/fileCases");
const userCases = require("../domain/useCases/userCases");
const getDecoded = require("../services/middleware/getDecoded");

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

    const decoded = await getDecoded(req);

    try {
      const files = new Files({
        user: decoded._id,
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
    const decoded = await getDecoded(req);

    try {
      const files = await fileCases.getUserFile(decoded._id);

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
