import { useState } from 'react'

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'This field is required'
    if (!form.email.trim()) e.email = 'This field is required'
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Sorry, invalid format here'
    if (!form.message.trim()) e.message = 'This field is required'
    return e
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setErrors({})
    setForm({ name: '', email: '', message: '' })
    alert('Message sent!')
  }

  return (
    <section className="contact" id="contact">
      <div className="contact-left">
        <h2>Contact</h2>
        <p>
          I would love to hear about your project and how I could help. Please
          fill in the form, and I'll get back to you as soon as possible.
        </p>
      </div>
      <div className="contact-right">
        <form onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <input
              className={errors.name ? 'input error' : 'input'}
              placeholder="NAME"
              value={form.name}
              onChange={e => { setForm(p => ({ ...p, name: e.target.value })); setErrors(p => ({ ...p, name: '' })) }}
            />
            {errors.name && <span className="field-error">{errors.name} !</span>}
          </div>
          <div className="form-group">
            <input
              className={errors.email ? 'input error' : 'input'}
              placeholder="EMAIL"
              value={form.email}
              onChange={e => { setForm(p => ({ ...p, email: e.target.value })); setErrors(p => ({ ...p, email: '' })) }}
            />
            {errors.email && <span className="field-error">{errors.email} !</span>}
          </div>
          <div className="form-group">
            <textarea
              className={errors.message ? 'input error' : 'input'}
              placeholder="MESSAGE"
              rows={5}
              value={form.message}
              onChange={e => { setForm(p => ({ ...p, message: e.target.value })); setErrors(p => ({ ...p, message: '' })) }}
            />
            {errors.message && <span className="field-error">{errors.message} !</span>}
          </div>
          <button type="submit" className="btn-send">SEND MESSAGE</button>
        </form>
      </div>
    </section>
  )
}

export default Contact