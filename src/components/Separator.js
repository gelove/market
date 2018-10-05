/**
 * Created by Administrator on 2017/8/18.
 */
import React, {PureComponent} from 'react';
import {View} from 'react-native';
import {width} from "../constant/system";
import {SEPARATOR_COLOR, SEPARATOR_HEIGHT} from '../constant/style';

class Separator extends PureComponent {
    render() {
        return (
            <View style={{width: width, height: SEPARATOR_HEIGHT, backgroundColor: SEPARATOR_COLOR}}/>
        )
    }
}

export default Separator;
