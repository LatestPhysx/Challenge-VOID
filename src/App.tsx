import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Section from './Components/Section/Section'
import DemoSection from './Components/DemoSection/DemoSection'
import ParcourSection from './Components/ParcourSection/ParcourSection'
import TransformSection from './Components/TransformSection/TransformSection'
import GenerationSection from './Components/GenerationSection/GenerationSection'
import FormulasSectionTop from './Components/FormulasSection/FormulasSectionTop'
import FormulasSectionBottom from './Components/FormulasSection/FormulasSectionBottom'
import GamesSection from './Components/GamesSection/GamesSection'
import StatsSection from './Components/StatsSection/StatsSection'
import ContactSection from './Components/ContactSection/ContactSection'
import Footer from './Components/Footer/Footer'

function App() {

  return (
    <>
      <div>
        <Navbar />
        <Section />
        <DemoSection />
        <ParcourSection />
        <TransformSection />
        <GenerationSection />
        <FormulasSectionTop />
        <FormulasSectionBottom />
        <GamesSection />
        <StatsSection />
        <ContactSection />
        <Footer />
      </div>
    </>
  )
}

export default App