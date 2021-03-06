import React from "react"
import { Link } from "gatsby"
import Layout from "./../components/layout"

const IndexPage = () => {
  return (
    <Layout>
      <h1>Hello</h1>
      <h2>I am Nazim</h2>
      <p>
        Need a developer? Go to this <Link to="/contact">page</Link>
      </p>
    </Layout>
  )
}

export default IndexPage
