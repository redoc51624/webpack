var webpack = require('webpack');
// var path = require('path');
// var CommonsChunkPlugin = require('./node_modules/webpack/lib/optimize/CommonsChunkPlugin');

module.exports = {
	entry: {
		about:'./dist/app.js',
		// contact:'./dist/contact',
        // vendor:['react' , 'react-dom']
	} ,
	output:{
		// path: path.join(__dirname, 'build'),
        path: 'build',
		filename:'bundle.js'
	} ,
    devServer:{
        inline: 'true',
        contentBase: './build',
        port: '3006'
    },
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015']
				}
			},
			{
				test: /\.scss$/,
				loader: 'style-loader!css-loader!sass-loader'
			}, 
				{
			    test: /\.(png|jpg)$/,
			    loader: 'url-loader?limit=10000'
			}
	 ]
	}
    // ,
    // plugins: [
    //     new CommonsChunkPlugin(
    //         {
    //             name:'vendor',
    //             filename:'vendor.bundle.js'}
    //                             )
    // ]
};