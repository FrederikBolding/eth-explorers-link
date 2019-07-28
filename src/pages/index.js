import React from "react"
import { Component } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Link from "../components/link"

import { netNames, typeNames, supportedExplorers } from "../helpers/constants"
import MadeWithLove from "../components/MadeWithLove"

class IndexPage extends Component {
  componentDidMount() {
    let split = this.props["*"].split("/")
    let data = { net: split[0], type: split[1], hash: split[2] }
    this.setState({ data: data, valid: data.net in netNames && data.type in typeNames && data.hash.length > 0 })
  }

  componentWillUnmount() {}

  state = {
    data: undefined,
    valid: false,
  }

  render() {
    return (
      <Layout>
        <SEO title={this.state.data ? netNames[this.state.data.net] + " " + typeNames[this.state.data.type] : ""} />
        <h1>Ethereum Explorer List</h1>
        {!this.state.valid ? (
          <h1>Invalid</h1>
        ) : (
          <>
            <h2>
              {netNames[this.state.data.net]} {typeNames[this.state.data.type]}
            </h2>
            <h3>{this.state.data.hash}</h3>
            {Object.keys(supportedExplorers).map((explorer, i) => (
              <Link
                name={explorer}
                buildURL={supportedExplorers[explorer]}
                data={this.state.data}
              />
            ))}
          </>
        )}
        <MadeWithLove
          by="Frederik Bolding"
          link="https://frederikbolding.com"
        />
      </Layout>
    )
  }
}

export default IndexPage
