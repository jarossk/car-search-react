const path = require('path');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        chunkFilename: '[id].js',
        publicPath: ''
    }, 
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: './dist',
        hot: true,
        port: 3000
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
                
            },
            {
                test: /\.css$/,
                exclude: /node_module/,
                use: [
                    {   loader: 'style-loader' },
                    {   
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            modules: true,
                            localIdentName: '[name]__[local]__[hash:base64:5]'
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: () => [
                                autoprefixer({
                                    browsers: [
                                        "> 1%",
                                        "last 2 versions"
                                    ]
                                })
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8192
                    }
                }]
            },
            {
               test: /\.(ttf|eot|svg|gif)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                   use: [{
                       loader: 'file-loader'
                   }]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            template: __dirname + '/src/index.html',
            filename: 'index.html', 
            inject: 'body'       
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
};