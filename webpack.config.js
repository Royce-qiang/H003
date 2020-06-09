const path = require('path')
const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
	entry :'./src/index.js',
	output:{
		filename:'main.js',
		path:path.resolve(__dirname,'dist')
	},
	devServer:{
		open:true,
		// contentBase:'./src',
		hot:true
	},
	plugins:[
		new webpack.HotModuleReplacementPlugin(),
		new VueLoaderPlugin()
		],
	module:{
		rules:[
			{test:/\.css$/,use:['style-loader','css-loader']},
			{test:/\.less/,use:['style-loader','css-loader','less-loader']},
			{test:/\.scss/,use:['style-loader','css-loader','sass-loader']},
			{test:/\.(png|svg|jpg|gif)$/,use:['url-loader']},
			{test:/\.vue$/,use:['vue-loader']}
			]
	}
} 