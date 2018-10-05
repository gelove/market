const types = {
    '[object Array]': 'array',
    '[object Object]': 'object',
    '[object String]': 'Str',
    '[object Number]': 'Num',
    '[object Boolean]': 'Bool',
};

export function getType(data) {
    if (data === null) {
        return 'null';
    }
    let type = typeof (data)
    if (typeof (data) === 'object') {
        let str = Object.prototype.toString.call(data);
        return types[str];
    }
    return type;
}