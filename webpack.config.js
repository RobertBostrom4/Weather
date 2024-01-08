const path = require('path');

module.exports = {
    // Entry point for your application
    entry: './src/index.js',

    // Output directory for bundled files
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },

    // Module resolution rules
    module: {
        rules: [
            // Transpile JavaScript files using Babel

            // Load CSS files
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },

            // Load image files
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                use: ['file-loader'],
            },
        ],
    },   

};
