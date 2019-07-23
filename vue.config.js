const path = require('path')

module.exports = {
    css: {
        loaderOptions: {
            stylus: {
                import: [
                    path.resolve(__dirname, './src/styles/reset.styl'),
                    path.resolve(__dirname, './src/styles/fonts.styl'),
                ]
            }
        }
    }
}