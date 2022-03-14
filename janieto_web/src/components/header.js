import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import "../styles/style.css"

const Header = ({ siteTitle, menuLinks }) => (
  <header
    style={{
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      {/* <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1> */}

      {/* navbar */}
      <div>
          <nav>

            <ul style={{ display: "flex", flex: 1 }}>
              {menuLinks.map(link => (
                <li 
                  key={link.name}
                  style={{
                    listStyle: `none`,
                    padding: `1rem`
                  }}
                >
                  <Link 
                  to={link.link}
                  className="nav-link" 
                  >{link.name}</Link>
                </li>
              ))}
            </ul>

          </nav>
      </div> 
      {/* navbar */}

    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
