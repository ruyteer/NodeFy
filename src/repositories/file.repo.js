const Files = require("../domain/entities/Files");

module.exports = class fileRepo {
  static async getUserFile() {
    return Files.find();
  }
};
