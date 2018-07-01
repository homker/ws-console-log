var messageService = require('./messageService')
var fileStoreService = require('./fileService')
var sqlService = require('./sqlService')


module.exports = {
    messageService: messageService,
    fileStoreService: fileStoreService,
    sqlService: sqlService
}