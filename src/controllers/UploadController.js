const Files = require("../domain/entities/Files");
const userCases = require("../domain/useCases/userCases");
const getToken = require("../services/middleware/getToken");

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

    const decoded = await getToken(req);

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
    const files = await Files.find();

    res.json({
      files: files,
    });
  }
};
