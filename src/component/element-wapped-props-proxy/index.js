/**
 * 增加元素标签
 */

import React from 'react'

function withPP(WrappedComponent) {
  return class Index extends React.Component {
    constructor(props) {
      super(props)
    }

    render() {
      return (
        <div className='container'>
          <h1>我是标题</h1>
          <WrappedComponent {...this.props}/>
        </div>
      )
    }
  }
}

export default withPP
