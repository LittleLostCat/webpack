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


module.exports = {
	entry:'./src/script/main.js',
	output:{
		path:__dirname+'/dist/js',
		filename:'bundle.js'
	}
}


