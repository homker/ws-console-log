var WSURL = "ws://127.0.0.1:3000/log/user/1"

var ws = new WebSocket(WSURL)

ws.addEventListener("open", () => {
    ws.send("hello server");
})

ws.addEventListener('message', event => {
    console.log(`message  is : ${event.data}`)
})

ws.addEventListener('close', event => {
    console.log(`websocket is been closed: ${JSON.stringify(event)}`)
})

ws.addEventListener('error', err => {
    console.log(`websocket is been error: ${JSON.stringify(err)}`)
})

function getList() {
    ws.send(JSON.stringify({
        type: 'LIST'
    }))
}

function addLog(message) {
    ws.send(JSON.stringify({
        type: 'SAVE',
        data: 'new log'
    }))
}

function close() {
    ws.close()
}