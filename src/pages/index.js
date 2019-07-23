import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Bonjour !</h1>
    <p>Ceci est le Travail de Fin d'Etude de Sam Mahaux.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Aller à la page 2</Link>
  </Layout>
)

export default IndexPage
