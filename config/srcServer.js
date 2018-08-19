import browserSync from 'browser-sync';
import historyApiFallback from 'connect-history-api-fallback'; // https://github.com/BrowserSync/browser-sync/issues/204#issuecomment-102623643
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from './webpack.dev.babel';

const bundler = webpack(config);

// Run Browsersync and use HMR middleware.
browserSync({
    port: 3000,
    logLevel: 'silent',
    ui: {
        port: 3001
    },
    open: false,
    cors: true,
    server: {
        baseDir: 'src',

        middleware: [
            historyApiFallback(),

            webpackDevMiddleware(bundler, {
                // Dev middleware can't access config, so we provide publicPath.
                publicPath: config.output.publicPath,
                // These settings suppress noisy webpack output so only errors are displayed to the console.
                //logLevel: 'error',
                stats: {
                    hash: false,
                    version: false,
                    timings: false,
                    assets: false,
                    colors: true,
                    chunks: false,
                    chunkModules: false,
                    entrypoints: false,
                    modules: false,
                    reasons: false,
                    children: false,
                    source: false,
                    errors: false,
                    errorDetails: false,
                    warnings: true,
                    publicPath: false
                }
            }),
            webpackHotMiddleware(bundler)
        ]
    }
});