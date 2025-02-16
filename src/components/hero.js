import React from "react"
import "../styles/common.css"

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Midwest Native Plant Society, Inc.</h1>
        <p>
          We advocate the vital role of native plants in the landscape to preserve
          ecological integrity and connect people with nature.
        </p>
        <a href="/subscribe" className="cta-button">
          JOIN OUR MAILING LIST
        </a>
      </div>
    </section>
  )
}

export default Hero
