import React from "react"
import { Link } from "gatsby"

import Layout from "../../templates/layout"
import Image from "../../components/image"
import SEO from "../../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>About Page</h1>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/">Go Home</Link> <br />
  </Layout>
)

export default IndexPage
