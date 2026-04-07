const ACHIEVEMENTS = [
  {
    id: 'py3',
    colorClass: 'yi',
    icon: 'fa-brands fa-python',
    title: '3 Star Python',
    desc: <>Achieved 3-star rating on <strong>HackerRank</strong> in Python programming.</>,
  },
  {
    id: 'sql3',
    colorClass: 'bi',
    icon: 'fa-solid fa-database',
    title: '3 Star SQL',
    desc: <>Achieved 3-star rating on <strong>HackerRank</strong> in SQL challenges.</>,
  },
  {
    id: 'paper',
    colorClass: 'gi',
    icon: 'fa-solid fa-file-lines',
    title: 'Published Research – IJSREM',
    desc: <>Published a research paper titled <strong>"Sign Language to Regional Language Converter"</strong> in the IJSREM journal, focusing on accessible communication.</>,
  },
  {
    id: 'sih',
    colorClass: 'oi',
    icon: 'fa-solid fa-trophy',
    title: 'Smart India Hackathon 2025',
    desc: <>Participated in <strong>Smart India Hackathon 2025</strong>, one of India's largest national-level hackathons, developing innovative tech solutions.</>,
  },
  {
    id: 'iot',
    colorClass: 'pi',
    icon: 'fa-solid fa-wifi',
    title: 'Webinar – IoT (Novi Tech\'s)',
    desc: <>Attended <strong>Novi Tech's IoT webinar</strong>, gaining practical insights into Internet of Things technologies and real-world applications.</>,
  },
  {
    id: 'ai',
    colorClass: 'ti',
    icon: 'fa-solid fa-robot',
    title: 'Webinar – AI Tools (Be 10x)',
    desc: <>Attended <strong>Be 10x AI Tools webinar</strong>, exploring cutting-edge AI productivity tools and emerging AI workflows.</>,
  },
]

export default function Achievements() {
  return (
    <section className="section section-alt" id="achievements">
      <div className="container">
        <div className="section-header aos-hidden">
          <span className="section-tag">sys.benchmarks</span>
          <h2 className="section-title">Achievements</h2>
        </div>

        <div className="achievements-grid aos-hidden" style={{ transitionDelay: '100ms' }}>
          {ACHIEVEMENTS.map(({ id, colorClass, icon, title, desc }) => (
            <div className="achievement-card" key={id}>
              <div className={`achievement-icon ${colorClass}`}>
                <i className={icon} />
              </div>
              <div className="achievement-body">
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
