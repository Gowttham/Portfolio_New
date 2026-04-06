export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="footer">
      <div className="footer-inner">
        <p className="footer-copy">&copy; {new Date().getFullYear()} <strong>Gowttham S</strong>. All rights reserved.</p>
        <div className="footer-socials">
          <a href="https://www.linkedin.com/in/gowttham-s/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" id="footerLinkedIn">
            <i className="fa-brands fa-linkedin" />
          </a>
          <a href="https://github.com/Gowttham" target="_blank" rel="noopener noreferrer" aria-label="GitHub" id="footerGitHub">
            <i className="fa-brands fa-github" />
          </a>
          <a href="https://leetcode.com/u/Gowttham/" target="_blank" rel="noopener noreferrer" aria-label="LeetCode" id="footerLeetcode">
            <i className="fa-solid fa-code" />
          </a>
          <a href="mailto:gowttham2006@gmail.com" aria-label="Mail" id="footerEmail">
            <i className="fa-solid fa-envelope" />
          </a>
          <a href="tel:+916374289787" aria-label="Phone" id="footerPhone">
            <i className="fa-solid fa-phone" />
          </a>
        </div>
        <p className="footer-back">
          <button onClick={scrollTop} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'inherit' }} id="backToTopLink">
            Back to top <i className="fa-solid fa-arrow-up" />
          </button>
        </p>
      </div>
    </footer>
  )
}
