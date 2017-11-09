// const path = require('path');
// module.exports = {
// 	entry:'./src/script/main.js',
// 	output:{
// 		path:path.resolve(__dirname, 'dist/js'),
// 		filename:'bundle.js'
// 	}
// }


// module.exports = {
// 	entry:'./src/script/main.js',
// 	output:{
// 		path:__dirname,
// 		filename:'./dist/js/bundle.js'
// 	}
// }

var htmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
	//context:运行脚本的根目录,
	//entry:['./src/script/main.js','./src/script/world.js'],
	entry:{
		main:"./src/script/main.js",
		world:"./src/script/world.js",
		a:"./src/script/a.js",
		b:"./src/script/b.js",
	},
	output:{
		path:__dirname+'/dist',//输出文件的最外层位置，要细化可以将路径写入filename中
		filename:'js/[name]-bundle.js',
		publicPath:'http://cdn.com/',//占位符
	},
	plugins:[
		new htmlWebpackPlugin({
			filename:'index.html',
			template:"index.html",
			inject:"body",
			title:"this is index",
			chunks:['main','world']
		}),
		new htmlWebpackPlugin({
			filename:'a.html',
			template:"index.html",
			inject:"body",
			title:"this is index",
			excludeChunks:["world"]
		}),
		new htmlWebpackPlugin({
			filename:'b.html',
			template:"index.html",
			inject:"body",
			title:"this is index",
			chunks:['main','b']
		}),
	]
}


