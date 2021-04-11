const mix = require("laravel-mix");
const path = require("path");
const webpack = require("webpack");

mix.js("resources/js/app.js", "public/js")
    .vue({ version: 3 })
    .webpackConfig({
        plugins: [
            new webpack.DefinePlugin({
            __VUE_OPTIONS_API__: true,
            __VUE_PROD_DEVTOOLS__: false,
            }),
        ],
        output: { chunkFilename: 'js/[name].js?id=[chunkhash]' },
        resolve: {
            alias: {
                "@": path.resolve("resources/js"),
                vue: path.resolve("node_modules", "vue"),
            },
        },
    })
    .version()
    .sourceMaps();
