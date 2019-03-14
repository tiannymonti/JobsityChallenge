const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');
const path = require('path');

module.exports = {
    devtool: 'inline-source-map',
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        chunkFilename: '[id].js',
        publicPath: ''
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
      rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            }
        },
        {
            test: /\.css$/,
            exclude: /node_modules/,
            use: [
                {
                  loader: "style-loader"
                },
                {
                  loader: "css-loader",
                  options: {
                    modules: true,
                    importLoaders: 1,
                    localIdentName: "[name]_[local]_[hash:base64]"
                  }
                },
                {
                    loader: "postcss-loader",
                    options: {
                        ident:'postcss',
                        plugins: () => {
                            autoprefixer({
                                browsers: [
                                    "> 1%",
                                    "last 2 versions"
                                ]
                            })
                        }
                    }
                }
            ] 
        }
      ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + '/src/index.html',
            filename: 'index.html',
            inject: 'body'
        })
    ]
};