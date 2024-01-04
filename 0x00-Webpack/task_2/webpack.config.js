const path = require('path');

module.exports = {
    entry: './js/dashboard_main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public'),
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.css$/i,
                loader: "css-loader",
                options: {
                    url: true,
                },
            },
            {
                test: /\.(png|jpe?g|gif)s/i,
                use: [
                    {
                        loader: "file-loader",
                    },
                ],
            },
        ],
    },
};
