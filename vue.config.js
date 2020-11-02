module.exports = {
    //部署应用的基本url  可用 process.env.NODE_ENV 环境变量控制
    publicPath: '',
    
    //开发服务配置
    devServer: {
        proxy: {
            '^/api': {
                target: 'https://qym.jjyapp.com',
                changeOrigin: true
            }
        },
    },
}
