const publicDefine = require('../config/define')

const LIST = "LIST" // 获取全部队列
const CLOSE = "CLOSE" //关闭掉本个链接
const SAVE = 'SAVE' //新增一条log


/**
 * @description 获取全部的list
 * @param {Array} listQueen
 * @returns {Object} result 返回列表对象
 */
function getALLIST(listQueen) {
    var res = []
    listQueen.map((item, index) => {
        res.push({
            index: index,
            uid: item.uid
        })
    })

    return {
        type: publicDefine.SUCCESS,
        data: res
    }
}

/**
 * 关闭掉当前的ws
 * @param {*} ctx 
 */
function closeThisWs(ctx) {
    ctx.close()
}

/**
 * 
 * @param {Object} log 
 * @param {Array} listQueen 
 */
function saveLog(log, listQueen){
    //TODO 把log保存一份
    listQueen.map(item=>{
        item.ctx.websocket.send(JSON.stringify({
            type: publicDefine.NEWLOG,
            data: log
        }))
    })
    return {
        type: publicDefine.SUCCESS,
        data: log
    }
}


/**
 * 用于分发不同的message类型
 * @param {Object} message 
 * @param {Array} listQueen
 * @param {String} uid 
 * @param {*} ctx 
 */
module.exports = function (listQueen, ctx, uid) {
    return function (message) {
        try{
            message = JSON.parse(message)
        }catch(err){
            console.log(err)
        }
        var result = {}
        switch (message.type) {
            case LIST:
                result = getALLIST(listQueen)
                break;
            case CLOSE:
                result = closeThisWs(ctx)
                break;
            case SAVE:
                result = saveLog(message.data, listQueen.filter(item=>item.uid === uid))
                break;
            default:
                result = {
                    type: publicDefine.ERROR,
                    data: 'not match case'
                }
        }
        ctx.websocket.send(JSON.stringify(result))
    }
}