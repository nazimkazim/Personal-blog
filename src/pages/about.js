import React from "react"
import { Link } from "gatsby"
import Layout from "./../components/layout"

const AboutPage = () => {
  return (
    <Layout>
      <h1>About</h1>
      <p>This page is about me</p>
      <p>
        <Link to="/contact">Want to reach me out?</Link>
      </p>
    </Layout>
  )
}

export default AboutPage
