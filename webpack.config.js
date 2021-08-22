const path = require("path");
module.exports = {
  mode: "production",
  entry: {
    main: "./src/main.js"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "library.js",
    library: "library",
    libraryTarget: "umd"
  }
}