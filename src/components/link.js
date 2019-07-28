import React, { Component } from "react"

class Link extends Component {
  render() {
    return (
      <div>
        <a href={this.props.buildURL(...Object.values(this.props.data))}>{this.props.name}</a>
      </div>
    )
  }
}

export default Link
