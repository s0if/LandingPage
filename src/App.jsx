// import React from 'react'

import Header from './components/Header/Header.jsx'
import Hero from './components/Hero/Hero.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import Section from './components/Section/Section.jsx'
import one from './photo/one.svg'
import two from './photo/two.png'
import three from './photo/three.png'

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Hero />
      <Section image={one} />
      <Section image={two} />
      <Section image={three} flag={true} />
    </div>
  )
}

export default App
