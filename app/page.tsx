import { Hero } from "../components/Hero"
import { About } from "../components/About"
import { Projects } from "../components/Projects"
import { Experience } from "../components/Experience"
import { Contact } from "../components/Contact"
import { Footer } from "../components/Footer"
import { Navigation } from "../components/Navigation"

export default function App() {
  return (
    <div className="min-h-screen bg-gray-900 font-sans">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  )
}
