const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    // 關閉語法檢查
    lintOnSave: false,

    publicPath: process.env.NODE_ENV === 'production'
        ? '/demo/'
        : '/'
})