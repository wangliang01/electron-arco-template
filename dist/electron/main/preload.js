'use strict';

var electron = require('electron');
var os = require('os');

electron.contextBridge.exposeInMainWorld("ipcRenderer", {
  send: (channel, args) => electron.ipcRenderer.send(channel, args),
  sendSync: (channel, args) => electron.ipcRenderer.sendSync(channel, args),
  on: (channel, listener) => electron.ipcRenderer.on(channel, listener),
  once: (channel, listener) => electron.ipcRenderer.once(channel, listener),
  invoke: (channel, args) => electron.ipcRenderer.invoke(channel, args),
  removeAllListeners: (channel) => electron.ipcRenderer.removeAllListeners(channel)
});
electron.contextBridge.exposeInMainWorld("systemInfo", {
  platform: os.platform(),
  release: os.release(),
  arch: os.arch()
});
electron.contextBridge.exposeInMainWorld("shell", {
  shell: electron.shell
});
electron.contextBridge.exposeInMainWorld("crash", {
  start: () => {
    process.crash();
  }
});
