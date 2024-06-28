// 位于第一层
// 计算执行时间
// 设置响应头 X-Response-Time： 5ms

// 总耗时中间件
module.exports = async (ctx, next) => {
    // 记录开始时间  让内层的中间件执行  记录结束时间  设置响应头
    const start = Date.now()

    await next()

    const end = Date.now()
    const duration = end - start

    ctx.set('X-Responsse-Time', duration + 'ms')
}