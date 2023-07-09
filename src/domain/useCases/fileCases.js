const fileRepo = require("../../repositories/file.repo");

module.exports = class fileCases {
  static async getUserFile() {
    return fileRepo.getUserFile();
  }
};
