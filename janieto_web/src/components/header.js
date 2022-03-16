import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Container } from "react-bootstrap" 

import MenuNav from "./menunav"
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/style.css"


const Header = ({ siteTitle }) => {

  return (
    <header className="layoutHeader">
      <Container>

        <div className="m-auto text-center">
          <StaticImage
          src="../images/jose_nieto.jpeg"
          className="autorImg"
          width={200}
          quality={95} 
          formats={["auto", "webp", "avif"]}
          alt="Jose Nieto"
          style={{ marginBottom: `1.45rem`}}
          />

        <Link to="/">
            <h1 className="mainHeader">
              <span className="redToneDark boldText">JOSE </span>
              <span className="redToneMid">NIETO</span>
            </h1>
        </Link>
        </div>

      </Container>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
