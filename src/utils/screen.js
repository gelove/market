// screen.js
import {
    PixelRatio,
    Dimensions,
    Platform,
    StyleSheet
} from 'react-native';

// 返回的是point pt
const {width, height} = Dimensions.get('window');
let fontScale = PixelRatio.getFontScale();  //返回字体大小缩放比例
let pixelRatio = PixelRatio.get();
console.log('screen util', width, height, fontScale, pixelRatio, StyleSheet.hairlineWidth);
export const screenW = width;
export const screenH = height;
// iPhoneX
const X_HEIGHT = 812;
export const X_BOTTOM = 34;

// iphone7  逻辑分辨率(px): 1334 * 750, 物理分辨率与逻辑分辨率一致
// iphone7p 逻辑分辨率(px): 2208 * 1242, 物理分辨率: 1920 * 1080
// iphoneX  逻辑分辨率(px): 2436 * 1125, 物理分辨率与逻辑分辨率一致
// 以iphone7 plus为基准,如果以其他尺寸为基准的话,请修改下面对应的尺寸即可.
// 像素密度
export const DEFAULT_DENSITY = 3;
// 基准宽度，单位pt(即 point)
const baseW = 414; // 1242/3
// 基准高度，单位pt
const baseH = 736; // 2208/3
// 缩放比例
const scaleX = screenW / baseW;
const scaleY = screenH / baseH;

/**
 * 屏幕适配,缩放size,px转为pt
 * @param size 传入设计稿上的px，以iphone7 plus为基准
 * @returns {Number}
 */
export function toPtX(size) {
    return Math.round(size / DEFAULT_DENSITY * scaleX + 0.5);
}

/**
 * 屏幕适配,缩放size,px转为pt
 * @param size 传入设计稿上的px，以iphone7 plus为基准
 * @returns {Number}
 */
export function toPtY(size) {
    return Math.round(size / DEFAULT_DENSITY * scaleY + 0.5);
}

/**
 * 判断是否为iphoneX
 * @returns {boolean}
 */
export function isIphoneX() {
    return (
        Platform.OS === 'ios' &&
        !Platform.isPad &&
        !Platform.isTVOS &&
        (screenW === X_HEIGHT || screenH === X_HEIGHT)
    );
}

/**
 * 根据是否是iPhoneX返回不同的样式
 * @param iphoneXStyle
 * @param regularStyle
 * @returns {*}
 */
export function ifIphoneX(iphoneXStyle, regularStyle) {
    if (isIphoneX()) {
        return iphoneXStyle;
    }
    return regularStyle;
}

/**
 * 根据是否是iPhoneX返回不同的样式
 * @param iphoneXStyle
 * @param iosStyle
 * @param androidStyle
 * @returns {*}
 */
export function getScreenStyle(iphoneXStyle, iosStyle, androidStyle) {
    if (isIphoneX()) {
        return iphoneXStyle;
    }
    if (Platform.OS === 'ios') {
        return iosStyle;
    }
    if (androidStyle) {
        return androidStyle;
    }
    return iosStyle
}
