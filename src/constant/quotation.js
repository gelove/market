// 请求间隔（毫秒）
export const REQUEST_INTERVAL = 5000;

// 显示K线的数据点时间间隔（分）, 0 表示分时图
export const QUOTATION_INTERVAL = 1;

// 显示的数据点数量
export const QUOTATION_LINES = 50;

export const QUOTATION_DISPLAY =  ['合约', '最新价', '涨跌幅']

// K线图按钮
export const KLINE_BUTTON = [
    {code: 'ONE', name: '1分钟', value: 1},
    {code: 'FIVE', name: '5分钟', value: 5},
    {code: 'TEN', name: '10分钟', value: 10},
    {code: 'THIRTY', name: '30分钟', value: 30},
    {code: 'D', name: '日K', value: 1440},
    {code: 'TIME', name: '分时', value: 0},
];

// 市场
export const MARKETS = [
    {code: 'stock', name: '证券'},
    {code: 'future', name: '期货'},
    {code: 'forex', name: '外汇'},
    {code: 'bitCoin', name: '数字货币'},
    {code: 'fund', name: '基金'},
];