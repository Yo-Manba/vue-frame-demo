module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'https://qym.jjyapp.com',
                changeOrigin: true
            }
        },
    },
}