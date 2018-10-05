import React, {PureComponent} from 'react';
import {
    Text,
    View,
    VirtualizedList
} from 'react-native';
import Separator from "./Separator";
import MarketItem from './MarketItem';
import {QUOTATION_DISPLAY} from "../constant/quotation";
import {
    MARGIN,
    COMMON_STYLE,
    ITEM_HEIGHT,
    SEPARATOR_HEIGHT
} from "../constant/style";

class Header extends PureComponent {
    render() {
        return (
            <View style={COMMON_STYLE.marketHeaderStyle}
            >
                {
                    QUOTATION_DISPLAY.map((item, index) => {
                        return <Text key={index} style={COMMON_STYLE.marketHeaderCell}>{item}</Text>
                    })
                }
            </View>
        )
    }
}

class Market extends PureComponent {

    renderItem = ({item}) => {
        const {onClickItem} = this.props;
        return <MarketItem item={item} onClickItem={onClickItem}/>;
    };

    getKeyExtractor = item => item.get('contractNo');

    getItem = (data, index) => data.get(index);

    getItemCount = data => data.count();

    getItemLayout = (item, index) => ({
        length: ITEM_HEIGHT,
        offset: (ITEM_HEIGHT + SEPARATOR_HEIGHT) * index,
        index
    });

    render() {
        const {data} = this.props;
        const list = data.toList();
        return (
            <View style={{flex: 1, margin: MARGIN}}>
                <Header/>
                <VirtualizedList
                    refreshing={true}
                    renderItem={this.renderItem}
                    data={list}
                    removeClippedSubviews={false}
                    directionalLockEnabled={true}
                    initialNumToRender={10}
                    maxToRenderPerBatch={10}
                    ItemSeparatorComponent={Separator}
                    keyExtractor={this.getKeyExtractor}
                    getItem={this.getItem}
                    getItemCount={this.getItemCount}
                    getItemLayout={this.getItemLayout}
                />
            </View>
        )
    }
}

export default Market;
