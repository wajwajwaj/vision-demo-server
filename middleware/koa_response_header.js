// 获取mime类型  application/json
// 设置响应头  Content-Type: application/json; charset=UTF-8
module.exports = async (ctx, next) => {
    const contentType = 'application/json; charset=UTF-8'
    // 设置响应类型
    ctx.set('Content-Type', contentType)
    // 设置允许跨域
    ctx.set('Access-Control-Allow-Origin', '*')
    ctx.set('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, DELETE, PUT')

    await next()
}