const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: path.resolve(__dirname, 'src/scripts/index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module : {
        rules: [
            {
                test: /\.css$/i,
                exclude: /node_modules/,
                use: [
                    {
                        loader : MiniCssExtractPlugin.loader,
                    },
                    {
                        loader : 'css-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    require('tailwindcss')('./tailwind.config.js'),
                                    require('autoprefixer'),
                                ],
                            },
                        },
                    },
                ],
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/templates/index.html'),
            filename: 'index.html',
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'src/public/images'),
                    to: path.resolve(__dirname, 'dist/assets/images'),
                }
            ]
        }),
        new MiniCssExtractPlugin(),
    ]
}