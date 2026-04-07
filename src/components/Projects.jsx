const PROJECTS = [
  {
    id: 'fire-dept',
    icon: 'fa-fire-extinguisher',
    date: 'Jan 2026',
    title: 'Real-Time Monitoring & Evaluation Software for Fire Department Applications',
    desc: 'Developed a Fire Department Monitoring & Evaluation System to manage Fire NOC applications, inspections, and compliance digitally.',
    bullets: [
      'Implemented risk-based inspection and analytics features to support better prioritization and decision-making.',
      'Improved transparency and efficiency through mobile-friendly workflows and public verification.',
    ],
    stack: ['HTML', 'CSS', 'JavaScript', 'Firebase'],
    github: 'https://github.com/Gowttham/Fire_Safety_Management_App',
  },
  {
    id: 'negotiation',
    icon: 'fa-cart-shopping',
    date: 'Jan 2024',
    title: 'DT Approach Negotiation E-Commerce',
    desc: 'A full-featured e-commerce platform featuring a unique price negotiation system allowing buyers and sellers to negotiate directly.',
    bullets: [
      'Implemented real-time Firebase backend for negotiation sessions and user management.',
      'Designed responsive UI with mobile-first approach for improved user experience.',
    ],
    stack: ['HTML', 'CSS', 'JavaScript', 'Firebase'],
    github: 'https://github.com/Gowttham/Negotiation_E_Commerce',
  },
]

export default function Projects() {
  return (
    <section className="section section-alt" id="projects">
      <div className="container">
        <div className="section-header aos-hidden">
          <span className="section-tag">ls -la /bin</span>
          <h2 className="section-title">Compiled Executables</h2>
        </div>

        <div className="projects-grid aos-hidden" style={{ transitionDelay: '100ms' }}>
          {PROJECTS.map(({ id, icon, date, title, desc, bullets, stack, github }) => (
            <div className="project-card" key={id}>
              <div className="project-card-top">
                <div className="project-card-dot r"></div>
                <div className="project-card-dot y"></div>
                <div className="project-card-dot g"></div>
              </div>
              <div className="project-icon"><i className={`fa-solid ${icon}`} /></div>
              <div className="project-meta-badge">{date}</div>
              <div className="project-body">
                <h3>{title}</h3>
                <p>{desc}</p>
                <ul className="project-bullet-list">
                  {bullets.map((b) => <li key={b}>{b}</li>)}
                </ul>
                <div className="project-stack">
                  {stack.map((s) => <span className="stack-tag" key={s}>{s}</span>)}
                </div>
              </div>
              <div className="project-links">
                <a href={github} target="_blank" rel="noopener noreferrer" className="project-link" id={`project-${id}-gh`}>
                  <i className="fa-brands fa-github" /> Source_Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
