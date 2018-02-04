const path = require("path");
var staticFolders = {
    views: path.join(__dirname, "views"),
    public: path.join(__dirname, "public")
};
module.exports = staticFolders;