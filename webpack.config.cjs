const path = require('path');
// import path from "path";

module.exports = {

module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
},

resolve: {
    extensions: ['.tsx', '.ts', '.js'],
},

mode: "development",
entry : path.resolve( __dirname , "./src/index.js"),    
output: {
        path : path.resolve( __dirname , "./dist" ),
        filename : "bundle.js"
},
devtool : 'source-map'

}