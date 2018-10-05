import Toast from 'teaset/components/Toast/Toast'

/**
 *
 * @param message
 * @param position - top: 窗口靠上位置 - bottom: 窗口靠下位置 - center: 窗口中间位置
 * @param duration - short: 2000 毫秒 - long: 3500毫秒
 */
export default function toast(message, position, duration) {
    position = position || 'center';
    duration = duration || 'short';
    Toast.message(message, duration, position )
}