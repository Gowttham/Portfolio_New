import { useState, useEffect } from 'react'

const LINKS = [
  { label: '~/root',         href: 'home' },
  { label: '~/whoami',       href: 'about' },
  { label: '~/tech_stack',   href: 'skills' },
  { label: '~/logs',         href: 'internship' },
  { label: '~/binaries',     href: 'projects' },
  { label: '~/build_deps',   href: 'education' },
  { label: '~/benchmarks',   href: 'achievements' },
  { label: '~/ping',         href: 'contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive]     = useState('home')
  const [open, setOpen]         = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
      const scrollY = window.scrollY + window.innerHeight * 0.35
      LINKS.forEach(({ href }) => {
        const el = document.getElementById(href)
        if (el && scrollY >= el.offsetTop) setActive(href)
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setOpen(false)
  }

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`} id="navbar">
      <div className="nav-inner">
        <button className="nav-logo" onClick={() => scrollTo('home')} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
          G<span>_</span>
        </button>

        <button
          className={`nav-toggle${open ? ' open' : ''}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
          id="navToggle"
        >
          <span /><span /><span />
        </button>

        <ul className={`nav-links${open ? ' open' : ''}`} id="navLinks">
          {LINKS.map(({ label, href }) => (
            <li key={href}>
              <button
                className={`nav-link${active === href ? ' active' : ''}`}
                onClick={() => scrollTo(href)}
                data-section={href}
              >
                {label}
              </button>
            </li>
          ))}
          <li className="nav-cv-mobile">
            <a
              href="/Gowttham_CV.pdf"
              download="Gowttham_S_CV.pdf"
              className="btn btn-cv nav-cv-btn"
              id="navDownloadCVBtn"
              onClick={() => setOpen(false)}
            >
              <i className="fa-solid fa-download" /> Extract_CV.pdf
            </a>
          </li>
        </ul>

        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <a
            href="/Gowttham_CV.pdf"
            download="Gowttham_S_CV.pdf"
            className="btn btn-cv nav-cv-desktop"
            id="navDownloadCVBtnDesktop"
            aria-label="Download CV"
          >
           <i className="fa-solid fa-download" /> Extract_CV.pdf
          </a>
        </div>
      </div>
    </nav>
  )
}
