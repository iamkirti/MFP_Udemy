const {merge}=require('webpack-merge');
const HtmlWebpackPlugin=require('html-webpack-plugin');
const ModuleFederationPlugin=require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig=require('./webpack.common');

const devConfig={
    mode:'development',
    devServer:{
        port:8080,
        historyApiFallback:{
            index:'index.html'
        }
    },
    plugins:[
        new ModuleFederationPlugin({
            name:'container',
           remotes:{
            marketing:'marketing@http://localhost:8081/remoteEntry.js'
           },
           shared:['react','react-dom']
           // marketing on RHS is the "name" in the marketing module webpack
        //    The keys are the names of the different modules that we are going to try to require in or import in
        //    to our container project, and then the value will be where the remote entry file is for that module.
        }),
        new HtmlWebpackPlugin({
            template:'./public/index.html'
        })
    ]
}

module.exports=merge(commonConfig,devConfig);