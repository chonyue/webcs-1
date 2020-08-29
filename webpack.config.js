var HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
require('webpack');

module.exports = {
	entry: './src/main.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	module: {
      rules: [
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
		{
			//打包图片，图标字体等
		  test: /\.(png|jpg|gif|eot|ttf|svg|woff|woff2)$/i,
		  use:'file-loader'
		},
      ],
    },
	plugins: [new HtmlWebpackPlugin({
		template:'./src/in.html'
	})]
};