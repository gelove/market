import {fromJS} from 'immutable';
import {DeviceEventEmitter} from 'react-native';

export function listenOnFutureSocket(socket) {
    let connect = socket.on('connect', function (res) {
        console.log('marketSocket connected', socket.id, res);
        let data = {flag: 'list'};
        let str = JSON.stringify(data);
        socket.emit('registerEvent', str);
    });

    let disconnect = socket.on('disconnect', function () {
        console.log('marketIO, you have been disconnected');
    });

    let mdListEvent =  socket.on('mdListEvent', function (res) {
        // console.log("mdListEvent", JSON.stringify(res));
        let data = res.dataList || res;
        DeviceEventEmitter.emit('mdListEvent', fromJS(data || []));
    });

    let mdDataEvent = socket.on("mdDataEvent", function (res) {
        // console.log("mdDataEvent", typeof res, res);
        DeviceEventEmitter.emit('mdDataEvent', fromJS(res || []));
    });

    return [connect, disconnect, mdListEvent, mdDataEvent]
}

export function removeAllListener(arr) {
    arr.map(item => {
        item.destroy && item.destroy()
    })
}