import {Platform, Dimensions} from "react-native";

const {width, height} = Dimensions.get('window');

const IOS = Platform.OS === 'ios';

export {
    IOS,
    width,
    height,
}