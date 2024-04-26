import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './contactus.css'; // Import the CSS file

function ContactForm() {
  const [state, handleSubmit] = useForm("xrgnrwjj");
  
  if (state.succeeded) {
    return <h1><p className="success-message">Thanks for joining!</p></h1>;
  }
  
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h1 className='contact'>Contact Us</h1>
        <h3 className='contact'>If any enquires</h3>
        <label className="form-label" htmlFor="email">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          name="email"
          className="form-input"
        />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
        />
        <label className="form-label" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className="form-textarea"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button
          type="submit"
          disabled={state.submitting}
          className="form-button"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
