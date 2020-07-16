module.exports = {
    // assetsDir: 'static',
    // publicPath: './',
    devServer: {
        host: '192.168.1.155',
        port: 8081,
        proxy: {
            '/api': {
                target: 'https://qym.jjyapp.com',
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/api': ''
                }
            },
        },
    },
}