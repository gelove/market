import React, {PureComponent} from 'react'
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native'
import {formatNumber} from '../utils/format'
import {RISE, FALL, FONT_COLOR, HEADER_BTN, LIST_ITEM_BACKGROUND} from '../constant/style'
import {height} from "../constant/system";

const ITEM_HEIGHT = 0.08 * height;

const styles = StyleSheet.create({
    cellText: {
        flex: 1,
        fontSize: 16,
        textAlign: 'center',
    },
    standaloneRowFront: {
        flexDirection: 'row',
        backgroundColor: LIST_ITEM_BACKGROUND,
        height: ITEM_HEIGHT,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
});

class ContractName extends PureComponent {
    render() {
        return <Text style={[styles.cellText, {color: FONT_COLOR, fontSize: HEADER_BTN + 2}]}>
            {this.props.text}
        </Text>
    }
}

class LastPrice extends PureComponent {
    render() {
        return <Text style={[styles.cellText, {color: FONT_COLOR}]}>
            {this.props.text}
        </Text>
    }
}

class ChangeRate extends PureComponent {
    render() {
        const {text, backgroundColor} = this.props;
        return <View style={{
            flex: 1,
            marginLeft: 5,
            marginRight: 5,
            borderRadius: 3,
            justifyContent: 'center',
            alignItems: 'center',
            height: 30,
            backgroundColor: backgroundColor
        }}>
            <Text style={{color: FONT_COLOR, fontSize: 16}}>{text}</Text>
        </View>
    }
}

class MarketItem extends PureComponent {
    get contractName() {
        // return base64Decode(this.props.item.get('contractName'))
        return this.props.item.get('contractName')
    }

    get changeRate() {
        return formatNumber(this.props.item.get('changeRate'), 2) + '%'
    }

    get backgroundColor() {
        let changeValue = this.props.item.get('changeValue');
        if (changeValue < 0) {
            return FALL;
        } else {
            return RISE
        }
    }

    render() {
        const {item, onClickItem} = this.props;
        return (
            <TouchableOpacity activeOpacity={0.7} style={styles.standaloneRowFront}
                              onPress={onClickItem}>
                <ContractName text={this.contractName}/>
                <LastPrice text={item.get('lastPrice')}/>
                <ChangeRate text={this.changeRate} backgroundColor={this.backgroundColor}/>
            </TouchableOpacity>
        )
    }
}

export default MarketItem;
