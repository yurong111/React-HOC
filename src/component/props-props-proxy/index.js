/**
 * 操作 props
 * this.props 获取被包裹组件原有的 props, 可进行 增删改查 操作后回传
 */
import React from 'react'

function withPP(WrappedComponent) {
  return class Index extends React.Component {
    constructor(props) {
      super(props)
      this.state={
        test: ''
      }
    }
    componentDidMount() {
      console.log('hoc-component-didmount', this.props, this.state)
      this.setState({
        test: 'didmount-test'
      })
    }
    render() {
      let newProps = {
        test: 'add new field'
      }

      console.log('hoc-component-render', this.props, this.state)

      return <div>
        <WrappedComponent {...this.props} {...newProps} test={this.state.test}/>  {/* 这里一般会将其原本的props传回去，否则，被包裹组件的props就为空了 */}
      </div>
    }
  }
}

 export default withPP
