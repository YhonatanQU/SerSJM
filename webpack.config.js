const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports={
	mode:'production',
	entry:'./js/App.js',
	output:{
		path:__dirname+'/build',
		filename:'bundle.js'
	},
	plugins:[
		new HtmlWebpackPlugin({
			template: 'index.html'
		})
	]
}