import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <p>Aku nasywa nur f ini random image yg aku screenshost</p>
      <StaticImage
        alt="coba upload"
        src="../images/logo-sevvy.png"
      />
    </Layout>
  )
}


export default AboutPage