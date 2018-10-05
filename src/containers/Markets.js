import React, {PureComponent} from 'react';
import {DeviceEventEmitter} from 'react-native';

import Markets from "../screens/Markets";


export default class extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            data: {}
        }
    }

    componentWillMount() {
        DeviceEventEmitter.addListener('mdListEvent', (e) => {
            console.log(e.data)
        })
        DeviceEventEmitter.addListener('mdDataEvent', (e) => {
            console.log(e.data)
        })
    }

    componentWillUnmount() {
        DeviceEventEmitter.removeAllListeners()
    }

    render() {
        return <Markets/>
    }
}