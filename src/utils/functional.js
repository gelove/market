// 防抖，延迟操作，一段时间内只会执行最后一次操作
export function debounce(handle, delay) {
    let timer = 0;
    return function () {
        const _arg = arguments;
        timer && clearTimeout(timer);
        timer = setTimeout(() => {
            handle.apply(this, _arg);
            timer && clearTimeout(timer);
        }, delay)
    }
}

// 节流, 一段时间内只会执行一次第一次操作
export function throttle(handle, wait) {
    let lastTime = 0;
    return function () {
        let now = new Date().getTime();
        if (now - lastTime > wait) {
            // console.log(this)
            handle.apply(this, arguments);
            lastTime = now;
        }
    }
}