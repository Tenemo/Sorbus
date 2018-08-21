import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import autoprefixer from 'autoprefixer';

const GLOBALS = {
    'process.env.NODE_ENV': JSON.stringify('production'),
    __DEV__: false,
};

export default {
    mode: 'production',
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.scss'],
    },
    devtool: 'source-map',
    entry: [
        'babel-polyfill',
        'react', // Include this to enforce order
        'react-dom', // Include this to enforce order
        path.resolve(__dirname, '../src/index.jsx'),
    ],
    target: 'web',
    output: {
        path: path.resolve(__dirname, '../dist/'),
        publicPath: '/',
        filename: '[name].[chunkhash].js',
        chunkFilename: '[name].[chunkhash].chunk.js',
    },
    plugins: [
        new webpack.DefinePlugin(GLOBALS),
        new HtmlWebpackPlugin({
            title: 'Sorbus',
            template: 'src/index.html',
            inject: 'true',
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true,
            },
        }),
    ],
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
                    }, {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => [
                                autoprefixer,
                            ],
                            sourceMap: true,
                        },
                    }, {
                        loader: 'sass-loader',
                        options: {
                            includePaths: [path.resolve(__dirname, '../src/styles')],
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
