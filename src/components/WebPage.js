import React, {Component} from 'react'
import {Text, View, WebView} from 'react-native'
import {COMMON_STYLE} from "../constant/style";

export default class WebPage extends Component {
    render() {
        return (
            <View style={COMMON_STYLE.container}>
                <WebView
                    source={{uri: this.props.src}}
                    startInLoadingState={true}
                    javaScriptEnable={true}
                    renderLoading={() => <Text>正在加载页面...</Text>}
                />
            </View>
        )
    }
}