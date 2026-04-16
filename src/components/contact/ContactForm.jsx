import { useState } from 'react'
import { motion } from 'framer-motion'

const initialForm = {
  name: '',
  email: '',
  phone: '',
  message: '',
}

function ContactForm() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target

    setForm((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: '' }))
    setIsSubmitted(false)
  }

  const validate = () => {
    const nextErrors = {}

    if (!form.name.trim()) {
      nextErrors.name = 'Name is required.'
    }

    if (!form.email.trim()) {
      nextErrors.email = 'Email is required.'
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      nextErrors.email = 'Please enter a valid email address.'
    }

    if (!form.phone.trim()) {
      nextErrors.phone = 'Phone is required.'
    } else if (!/^[0-9+\-\s]{8,15}$/.test(form.phone)) {
      nextErrors.phone = 'Please enter a valid phone number.'
    }

    if (!form.message.trim()) {
      nextErrors.message = 'Message is required.'
    }

    return nextErrors
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const nextErrors = validate()

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors)
      setIsSubmitted(false)
      return
    }

    setErrors({})
    setForm(initialForm)
    setIsSubmitted(true)
  }

  const inputClass =
    'w-full rounded-xl border border-[#D4AF37]/50 bg-white px-4 py-3 text-sm text-black outline-none transition-all duration-300 placeholder:text-black/45 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/25'

  return (
    <motion.form
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      onSubmit={handleSubmit}
      className="rounded-3xl border border-[#D4AF37]/45 bg-white p-6 shadow-[0_16px_38px_rgba(0,0,0,0.07)] sm:p-8"
      noValidate
    >
      <h2 className="font-display text-3xl text-black">Send A Message</h2>
      <p className="mt-2 text-sm text-black/70">We will get back to you as soon as possible.</p>

      <div className="mt-6 space-y-4">
        <div>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            className={inputClass}
          />
          {errors.name ? <p className="mt-1 text-xs text-red-600">{errors.name}</p> : null}
        </div>

        <div>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            className={inputClass}
          />
          {errors.email ? <p className="mt-1 text-xs text-red-600">{errors.email}</p> : null}
        </div>

        <div>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Your Phone"
            className={inputClass}
          />
          {errors.phone ? <p className="mt-1 text-xs text-red-600">{errors.phone}</p> : null}
        </div>

        <div>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={5}
            placeholder="Your Message"
            className={inputClass}
          />
          {errors.message ? <p className="mt-1 text-xs text-red-600">{errors.message}</p> : null}
        </div>
      </div>

      <button
        type="submit"
        className="mt-5 w-full rounded-xl border border-black bg-black px-5 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-white transition-all duration-300 hover:bg-[#D4AF37] hover:text-black"
      >
        Send Message
      </button>

      {isSubmitted ? (
        <p className="mt-4 rounded-lg border border-[#D4AF37]/40 bg-[#FFF8ED] px-4 py-2 text-sm text-black/80">
          Thank you. Your message has been sent successfully.
        </p>
      ) : null}
    </motion.form>
  )
}

export default ContactForm
