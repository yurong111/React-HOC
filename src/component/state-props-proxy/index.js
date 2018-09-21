/**
 * 获取state
 * 相当于父子组件交互，高阶组件（父）将方法作为属性传递给被被包裹组件（子），被包裹组件通过this.props.fuc的方式，将state作入参调用
 */

import React from 'react'

function withPP(WrappedComponent) {
  return class Index extends React.Component {
    constructor(props) {
      super(props)
    }

    getState = (state) => {
      console.log('拿到被包裹函数的state:', state)
    }

    render() {
      return (
        <WrappedComponent {...this.props} getState={this.getState}/>
      )
    }
  }
}

export default withPP
