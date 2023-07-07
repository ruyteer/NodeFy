const Files = require("../domain/entities/Files");

module.exports = class fileRepo {
  static async getUserFile(id) {
    return Files.find({ user: id });
  }
};
