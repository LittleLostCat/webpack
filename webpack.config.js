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
	entry:['./src/script/main.js','./src/script/world.js'],
	output:{
		path:__dirname+'/dist',
		filename:'js/bundle.js'
	},
	plugins:[
		new htmlWebpackPlugin({
			filename:'index-[hash].html',
			template:"index.html",
			inject:'head'
		})
	]
}


