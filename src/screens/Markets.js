import React, {PureComponent} from 'react';
import {View, DeviceEventEmitter} from 'react-native';
import {Map} from 'immutable';

import Market from '../components/Market';
import {COMMON_STYLE, BACKGROUND_COLOR, MARGIN, GREY, CENTER_BORDER_RADIUS, BLACK} from '../constant/style';

export default class Markets extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            data: Map()
        }
    }

    componentWillMount() {
        DeviceEventEmitter.addListener('mdListEvent', data => {
            // console.log('mdListEvent', data);
            let map = Map();
            data.map(item => {
                map = map.set(item.get('contractNo'), item);
            });
            this.setState({
                data: map
            })
        });
        DeviceEventEmitter.addListener('mdDataEvent', data => {
            // console.log('mdDataEvent', data);
            let map = this.state.data;
            data.map(item => {
                let contract = map.get(item.get('contractNo'));
                if (!contract) {
                    map = map.set(item.get('contractNo'), item);
                    return
                }
                if (item.get('lastPrice') !== contract.get('lastPrice')) {
                    contract = contract.merge(item);
                    map = map.set(item.get('contractNo'), contract);
                }
            });
            this.setState({
                data: map
            })
        });
    }

    componentWillUnmount() {
        DeviceEventEmitter.removeAllListeners()
    }

    onClickItem = () => {
        this.props.navigation.navigate('WebShow', {title: '知乎', uri: 'https://www.zhihu.com'})
    }

    render() {
        return (
            <View style={[
                COMMON_STYLE.container,
                {
                    margin: MARGIN,
                    borderColor: GREY,
                    borderRadius: CENTER_BORDER_RADIUS,
                    shadowColor: BLACK,
                    shadowOffset: {width: 0, height: 2},
                    shadowOpacity: 0.2,
                    backgroundColor: BACKGROUND_COLOR
                }
            ]}>
                <Market data={this.state.data} onClickItem={this.onClickItem}/>
            </View>
        )
    }
}