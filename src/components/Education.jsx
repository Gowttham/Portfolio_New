const EDUCATION = [
  {
    id: 'be',
    primary: true,
    badgeIcon: 'fa-university',
    level: 'Bachelor of Engineering',
    degree: 'CSE – IoT & CS Including BCT',
    institution: 'SNS College of Engineering, Coimbatore',
    year: '2023 – 2027',
    score: 'CGPA: 8.37 (till 5th sem)',
  },
  {
    id: 'hsc',
    primary: false,
    badgeIcon: 'fa-school',
    level: 'Higher Secondary (HSC)',
    degree: 'Government Boys Higher Secondary School',
    institution: 'Komarapalayam',
    year: 'Apr 2023',
    score: '82.8%',
  },
  {
    id: 'sslc',
    primary: false,
    badgeIcon: 'fa-book',
    level: 'Secondary School (SSLC)',
    degree: 'Government High School – Buddher Street',
    institution: "Komarapalayam",
    year: 'Apr 2021',
    score: 'All Pass',
  },
]

export default function Education() {
  return (
    <section className="section" id="education">
      <div className="container">
        <div className="section-header aos-hidden">
          <span className="section-tag">git log --all --education</span>
          <h2 className="section-title">Build History</h2>
        </div>

        <div className="education-grid aos-hidden" style={{ transitionDelay: '100ms' }}>
          {EDUCATION.map(({ id, primary, badgeIcon, level, degree, institution, year, score }) => (
            <div className={`edu-card${primary ? ' edu-card-primary' : ''}`} key={id}>
              <div className="edu-badge"><i className={`fa-solid ${badgeIcon}`} /></div>
              <div className="edu-info">
                <span className="edu-level">{level}</span>
                <h3>{degree}</h3>
                {institution && (
                  <p className="edu-institution">
                    <i className="fa-solid fa-location-dot" /> {institution}
                  </p>
                )}
                <div className="edu-meta">
                  <span><i className="fa-solid fa-calendar-alt" /> {year}</span>
                  <span className="edu-score"><i className="fa-solid fa-star" /> {score}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
