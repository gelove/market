import React, {Component} from "react";
import {StatusBar} from 'react-native';

import {futureSocket} from './Socket';
import {listenOnFutureSocket, removeAllListener} from './utils/socket';
import {MAIN_COLOR} from "./constant/style";
import {IOS} from "./constant/system";
import AppNavigator from "./AppNavigator";

console.disableYellowBox = true;

if (!__DEV__) {
    global.console = {
        info: () => {
        },
        log: () => {
        },
        debug: () => {
        },
        error: () => {
        }
    }
}

export default class extends Component {
    constructor(props) {
        super(props);
        StatusBar.setBarStyle('light-content');
        !IOS && StatusBar.setBackgroundColor(MAIN_COLOR);
    }

    componentDidMount() {
        this.listeners = listenOnFutureSocket(futureSocket);
    }

    componentWillUnmount() {
        removeAllListener(this.listeners)
    }

    render() {
        return (
            <AppNavigator/>
        )
    }
}