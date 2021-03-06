import React from 'react'
import { connect } from 'react-redux'

class Ad extends React.Component {
  constructor() {
    super()
    this.state = {
    }
  }

  // 动画的启动
  //  Ajax 数据的拉取操作、一些定时器的启动
  componentDidMount() {
    console.log("component did mount");
  }

  componentWillUnmount() {
    console.log("component will unmount");
  }
  render() {
    return (
      <div />
    )
  }
}

// -------------------redux react 绑定--------------------

function mapStateToProps(state) {
  return {
    userInfo: state.userInfo
  }
}

function mapDispatchToProps(dispatch) {
  return {
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Ad)
