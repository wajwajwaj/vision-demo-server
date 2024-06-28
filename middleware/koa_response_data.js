
const path = require('path')
const fileUtils = require('../utils/file_utils')

module.exports = async (ctx, next) => {
    // 获取请求的路径 拼接文件的路径  获取文件中的数据
    const url = ctx.request.url
    let filePath = url.replace('/api', '')
    filePath = '../data' + filePath + '.json'
    filePath = path.join(__dirname, filePath)
    try {
        const body = await fileUtils.getFileData(filePath)
        ctx.response.body = body
    }catch(err){
        const errMsg = {
            message: '文件资源不存在',
            status: 404,
        }
        ctx.response.body = JSON.stringify(errMsg)
    }

    console.log(filePath);
    await next()
}