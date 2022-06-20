import * as React from "react"
import { Parallax } from "@react-spring/parallax"
import Layout from "../components/layout"
import Hero from "../components/hero"
// import Projects from "../components/projects"
import About from "../components/about"
import Contact from "../components/contact"

console.log('Built by Jake using free tech: Cara Theme by LekoArts, provided by Gatsby on Netlify')
console.log(' developer - https://jakemitchell.xyz/')
console.log(' theme - https://github.com/LekoArts/gatsby-themes/tree/main/themes/gatsby-theme-cara')
console.log(' designer - https://www.lekoarts.de?utm_source=cara&utm_medium=Theme')
console.log(' framework - https://www.gatsbyjs.com/')
console.log(' servers - https://www.netlify.com/')

const Cara = () => (
  <Layout>
    <Parallax pages={3}>
      <Hero offset={0} factor={1} />
      {/* <Projects offset={1} factor={2} /> */}
      <About offset={1} factor={1} />
      <Contact offset={2} factor={1} />
    </Parallax>
  </Layout>
)

export default Cara
