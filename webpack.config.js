const HtmlWebPackPlugin = require("html-webpack-plugin");


module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{
          loader: "babel-loader"
        },{
          loader: 'ify-loader'
        }]
      },
      {
        test: /(\.css|.scss)$/,
        use: [{
            loader: "style-loader" // creates style nodes from JS strings
        }, {
            loader: "css-loader" // translates CSS into CommonJS
        }, {
            loader: "sass-loader" // compiles Sass to CSS
        }]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {

        //{ test: /\.(jpg|png|gif|svg|pdf)$/, use: [ { loader: 'file-loader', options: { name: '[name].[ext]', outputPath: './assets/images/' } } ] }

        test: /\.(png|jpg|gif|svg|pdf)$/,
        use: [
            {
                loader: 'file-loader',
                options: {}
            }
        ]
    }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
};








