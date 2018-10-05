/**
 * Created by allen on 2017/7/4.
 */
import {Buffer} from 'buffer'
import accounting from 'accounting'

export function base64Decode(val) {
    val = val ? val : '';
    let str = new Buffer(val, 'base64');
    return str.toString()
}

export function formatNumber(val, num) {
    return accounting.formatNumber(val, num, '')
}

export function formatChangeVal(val) {
    if (!val) {
        return 0
    } else {
        // 去掉尾部的0
        return val.replace(/(0+)\b$/, "")
    }
}

export function getOperationType(val) {
    switch (val) {
        case 1 :
            return '全部操作';
        case 2 :
            return '开仓操作';
        case 3 :
            return '平仓操作';
        default:
            return '全部操作';
    }
}