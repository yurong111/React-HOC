import React from 'react'
import withPP from './props-props-proxy/index'
// import withPP from './refs-props-proxy/index'
// import withPP from './state-props-proxy/index'
// import withPP from './element-wapped-props-proxy/index'
// import withII from './Inheritance-Inversion/index'

class testHOC extends React.Component {
  state = {
    str: '我是state数据',
    isLoading: true
  }

  /* doSomething =() => {
    console.log('do something:', this.props.data)
  } */

  componentDidMount() {
    console.log('wrapped-component-didmount', this.props, this.state)
    /* let {getState} = this.props
    getState && getState(this.state) */

    setTimeout(() => {
      this.setState({isLoading: false, str: '延时后的state'}) // 高阶组件中的渲染劫持 不会因为这个属性变化 而变更state
    }, 3000);
  }

  render() {
    console.log('wrapped-component-render', this.props, this.state)
    return (
      <div>
        testHOC
      </div>
    )
  }
}

export default withPP(testHOC)
