import './ContactFormStyles.css'
import { useRef } from 'react'
import emailjs from 'emailjs-com'

const SERVICE_ID = process.env.REACT_APP_SERVICE_ID
const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID
const PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY

const ContactForm = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
        console.log('SUCCESS!', result.text)
      }, (error) => {
        console.log('FAILED', error.text)
      })
      e.target.reset()
  }

  return (
    <div className='form'>
      <form ref={form} onSubmit={sendEmail} id='contact'>
        <label>Your Name</label>
        <input type="text" name='user_name' required='true' />
        <label>Email</label>
        <input type="email" name='user_email' required='true' />
        <label>Subject</label>
        <input type="text" name='subject' />
        <label>Message</label>
        <textarea rows='6' name='message' placeholder='Type your message' required='true' />
        <button className='btn' type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default ContactForm