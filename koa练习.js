// 创建koa对象
// 编写响应程序（中间件）
// 绑定一个端口号
// 监听这个对象

const Koa = require('koa')

const app = new Koa()

// cts：上下文
// next：下一层中间件
// 中间件特点：koa通过use加入中间件  洋葱模型  一个中间件就是一个回调函数  内层中间件是否执行取决外层的中间件是否被调用  next得到的是promise对象
app.use((ctx, next) => {
    console.log('第一层中间件');
    next()
    ctx.response.body = 'hellow'
    console.log('第一层中间件。。。。2');

})

app.use(async (ctx, next) => {
    console.log('第二层中间件');
    const res = await next()
    console.log(res);
    console.log('第二层中间件。。。。2');

})
app.use((ctx, next) => {
    console.log('第三层中间件');
    return 'love'
})

app.listen(3000)


// 计算服务器处理请求的总耗时
// 在响应头上添相应内容的mime类型
// 根据浏览器访问的url读取指定目录下的文件内容

// 服务器允许跨域

