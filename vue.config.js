const TerserPlugin = require('terser-webpack-plugin')
module.exports = {
    devServer: {
        // 设置代理
        proxy: {
            "/api": {
                target: "http://localhost:3000", // 域名
                ws: true, // 是否启用websockets
                changeOrigin: true, //开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
                pathRewrite: {
                    "^/api": "/"
                }
            }
        },
    },
    // 设置生产环境禁止打印日志
    configureWebpack: (config) => {
        if (process.env.NODE_ENV === 'production') {
            return {
                optimization: {
                    minimizer: [
                        new TerserPlugin({
                            sourceMap: false,
                            terserOptions: {
                                compress: {
                                    drop_console: true
                                }
                            }
                        })
                    ]
                }
            }
        }
    },
    css: {
        loaderOptions: {
          // 给 sass-loader 传递选项
          sass: {
            // @/ 是 src/ 的别名
            // 所以这里假设你有 `src/variables.scss` 这个文件
            prependData: `
            @import '@/styles/variables.scss';
            `
          }
        }
      }
};
