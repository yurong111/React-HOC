/**
 * 渲染劫持
 */

import React from 'react'

function withII(WrappedComponent) {
  class Index extends WrappedComponent {
    constructor(props) {
      super(props)
    }

    componentDidMount() {
      console.log('withII-didmount', this.state, this.props)
    }

    render() {
      console.log('withII-render', this.state, this.props)
      /* if (!this.props.isSubLoading) {
        return super.render()
      }
      return <div>Loading...</div> */
      
      return (
        <div>
          <h2>HOC Debugger Component</h2>
          <p>Props</p> <pre>{JSON.stringify(this.props, null, 2)}</pre>
          <p>State</p><pre>{JSON.stringify(this.state, null, 2)}</pre>
          {super.render()}
        </div>
      )
    }
  }

  Index.displayName = `withII(${getDisplayName(WrappedComponent)})`;
  return Index
}

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

export default withII
