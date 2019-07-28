import React from "react"
import { Component } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Link from "../components/link"

import { validTypes, supportedExplorers } from "../helpers/constants";

class IndexPage extends Component {
  componentDidMount() {
    let split = this.props["*"].split("/")
    let data = { net: split[0], type: split[1], hash: split[2] }
    this.setState({ data: data, valid: validTypes.indexOf(data.type) !== -1 })
  }

  componentWillUnmount() {}

  state = {
    data: undefined,
    valid: false,
  }

  render() {
    return (
      <Layout>
        <SEO title="Home" />
        {!this.state.valid ? (
          <h1>Invalid</h1>
        ) : (
          Object.keys(supportedExplorers).map((explorer, i) => (
            <Link name={explorer} buildURL={supportedExplorers[explorer]} data={this.state.data} />
          ))
        )}
      </Layout>
    )
  }
}

export default IndexPage
