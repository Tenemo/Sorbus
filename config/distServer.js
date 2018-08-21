import browserSync from 'browser-sync';
import historyApiFallback from 'connect-history-api-fallback';
import { chalkProcessing } from './chalkConfig';

/* eslint-disable no-console */
console.log(chalkProcessing('Starting dist server.'));

browserSync({
    port: 4000,
    ui: {
        port: 4001,
    },
    server: {
        baseDir: 'dist',
    },
    middleware: [historyApiFallback()],
});
