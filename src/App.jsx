// ============================================================
// App.jsx — Root component
// Section order mirrors bricksocials-7uki.webflow.io exactly:
// 1. Navbar
// 2. Hero (headline + scrolling media grid)
// 3. About (Manifesto lines + Symphony + Logo marquee)
// 4. Services (Content level-up + Workflow + Industries)
// 5. Testimonials (dual-row marquee)
// 6. Portfolio (BRICK Agency / "But what about the rest?")
// 7. Gallery (visual showcase grid)
// 8. Contact (CTA section)
// 9. Footer
// ============================================================
import './App.css'
import Navbar        from './components/Navbar/Navbar'
import Hero          from './components/Hero/Hero'
import About         from './components/About/About'
import Services      from './components/Services/Services'
import Testimonials  from './components/testimonials/testimonials'
import Portfolio     from './components/Portfolio/Portfolio'
import Gallery       from './components/Gallery/Gallery'
import Contact       from './components/Contact/Contact'
import Footer        from './components/footer/footer'

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <Portfolio />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
