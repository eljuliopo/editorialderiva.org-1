import React from "react"
import sea2 from "../images/sea2.gif"

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

export default ({ siteTitle }) => (
    <div id='inicio' style={{
      width: '100%',
      height: '200px',
      display: 'inline-block',
      opacity: 0.9,
      backgroundImage: `url(${sea2})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        backgroundBlendMode: 'saturation',
        filter: 'grayscale(1)',
        fontSize: 'mobile ? 2em : 4em',
        fontWeight: 'normal',
        marginBottom: '0',
        marginTop: '0em',
      }}
      />

)
