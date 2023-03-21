const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	output: {
		path: path.resolve(__dirname, 'docs'),
		clean: true,
	},
	devServer: {
		port: 8080,
		historyApiFallback: true,
	},
	resolve: {
		modules: ['src', 'node_modules'],
		extensions: ['.js', '.jsx', '.ts', '.tsx']
	},
	module: {
		rules: [
			{
				test: /\.(js|ts)x?$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							'@babel/preset-react',
							'@babel/preset-env',
							'@babel/preset-typescript',
						],
						plugins: ['@babel/plugin-transform-runtime']
					}
				}
			},
			{
				test: /\.s?css$/,
				exclude: /node_modules/,
				use: [
					{loader: 'style-loader'},
					{
						loader: 'css-loader',
						options: {
							modules: {
								localIdentName: '[path][name]__[local]--[hash:base64:8]',
							}
						},
					},
					{loader: 'sass-loader'},
				],
			}
		],
	},
	plugins:[
		new HTMLWebpackPlugin({
			template: './public/index.html'
		})
	]
};
