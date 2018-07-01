var koa = require('koa2'),
    route = require('koa-route'),
    websockify = require('koa-websocket');

var messageService = require('./service/messageService')

const config = require('./config/index')

const app = websockify(new koa())

var logQueen = []


app.ws.use((ctx, nex) => {
    //TODO 校验用户信息
    return nex(ctx)
})

// gat router
app.ws.use(route.all('/log/user/:uid', (ctx, uid) => {

    ctx.websocket.send('connected')
    // 把ctx存入队列
    logQueen.push({
        ctx: ctx,
        uid: uid
    })

    ctx.websocket.on('message', messageService(logQueen, ctx, uid))
    ctx.websocket.on('close', message => {
        let index = logQueen.findIndex(item => item.ctx === ctx)
        console.log(`${index} is been closed`)
        logQueen.splice(index, 1)
    })

}))


console.log('server is be start, http://127.0.0.1:' + config.port)
app.listen(config.port)