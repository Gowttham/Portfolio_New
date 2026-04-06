import { useState } from 'react'
import axios from 'axios'

const API = import.meta.env.VITE_API_URL || 'http://localhost:5000/api'

export default function Contact() {
  const [form, setForm]     = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState({ msg: '', type: '' })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { name, email, message } = form

    if (!name || !email || !message) {
      setStatus({ msg: 'Please fill in all fields.', type: 'err' })
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus({ msg: 'Please enter a valid email address.', type: 'err' })
      return
    }

    setLoading(true)
    setStatus({ msg: '', type: '' })

    try {
      const res = await axios.post(`${API}/contact`, form)
      setStatus({ msg: res.data.message, type: 'ok' })
      setForm({ name: '', email: '', message: '' })
    } catch (err) {
      setStatus({ msg: err.response?.data?.error || 'Something went wrong. Please try again.', type: 'err' })
    } finally {
      setLoading(false)
      setTimeout(() => setStatus({ msg: '', type: '' }), 5000)
    }
  }

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="section-header aos-hidden">
          <span className="section-tag">Get In Touch</span>
          <h2 className="section-title">Contact Me</h2>
        </div>

        <div className="contact-wrapper aos-hidden" style={{ transitionDelay: '100ms' }}>
          {/* Info */}
          <div className="contact-info">
            <div className="contact-card" id="contactPhone">
              <div className="contact-icon"><i className="fa-solid fa-phone" /></div>
              <div>
                <span className="contact-label">Phone</span>
                <a href="tel:+916374289787">+91 6374289787</a>
              </div>
            </div>

            <div className="contact-card" id="contactEmail">
              <div className="contact-icon"><i className="fa-solid fa-envelope" /></div>
              <div>
                <span className="contact-label">Email</span>
                <a href="mailto:gowttham2006@gmail.com">gowttham2006@gmail.com</a>
              </div>
            </div>

            <div className="contact-card" id="contactLocation">
              <div className="contact-icon"><i className="fa-solid fa-location-dot" /></div>
              <div>
                <span className="contact-label">Location</span>
                <span>Coimbatore, Tamil Nadu, India</span>
              </div>
            </div>

            <div className="contact-socials">
              <a href="https://www.linkedin.com/in/gowttham-s/" target="_blank" rel="noopener noreferrer" className="social-btn social-btn-li" id="contactLinkedIn">
                <i className="fa-brands fa-linkedin" /> LinkedIn
              </a>
              <a href="https://github.com/Gowttham" target="_blank" rel="noopener noreferrer" className="social-btn social-btn-gh" id="contactGitHub">
                <i className="fa-brands fa-github" /> GitHub
              </a>
              <a href="https://leetcode.com/u/Gowttham/" target="_blank" rel="noopener noreferrer" className="social-btn social-btn-leet" id="contactLeetcode">
                <i className="fa-solid fa-code" /> LeetCode
              </a>
            </div>
          </div>

          {/* Form */}
          <form className="contact-form" id="contactForm" onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="contactName">Your Name</label>
              <input
                type="text" id="contactName" name="name"
                placeholder="John Doe" value={form.name}
                onChange={handleChange} required
              />
            </div>
            <div className="form-group">
              <label htmlFor="contactEmailInput">Email Address</label>
              <input
                type="email" id="contactEmailInput" name="email"
                placeholder="john@example.com" value={form.email}
                onChange={handleChange} required
              />
            </div>
            <div className="form-group">
              <label htmlFor="contactMessage">Message</label>
              <textarea
                id="contactMessage" name="message" rows={5}
                placeholder="Tell me about your project or opportunity…"
                value={form.message} onChange={handleChange} required
              />
            </div>

            <button type="submit" className="btn btn-primary btn-full" disabled={loading} id="sendMessageBtn">
              {loading
                ? <><i className="fa-solid fa-spinner fa-spin" /> Sending…</>
                : <><i className="fa-solid fa-paper-plane" /> Send Message</>
              }
            </button>

            {status.msg && (
              <p className={status.type === 'ok' ? 'form-status-ok' : 'form-status-err'} id="formStatus">
                {status.type === 'ok' ? '✓ ' : ''}{status.msg}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
