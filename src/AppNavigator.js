import React from 'react'
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation'
import {View, Text, Image, StyleSheet} from 'react-native'

import {BACKGROUND_COLOR, FONT_COLOR, TAB_SIZE, TITLE_SIZE, MAIN_COLOR, DEEP_GREY} from './constant/style';
import {width} from "./constant/system";

import Markets from './screens/Markets'
import Trade from './screens/Trade'
import WebShow from './screens/WebShow'

const normalNav = {
    Markets: {
        screen: Markets,
        navigationOptions: ({navigation}) => ({
            tabBarLabel: '行情',
            headerTitle: (
                <View style={styles.headerStyle}>
                    <Text style={styles.titleStyle}>行情</Text>
                </View>
            ),
            tabBarIcon: ({focused, tintColor}) => (
                <Image
                    source={require('./images/tabBar/market.png')}
                    style={[styles.tabBarStyle, {tintColor: tintColor}]}
                />
            )
        })
    },
    Trade: {
        screen: Trade,
        navigationOptions: ({navigation}) => ({
            tabBarLabel: '交易',
            headerTitle: (
                <View style={styles.headerStyle}>
                    <Text style={styles.titleStyle}>交易</Text>
                </View>
            ),
            tabBarIcon: ({focused, tintColor}) => (
                <Image
                    source={require('./images/tabBar/trade.png')}
                    style={[styles.tabBarStyle, {tintColor: tintColor}]}
                />
            )
        })
    },
}

const TabBarNavigator = createBottomTabNavigator(
    normalNav,
    {
        initialRouteName: 'Markets',
        animationEnabled: false,
        lazy: true,
        swipeEnabled: false,
        tabBarOptions: {
            showIcon: true, // 是否显示图标，默认关闭
            style: {
                backgroundColor: DEEP_GREY
            },
            iconStyle: {
                height: TAB_SIZE
            },
            // 标签指示器的样式对象
            indicatorStyle: {
                height: 0 // 安卓底部会多出一条线，可以设高度为0后隐藏
            },
            activeTintColor: MAIN_COLOR
        }
    }
)

const AppNavigator = createStackNavigator({
    TabBar: {
        screen: TabBarNavigator,
        // 优先级最高，TabBarNavigator 中每个导航路由页`面的通用属性
        navigationOptions: ({navigation}) => ({
            headerLeft: null,
            // gesturesEnabled: false,
            headerStyle: {
                backgroundColor: BACKGROUND_COLOR
            }
        })
    },
    WebShow: {
        screen: WebShow,
    },
}, {
    initialRouteName: 'TabBar',
    headerMode: 'float',
    cardStyle: {
        shadowColor: 'transparent',
        backgroundColor: BACKGROUND_COLOR
    },
    // 公共属性，优先级最低
    navigationOptions: ({navigation}) => ({
        gesturesEnabled: false,
        // headerLeft: <View style={{height: 50, width: 100}}></View>,
        // headerRight: <View style={{height: 50, width: 100}}></View>,
        headerTintColor: FONT_COLOR,
        headerStyle: {
            backgroundColor: BACKGROUND_COLOR,
        },
        headerTitleStyle: {
            color: FONT_COLOR,
            textAlign: 'center'
        }
    })
})

const styles = StyleSheet.create({
    tabBarStyle: {
        width: TAB_SIZE,
        height: TAB_SIZE,
        resizeMode: 'contain'
    },
    titleStyle: {
        color: FONT_COLOR,
        fontSize: TITLE_SIZE,
        flex: 1,
        // paddingLeft: width / 2 - TITLE_SIZE, // 标题左边距
        // paddingTop: 50 * 0.25 // 标题上边距
    },
    headerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        width: width,
        flexDirection: 'row'
    },
})

export default AppNavigator
