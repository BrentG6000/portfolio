import { useState } from 'react'
import Emailjs from 'emailjs-com'
import { Link } from 'react-router-dom'
import '../styles/Contact.scss'
import Button from '../components/Button'

export default function ContactUs() {
  const [message, setMessage] = useState('')

  function SendEmail(e) {
    e.preventDefault()
    if (message === '') {
      alert('No message to send!')
      return
    }
    Emailjs.sendForm('service_b25pqpr', 'contact_form', e.target, 'user_9z6nLJ2jV6gSIZRhm8Bhd')
      .then((result) => {
          // console.log(result.text);
          alert('Your message was successfully submitted!')
          setMessage('')
      }, (error) => {
          console.log(error.text);
      })

  }

  return (
    <form onSubmit={SendEmail}>
      <input type="hidden" name="contact_number" />
      <div></div><br/>
      <input type="text" name="user_name" placeholder='Name'/><br/>
      <input type="email" name="user_email" placeholder='Email'/><br/>
      <textarea name="message" placeholder='Message' value={message} onChange={(e) => setMessage(e.target.value)}/><br/>
      <button className='custom-btn btn-1' type="submit" target='_blank'>
        <span>Send</span>
      </button>
        
    </form>
  )
}