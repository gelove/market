// Tab 按钮大小
import {IOS} from "./system";
import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export const TAB_SIZE = 30;

// 返回按钮大小
export const BACK_ICON_WIDTH = 37;
export const BACK_ICON_HEIGHT = 37;

// 页面标题文字大小
export const TITLE_SIZE = 18;
// 头部按钮字体大小
export const HEADER_BTN = 14;
export const LIST_TITLE_FONT_SIZE = 12;

export const YELLOW = '#F68A0E';
export const WHITE = '#E1E1E1';
export const BACK_COLOR = '#FFF';
export const BLACK = '#000';
export const GREY = '#999';
export const DEEP_GREY = '#333';
export const RED = '#FD1050';
export const DEEP_RED = '#800000';
export const DARK_RED = '#ad1f23';
export const MAIN_RED = '#931317';
export const GREEN = '#0CF49B';
export const BLUE = '#03e2f4';
export const DEEP_BLUE = '#376df4';

export const RISE = '#ED4E46';
export const FALL = '#5DA818';
export const MASK = 'rgba(255,255,255,0.05)';

// 主色调
export const MAIN_COLOR = RED;

export const HEADER_COLOR = '#072391';

// 页面背景颜色
export const BACKGROUND_COLOR = '#F9FAFF';

// 行情页每行数据的高度
export const ITEM_HEIGHT = 45;
export const SEPARATOR_HEIGHT = 1;
export const HEAD_HEIGHT = 35;

// 字体颜色
export const FONT_COLOR = BLACK;

// 按钮背景颜色
export const BUTTON_BACKGROUND_COLOR = MAIN_COLOR;

// 按钮禁用颜色
export const BUTTON_DISABLED_COLOR = GREY;

// 分割线颜色
export const SEPARATOR_COLOR = '#373737';

export const BORDER_COLOR = '#707070';
//边距
export const MARGIN = 10;

export const HEADER_HEIGHT = IOS ? 30 : 40;
//List item back
export const LIST_ITEM_BACKGROUND = BACKGROUND_COLOR;

export const CENTER_BORDER_RADIUS = 8;

export const COMMON_STYLE = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: BACKGROUND_COLOR,
    },
    loadingImage: {
        width: 50,
        height: 50,
    },
    loadingImageView: {
        position: 'absolute',
        width,
        height,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleStyle: {
        color: WHITE,
        fontSize: TITLE_SIZE,
    },
    tabBarStyle: {
        width: TAB_SIZE,
        height: TAB_SIZE,
        resizeMode: 'contain'
    },
    headerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        width: width,
        flexDirection: 'row'
    },
    fontStyle: {
        color: FONT_COLOR,
        fontSize: 14
    },
    marketHeaderStyle: {
        height: HEAD_HEIGHT,
        justifyContent: 'center',
        backgroundColor: LIST_ITEM_BACKGROUND,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: SEPARATOR_COLOR
    },
    marketHeaderCell: {
        flex: 1,
        backgroundColor: LIST_ITEM_BACKGROUND,
        fontSize: LIST_TITLE_FONT_SIZE,
        color: GREY,
        textAlign: 'center'
    }
});