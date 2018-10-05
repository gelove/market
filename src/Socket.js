if (!window.location) {
    // App is running in simulator
    window.navigator.userAgent = 'ReactNative'
}

import IO from 'socket.io-client'
import {FUTURE_SOCKET} from './constant/api'

export const futureSocket = IO(FUTURE_SOCKET, {
    jsonp: false,
    transports: ['websocket']
});