import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
// in case of unexpected bundle bloat, install webpack-bundle-analyzer to debug
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

export default {
    mode: 'development',
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.scss']
    },
    devtool: 'cheap-module-source-map',
    entry: [
        'webpack-hot-middleware/client?reload=true',
        path.resolve(__dirname, '../src/index.jsx')
    ],
    target: 'web',
    output: {
        filename: '[name].js',
        chunkFilename: '[name].chunk.js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new HtmlWebpackPlugin({
            title: 'Magnolia',
            template: 'src/index.html',
            inject: 'true'
        })
    ],
    performance: {
        hints: false
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /(\.css|\.scss|\.sass)$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            minimize: false,
                            sourceMap: true
                        }
                    }, {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => [
                                require('autoprefixer')
                            ],
                            sourceMap: true
                        }
                    }, {
                        loader: 'sass-loader',
                        options: {
                            includePaths: [path.resolve(__dirname, '../src/styles')],
                            sourceMap: true
                        }
                    }
                ]
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
                        interlaced: true
                      },
                      mozjpeg: {
                        progressive: true
                      },
                      optipng: {
                        optimizationLevel: 7
                      },
                      pngquant: {
                        quality: '65-90',
                        speed: 4
                      }
                    }
                  },
                },
              ],
            },
        ]
    }
};