/**
 * 通过ref访问组件实例
 */

import React from 'react'

function withPP(WrappedComponent) {
  return class Index extends React.Component {
    constructor(props) {
      super(props)
      // this.instance = React.createRef()
    }

    getDom = (instance) => {
      console.log('instance', instance)
    }

    render() {
      return (
        <WrappedComponent ref={this.getDom} {...this.props}/>
      )
    }
  }
}

export default withPP
