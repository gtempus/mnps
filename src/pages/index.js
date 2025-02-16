import React from "react"
import Header from "../components/Header"
import Hero from "../components/Hero"
import Footer from "../components/Footer" // if you have one

const IndexPage = () => {
  return (
    <>
      <Header />
      <Hero />
      <main>
        {/* Example info sections or other content */}
        <section className="info-section">
          <h2>Upcoming Events</h2>
          <p>Check out our schedule of native plant workshops and conferences.</p>
          <a href="/events">View Events</a>
        </section>
        <section className="info-section">
          <h2>Resources</h2>
          <p>Learn more about planting and maintaining native species in your area.</p>
          <a href="/resources">Explore Resources</a>
        </section>
      </main>
      {/* Footer if you have one */}
      <Footer />
    </>
  )
}

export default IndexPage
