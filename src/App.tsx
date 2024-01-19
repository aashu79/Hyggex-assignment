import FaqSection from "./components/FaqSection"
import Hero from "./components/Hero"
import HeroLogo from "./components/HeroLogo"
import Navbar from "./components/Navbar"
import PathPreview from "./components/PathPreview"


function App() {
  

  return (
      <div>
          <Navbar/>
          <PathPreview/>
          <Hero/>
          <HeroLogo/>
          <FaqSection/>
      </div>
  )
}

export default App
