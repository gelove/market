/**
 * Created by allen on 2017/8/7.
 */
import React from 'react'
import moment from "moment/moment";
import {formatNumber} from "../utils/format";

// 限价
export const LIMITED_PRICE = 1;
// 市价
export const MARKET_PRICE = 2;

// 开仓
export const OPEN = 1;
// 平仓
export const CLOSE = 2;

// 多、买
export const BULL = 1;
// 空、卖
export const BEAR = 2;

export const HOLDING_ACTION_SHEET = ['取消', '平仓', 'K线图']
export const ORDER_ACTION_SHEET = ['取消', 'K线图']

export function getTime(item) {
    return moment(item.get('time') * 1000).format("YYYY-M-D HH:mm:ss");
}

function getContractName(item) {
    return item.get('contractName').slice(0, -2)
}

function getSide(item) {
    return parseInt(item.get('side')) === BULL ? '买' : '卖'
}

function getShowYk(item) {
    return  formatNumber(item.get('showYk'), 2)
}

function getOpenClose(item) {
    return parseInt(item.get('openClose')) === OPEN ? '开仓' : '平仓'
}

function getOpenCloseWithBTC(item) {
    return parseInt(item.get('openClose')) === OPEN ? '买' : '卖'
}

function getOrderPrice(item) {
    return parseInt(item.get('orderType')) === LIMITED_PRICE ? item.get('orderPrice') : '市价'
}

function getStatus(item) {
    let status = item.get('status');
    switch (status) {
        case -1:
            return '下单失败';
        case 1:
            return '下单成功';
        case 3:
            return '撤单';
        case 4:
            return '成交';
        case 5:
            return '部分成交';
        default:
            return ''
    }
}

export const FUTURE = 0;
export const BITCOIN = 1;

export const MARKET_TAB = [
    '期货', '数字货币'
]

export const BTC_TABLE = {
    key: 'order',
    name: '数字货币',
    header: ['币种', '价格/操作', '成交量', '成交时间'],
    empty: '暂无持仓',
    row: [['contractName'], ['orderPrice', 'openClose'], ['orderNum'], ['time']],
    func: {contractName: getContractName, openClose: getOpenCloseWithBTC, time: getTime},
}

// 交易页面显示的数据内容
export const HOLDING_LIST = 0;
export const ORDER_LIST = 1;
export const TRADE_LIST = 2;
export const CLOSE_LIST = 3;

export const TRADE_TABLE = [
    {
        key: 'holding',
        name: '持仓',
        header: ['合约/单号', '买卖/币种', '持仓/可平', '盈亏/均价'],
        empty: '暂无持仓',
        row: [['contractName', 'id'], ['side', 'currency'], ['futureNum', 'kp'], ['showYk', 'futurePrice']],
        func: {side: getSide, showYk: getShowYk},
    }, {
        key: 'order',
        name: '委托',
        header: ['合约/单号', '买卖/币种', '手数/开平', '价格/状态'],
        empty: '暂无委托',
        row: [['contractName', 'id'], ['side', 'currency'], ['orderNum', 'openClose'], ['orderPrice', 'status']],
        func: {side: getSide, openClose: getOpenClose, orderPrice: getOrderPrice, status: getStatus},
    }, {
        key: 'trade',
        name: '成交',
        header: ['合约/单号', '买卖/币种', '手数/开平', '价格/手续费'],
        empty: '暂无成交',
        row: [['contractName', 'id'], ['side', 'currency'], ['orderNum', 'openClose'], ['tradePrice', 'sxf']],
        func: {side: getSide, openClose: getOpenClose},
    }, {
        key: 'closeOut',
        name: '平仓',
        header: ['合约/单号', '买卖/币种', '开价/平价', '盈亏/手数'],
        empty: '暂无持仓',
        row: [['contractName', 'id'], ['side', 'currency'], ['kcjj', 'tradePrice'], ['showYk', 'orderNum']],
        func: {side: getSide, showYk: getShowYk},
    }
];
