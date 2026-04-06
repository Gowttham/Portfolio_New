export default function About() {
  const cards = [
    {
      icon: 'fa-graduation-cap',
      title: 'Student',
      text: 'Engineering student specialising in IoT and Cyber Security at SNS College of Engineering, pursuing BE CSE (2023–2027).',
    },
    {
      icon: 'fa-laptop-code',
      title: 'Developer',
      text: 'Strong interest in Full Stack Development and cloud technologies. Experienced in building real-world applications end-to-end.',
    },
    {
      icon: 'fa-lightbulb',
      title: 'Problem Solver',
      text: 'Passionate about tackling real-world problems through clean code, thoughtful design, and scalable solutions.',
    },
  ]

  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section-header aos-hidden">
          <span className="section-tag">Who I Am</span>
          <h2 className="section-title">About Me</h2>
        </div>

        <div className="about-grid aos-hidden" style={{ transitionDelay: '100ms' }}>
          {cards.map(({ icon, title, text }) => (
            <div className="about-card" key={title}>
              <i className={`fa-solid ${icon} about-icon`} />
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>

        <div className="about-bio aos-hidden" style={{ transitionDelay: '200ms' }}>
          <p>
            I am an engineering student specialising in IoT and Cyber Security with a strong interest in Full Stack
            Development and cloud technologies. I enjoy building real-world applications that solve genuine problems.
            I am continuously learning, currently holding a CGPA of 8.38 and actively contributing to the developer
            community through projects, certifications, and research publications.
          </p>
        </div>
      </div>
    </section>
  )
}
