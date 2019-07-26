import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle, homeButton }) => (
  <header>
    <h1>
      {homeButton ? <Link to="/" className="home-button link" > {"<"} </Link> : null}
    </h1>

    <div className="title">
      {console.log('[homeButton]', homeButton)}

      <h1 style={{ margin: 0 }}>
        <Link to="/" className="link" >
          {siteTitle}
        </Link>
      </h1>
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
