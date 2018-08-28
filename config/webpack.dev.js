import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import autoprefixer from 'autoprefixer';
// in case of unexpected bundle bloat, install webpack-bundle-analyzer to debug
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

export default {
    mode: 'development',
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.scss'],
    },
    devtool: 'cheap-module-source-map',
    entry: [
        'babel-polyfill',
        'eventsource-polyfill', // Hot reloading with IE
        'react', // Include this to enforce order
        'react-dom', // Include this to enforce order
        path.resolve(__dirname, '../src/index.jsx'),
        'webpack-hot-middleware/client?reload=true&quiet=true',
    ],
    target: 'web',
    output: {
        filename: '[name].js',
        chunkFilename: '[name].chunk.js',
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new HtmlWebpackPlugin({
            title: 'Sorbus',
            template: 'src/index.html',
            inject: 'true',
            favicon: 'src/favicon.ico',
        }),
    ],
    performance: {
        hints: false,
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
                test: /(\.css|\.scss|\.sass)$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            minimize: false,
                            sourceMap: true,
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => [autoprefixer],
                            sourceMap: true,
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            includePaths: [
                                path.resolve(__dirname, '../src/styles'),
                            ],
                            sourceMap: true,
                        },
                    },
                ],
            },
            {
                test: /\.(eot|svg|otf|ttf|woff|woff2)$/,
                use: 'file-loader',
            },
            {
                test: /\.(jpg|png|gif)$/,
                use: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            query: {
                                gifsicle: {
                                    interlaced: true,
                                },
                                mozjpeg: {
                                    progressive: true,
                                },
                                optipng: {
                                    optimizationLevel: 7,
                                },
                                pngquant: {
                                    quality: '65-90',
                                    speed: 4,
                                },
                            },
                        },
                    },
                ],
            },
        ],
    },
};
