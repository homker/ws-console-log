
const TESTRTX = "homkerliu";

const OPENWS = "openws";
export const CLOSEWS = "closews";
export const ERROR = "error";
export const LIST = 'LIST'
export const SAVE = 'SAVE'



/**
 * 模拟获取rtx
 */
export function getRTX() {
    return TESTRTX;
}


/**
 * @desc 获取ws的实例
 * @param rtx rtx
 */
export function getWS(rtx) {
    var WSURL = `ws://127.0.0.1:3000/log/user/${rtx} `;
    var ws = new WebSocket(WSURL);
    return ws;
}

// ws 全局实例
const ws = getWS(getRTX());

/**
 * 通过ws实例发送消息
 * @param {*} type
 * @param {*} content
 */
export function wsSend(type, content) {
    ws.send(
        JSON.stringify({
            type: type, //标志消息类型
            content: content, //标志消息内容
            time: Date.now() //标志发送时间
        })
    );
}

/**
 * 注册ws开始时候的回调
 * @param {function} callback
 */
export function wsOpenCallBack(callback) {
    ws.addEventListener("open", () => {
        wsSend(OPENWS, {
            rtx: getRTX()
        });
        callback && callback();
    });
}

/**
 * 注册ws的message回调
 * @param {function} callback 
 */
export function wsMessageCallback(callback) {
    ws.addEventListener("message", event => {
        console.log(`message  is : ${event.data}`);
        callback && callback(event)
    });
}

/**
 * ws关闭的回调事件
 * @param {function} callback 
 */
export function wsCloseCallback(callback) {
    ws.addEventListener("close", event => {
        console.log(`websocket is been closed: ${JSON.stringify(event)}`);
        callback && callback(event)
    });
}

/**
 * ws 错误的回调事件
 * @param {function} callback 
 */
export function wsErrorCallback(callback){
    ws.addEventListener("error", err => {
        console.log(`websocket is been error: ${JSON.stringify(err)}`);
        callback && callback(err)
    });
}




/**
 * 关闭ws
 */
export function closeWs() {
    ws.close();
}