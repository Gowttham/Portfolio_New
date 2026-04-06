const SKILLS = [
  {
    icon: 'fa-code',
    title: 'Languages',
    items: ['C', 'Python', 'JavaScript (Intermediate)', 'SQL', 'Java (Beginner)'],
  },
  {
    icon: 'fa-globe',
    title: 'Web / Stack',
    items: ['HTML', 'CSS', 'Bootstrap', 'React JS', 'MERN Stack'],
  },
  {
    icon: 'fa-brain',
    title: 'Concepts',
    items: ['DSA in Python (Intermediate)', 'DBMS', 'SQL & DBMS'],
  },
  {
    icon: 'fa-heart-pulse',
    title: 'Soft Skills',
    items: ['Problem Solving', 'Attention to Detail', 'Adaptability'],
  },
  {
    icon: 'fa-toolbox',
    title: 'Tools',
    items: ['MS Office', 'Google Workspace'],
  },
]

const CERTS = [
  'Microsoft Azure AI Fundamentals',
  'SQL & DBMS',
  'DSA in Python',
  'JavaScript',
  'HTML & CSS',
]

export default function Skills() {
  return (
    <section className="section section-alt" id="skills">
      <div className="container">
        <div className="section-header aos-hidden">
          <span className="section-tag">What I Know</span>
          <h2 className="section-title">Technical Skills</h2>
        </div>

        <div className="skills-grid aos-hidden" style={{ transitionDelay: '100ms' }}>
          {SKILLS.map(({ icon, title, items }) => (
            <div className="skill-group" key={title}>
              <div className="skill-group-header">
                <i className={`fa-solid ${icon}`} />
                <h3>{title}</h3>
              </div>
              <div className="skill-tags">
                {items.map((item) => (
                  <span className="tag" key={item}>{item}</span>
                ))}
              </div>
            </div>
          ))}

          {/* Certifications — full width */}
          <div className="skill-group skill-group-full">
            <div className="skill-group-header">
              <i className="fa-solid fa-certificate" />
              <h3>Certifications</h3>
            </div>
            <div className="skill-tags">
              {CERTS.map((c) => (
                <span className="tag tag-cert" key={c}>{c}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
