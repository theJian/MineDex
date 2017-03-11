const path = require('path');
const webpack = require('webpack');

const config = {
	entry: path.resolve(__dirname, 'src', 'index.js'),
	outputPath: path.resolve(__dirname, 'dist')
}

module.exports = {
	entry: [
		'react-hot-loader/patch',
		'webpack-dev-server/client?http://localhost:8080',
		'webpack/hot/only-dev-server',
		config.entry
	],
	output: {
		filename: 'bundle.js',
		path: config.outputPath,
		publicPath: '/'
	},
	context: path.resolve(__dirname, 'src'),
	devtool: 'inline-source-map',
	devServer: {
		hot: true,
		contentBase: config.outputPath,
		publicPath: '/'
	},
	modules: {
		rules: [
			{
				test: /\.jsx?$/,
				use: [
					'babel-loader'
				],
				include: path.resolve(__dirname, 'src')
			},
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NamedModulesPlugin()
	]
}
