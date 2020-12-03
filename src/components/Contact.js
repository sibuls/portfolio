import React, { useContext, useState } from 'react';
import { AppContext } from '../AppContext';
import { db } from '../firebase';

const Contact = () => {
  // hooks
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loader, setLoader] = useState(false);

  // appcontext

  const { handleEmailSend, handleRotateClick } = useContext(AppContext);
  // handle
  const handleSubmitForm = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection('contacts')
      .add({
        name: name,
        email: email,
        message: message,
      })
      .then(() => {
        setLoader(false);
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className='contact'>
      <form className='contact__form' onSubmit={handleSubmitForm}>
        <h2 className='contact__title'>Contact Me</h2>{' '}
        <label className='contact__label'>Name</label>
        <input
          type='text'
          placeholder='Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          className='contact__input'
        />
        <label className='contact__label'>Email</label>
        <input
          type='text'
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='contact__input'
        />{' '}
        <label className='contact__label'>Message</label>
        <textarea
          name='message'
          id='message'
          cols='20'
          rows='10'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className='contact__textarea'
        ></textarea>
        <button type='submit' className='cv__button contact__cv-button'>
          {' '}
          Send
        </button>
        <button
          className='cv__button contact__button'
          onClick={() => handleEmailSend(false)}
        >
          Back
        </button>{' '}
      </form>
      <div className='contact__phone-body' onClick={handleRotateClick}>
        {' '}
      </div>{' '}
    </div>
  );
};

export default Contact;
