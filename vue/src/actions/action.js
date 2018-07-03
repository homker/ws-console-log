import { wsSend, LIST, SAVE } from "./ws";

/**
 * 触发获取所有的list
 */
export function getList() {
  wsSend(LIST);
}

/**
 * 触发提交日志
 * @param {string} message
 */
export function addLog(message) {
  wsSend(SAVE, message);
}
