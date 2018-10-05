export function getRouteName(nav) {
    let route = nav.getIn(['routes', nav.get('index')])
    if (route.get('routes') === undefined) {
        return route.get('routeName')
    }
    return getRouteName(route)
}