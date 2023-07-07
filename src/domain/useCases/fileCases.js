const fileRepo = require("../../repositories/file.repo");

module.exports = class fileCases {
  static async getUserFile(id) {
    if (!id) {
      throw new Error("O id não foi encontrado");
    }

    return fileRepo.getUserFile(id);
  }
};
