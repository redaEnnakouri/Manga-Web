const mix = require('laravel-mix');
const WebpackShellPlugin = require('webpack-shell-plugin');

mix.js('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css')
    .disableNotifications()
    .version();
mix.webpackConfig({
    output: {
        publicPath: process.env.CDN_URL + '/',
        chunkFilename: 'nhe/js/[name].js?id=[chunkhash]',
    },
    plugins: [
        new WebpackShellPlugin({
            onBuildStart: [
                'php artisan generate:translations',
                'php artisan site:js'
            ],
        }),
    ],
});
if (mix.inProduction()) mix.version();
else mix.sourceMaps();