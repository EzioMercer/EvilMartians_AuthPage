const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
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
				use: ['style-loader', 'css-loader', 'sass-loader']
			}
		],
	},
	plugins:[
		new HTMLWebpackPlugin({
			template: './public/index.html'
		})
	]
};
