import { useState, useEffect } from 'react'

const PHRASES = [
  'building scalable web applications',
  'solving real-world problems',
  'exploring IoT & Cyber Security',
  'crafting beautiful UI experiences',
]

export default function Hero() {
  const [tagline, setTagline] = useState('building scalable web applications.')

  useEffect(() => {
    let idx = 0, charIdx = 0, deleting = false
    let timer
    const base = 'Passionate about '

    function type() {
      const phrase = PHRASES[idx]
      if (!deleting) {
        setTagline(base + phrase.slice(0, charIdx + 1) + '.')
        charIdx++
        if (charIdx === phrase.length) {
          deleting = true
          timer = setTimeout(type, 2200)
          return
        }
      } else {
        charIdx--
        setTagline(base + phrase.slice(0, charIdx) + (charIdx ? '.' : ''))
        if (charIdx === 0) {
          deleting = false
          idx = (idx + 1) % PHRASES.length
        }
      }
      timer = setTimeout(type, deleting ? 36 : 60)
    }

    const init = setTimeout(type, 1000)
    return () => { clearTimeout(init); clearTimeout(timer) }
  }, [])

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className="hero" id="home">
      <div className="hero-inner">
        {/* Left */}
        <div className="hero-text hero-entry" style={{ animationDelay: '0.1s' }}>
          <p className="hero-greeting">Initializing...</p>
          <h1 className="hero-name">Gowttham<span className="accent"> S</span></h1>
          <h2 className="hero-title">
            <span className="accent">MERN Stack Developer</span> <span className="divider">|</span> CSE (IoT & Cyber Security)
          </h2>
          <p className="hero-tagline">{tagline}</p>
          
          <div className="mern-badges">
            <span className="mern-badge mern-m" title="MongoDB">MongoDB</span>
            <span className="mern-badge mern-e" title="Express.js">Express.js</span>
            <span className="mern-badge mern-r" title="React">React</span>
            <span className="mern-badge mern-n" title="Node.js">Node.js</span>
          </div>
          
          <div className="hero-btns" style={{ marginTop: '32px' }}>
            <button className="btn btn-primary" onClick={() => scrollTo('projects')} id="viewProjectsBtn">
              <i className="fa-solid fa-terminal" /> Execute Projects
            </button>
            <button className="btn btn-outline" onClick={() => scrollTo('contact')} id="contactMeBtn">
              <i className="fa-solid fa-paper-plane" /> Ping Me
            </button>
          </div>
          <div className="hero-socials">
            <a href="https://www.linkedin.com/in/gowttham-s/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" id="heroLinkedIn">
              <i className="fa-brands fa-linkedin-in" />
            </a>
            <a href="https://github.com/Gowttham" target="_blank" rel="noopener noreferrer" aria-label="GitHub" id="heroGitHub">
              <i className="fa-brands fa-github" />
            </a>
            <a href="https://leetcode.com/u/Gowttham/" target="_blank" rel="noopener noreferrer" aria-label="LeetCode" id="heroLeetcode">
              <i className="fa-solid fa-code" />
            </a>
            <a href="mailto:gowttham2006@gmail.com" aria-label="Email" id="heroEmail">
              <i className="fa-solid fa-envelope" />
            </a>
          </div>
        </div>

        {/* Right */}
        <div className="hero-image hero-entry" style={{ animationDelay: '0.3s' }}>
          <div className="profile-ring">
            <div className="terminal-header">
              <div className="term-dot r"></div>
              <div className="term-dot y"></div>
              <div className="term-dot g"></div>
              <div className="term-title">dev@gowttham: ~/profile</div>
            </div>
            <div className="profile-wrap">
              <img
                src="/Profile.png"
                alt="Gowttham S – Full Stack Developer"
                id="profileImg"
                onError={(e) => {
                  e.target.style.display = 'none'
                  e.target.parentElement.style.background = 'linear-gradient(135deg,#00d4ff,#00ff88)'
                }}
              />
            </div>
            <div className="ring-deco ring-1" />
            <div className="ring-deco ring-2" />
          </div>
        </div>
      </div>

      <div className="hero-scroll-hint">
        <span>Scroll down</span>
        <i className="fa-solid fa-chevron-down bounce" />
      </div>
    </section>
  )
}
