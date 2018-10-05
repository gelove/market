import React, {Component} from 'react'
import {Text} from 'react-native'

import WebPage from '../components/WebPage'
import {TITLE_SIZE, FONT_COLOR} from '../constant/style'
import {IOS} from "../constant/system";


class WebShow extends Component {

    static navigationOptions = ({navigation}) => {
        let {title} = navigation.state.params;
        return {
            headerTitle: !IOS ? <Text style={{fontSize: TITLE_SIZE, color: FONT_COLOR}}>{title}</Text> : title,
        }
    };

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <WebPage src={this.props.navigation.state.params.uri}/>
        )
    }
}

export default WebShow
