//BaseComponent.js   component的基类方法
import React, {Component} from 'react'
import {is} from 'immutable'

class BaseComponent extends Component {
    constructor(props, context, updater) {
        super(props, context, updater)
    }

    shouldComponentUpdate(nextProps, nextState) {
        const thisProps = this.props || {};
        const thisState = this.state || {};
        nextState = nextState || {};
        nextProps = nextProps || {};
        // TODO 判断 当前 navigator 是否 focused

        if (Object.keys(thisProps).length !== Object.keys(nextProps).length ||
            Object.keys(thisState).length !== Object.keys(nextState).length) {
            return true
        }

        for (const key in nextProps) {
            if (!nextProps.hasOwnProperty(key)) continue;
            // 注意 navigation 和 screenProps
            if (key !== 'navigation' && key !== 'screenProps' && !is(thisProps[key], nextProps[key])) {
                // console.log('props key', key, JSON.stringify(thisProps[key]), JSON.stringify(nextProps[key]))
                return true
            }
        }

        for (const key in nextState) {
            if (!nextState.hasOwnProperty(key)) continue;
            if (!is(thisState[key], nextState[key])) {
                return true
            }
        }
        return false
    }
}

export default BaseComponent