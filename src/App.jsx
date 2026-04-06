import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Internship from './components/Internship'
import Projects from './components/Projects'
import Education from './components/Education'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './index.css'

export default function App() {
  // AOS-like scroll reveal
  useEffect(() => {
    const revealAll = () => {
      document.querySelectorAll('.aos-hidden, .aos-right, .aos-left').forEach((el) => {
        const rect = el.getBoundingClientRect()
        if (rect.top < window.innerHeight - 40) {
          el.classList.add('aos-visible')
        }
      })
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay = parseInt(entry.target.style.transitionDelay) || 0
            setTimeout(() => entry.target.classList.add('aos-visible'), delay)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    )

    // Small delay so DOM is painted
    setTimeout(() => {
      document.querySelectorAll('.aos-hidden, .aos-right, .aos-left').forEach((el) => observer.observe(el))
      revealAll()
    }, 100)

    window.addEventListener('scroll', revealAll, { passive: true })
    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', revealAll)
    }
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Internship />
        <Projects />
        <Education />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
