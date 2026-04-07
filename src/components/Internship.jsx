import { useState } from 'react'

const INTERNSHIPS = [
  {
    role: 'Full Stack Development Intern',
    company: 'CodSoft',
    period: 'Aug 2024 – Sep 2024',
    certImg: '/Codsoft Web Development.jpg',
    bullets: [
      <>Completed 3 key projects: developed a <strong>personal portfolio</strong>, company <strong>landing page</strong>, and a functional <strong>calculator app</strong> during the 4-week internship.</>,
      <>Enhanced technical skills: improved <strong>UI/UX design</strong>, responsive layouts, and JavaScript through hands-on development.</>,
      <>Gained real-world experience: strengthened full stack skills by working on practical, industry-oriented projects.</>,
    ],
  },
  {
    role: 'Cyber Security Intern (DFIR)',
    company: 'Bored Monk Cyber Security Services, Coimbatore',
    period: 'Jun 2025 – Jul 2025',
    certImg: '/DFIR CERTIFICATE.jpg',
    bullets: [
      <>Completed internship in <strong>DFIR (Digital Forensics and Incident Response)</strong>, gaining foundational and practical knowledge.</>,
      <>Learned key concepts including <strong>data acquisition &amp; recovery</strong>, dark web forensics, incident response, vulnerability assessment, and OSINT.</>,
      <>Hands-on exposure to <strong>virtual machines</strong>, cyber analysis techniques, and industry-standard forensic tools.</>,
    ],
  },
  {
    role: 'Cyber Security Intern (DFIR)',
    company: 'Ascentz Technologies, Coimbatore',
    period: 'Nov 2025 – Dec 2025',
    certImg: '/Acsentz Tech Certificate.jpg',
    bullets: [
      <>Completed internship in <strong>DFIR (Digital Forensics and Incident Response)</strong>, gaining foundational and practical knowledge.</>,
      <>Learned key concepts including <strong>data acquisition &amp; recovery</strong>, dark web forensics, incident response, vulnerability assessment, and OSINT.</>,
      <>Hands-on exposure to <strong>virtual machines</strong>, cyber analysis techniques, and industry-standard forensic tools.</>,
    ],
  },
]

export default function Internship() {
  const [modalImg, setModalImg] = useState(null)

  return (
    <section className="section" id="internship">
      <div className="container">
        <div className="section-header aos-hidden">
          <span className="section-tag">Experience</span>
          <h2 className="section-title">Internship</h2>
        </div>

        <div className="timeline aos-hidden" style={{ transitionDelay: '100ms' }}>
          {INTERNSHIPS.map(({ role, company, period, bullets, certImg }) => (
            <div className="timeline-item" key={company}>
              <div className="timeline-dot" />
              <div className="timeline-content">
                <div className="timeline-header">
                  <div className="timeline-header-left">
                    <h3>{role}</h3>
                    <span className="timeline-company">
                      <i className="fa-solid fa-building" /> {company}
                    </span>
                    <span className="timeline-period">
                      <i className="fa-solid fa-calendar" /> {period}
                    </span>
                  </div>
                  {certImg && (
                    <button
                      className="cert-btn"
                      id={`cert-${company.replace(/\s+/g, '-').toLowerCase()}`}
                      onClick={() => setModalImg(certImg)}
                    >
                      <i className="fa-solid fa-certificate" /> View Certificate
                    </button>
                  )}
                </div>
                <ul className="timeline-bullets">
                  {bullets.map((b, i) => <li key={i}>{b}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certificate Modal */}
      {modalImg && (
        <div className="cert-modal-overlay" onClick={() => setModalImg(null)}>
          <div className="cert-modal" onClick={e => e.stopPropagation()}>
            <button className="cert-modal-close" onClick={() => setModalImg(null)}>
              <i className="fa-solid fa-xmark" />
            </button>
            <img src={modalImg} alt="Certificate" className="cert-modal-img" />
            <a
              href={modalImg}
              download
              className="cert-modal-download"
            >
              <i className="fa-solid fa-download" /> Download
            </a>
          </div>
        </div>
      )}
    </section>
  )
}
