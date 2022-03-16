import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import {Container} from "react-bootstrap" 

import Header from "./header"
import MenuNav from "./menunav"
import Footer from "./footer"
import "../styles/style.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
            menuLinks {
              name
              link
            }
        }
      }
    }
  `)

  return (
    <>
     {/* Header */}
     <MenuNav menuLinks= { data.site.siteMetadata.menuLinks } />
    <Header siteTitle={ data.site.siteMetadata?.title || `Title` } />
     {/* Header */}

      {/* Main Body */}
      <Container>
        <main className="m-auto text-center">{children}</main>
      </Container>
      {/* Main Body */}


      {/* Footer */}
      <Container 
        style={{ marginTop: `50px` }}  
      >
       <Footer />
      </Container>
      {/* Footer */}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
