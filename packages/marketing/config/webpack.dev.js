const {merge}=require('webpack-merge');
const HtmlWebpackPlugin=require('html-webpack-plugin');
const ModuleFederationPlugin=require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig=require('./webpack.common');

const devConfig={
    mode:'development',
    devServer:{
        port:8081,
        historyApiFallback:{
            index:'index.html'
        }
    },
    plugins:[
        new ModuleFederationPlugin({
            name:'marketing',
            filename:'remoteEntry.js',
            exposes:{
                './MarketingApp':'./src/bootstrap'
            },
            shared:['react','react-dom']
           // marketing is going to be used to declare some kind of global variable when our script loads up inside the container,
        }),
        new HtmlWebpackPlugin({
            template:'./public/index.html'
        })
    ]
}

module.exports=merge(commonConfig,devConfig);