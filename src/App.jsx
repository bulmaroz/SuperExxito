import Header from './components/Header'
import Hero from './components/Hero'
import Promotions from './components/Promotions'
import SundaySpecials from './components/SundaySpecials'
import Catalog from './components/Catalog'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Promotions />
        <SundaySpecials />
        <Catalog />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
