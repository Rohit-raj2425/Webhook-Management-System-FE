import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import classes from "./subscribeForm.module.css";
import { useAuth } from '../../store/auth';

const SubscribeForm = () => {
    const [sourceUrl, setSourceUrl] = useState('');
    const [callbackUrl, setCallbackUrl] = useState('');
    const auth = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
      event.preventDefault();

      try {
          const response = await axios.post('http://localhost:8000/v1/webhooks/subscribe', {
              sourceUrl,
              callbackUrl
          }, {
              headers: {
                'auth-token': auth.authToken
              }
          });

          if (response.status === 201) {
            console.log('Subscription successful', response.data);
            navigate('/webhookList');
          } else {
              console.error('Login failed:', response.data.message);
          }
          
          setSourceUrl('');
          setCallbackUrl('');
      } catch (error) {
          console.error('Error in subscription:', error);
      }
  };

    return (
        <div className={classes.subscribeformcontainer}>
            <h2 className={classes.formtitle}>Subscribe to a Webhook</h2>
            <form className={classes.subscribeform} onSubmit={handleSubmit}>
                <div className={classes.formgroup}>
                    <label htmlFor="sourceUrl">Source URL</label>
                    <input
                        type="text"
                        id="sourceUrl"
                        placeholder="Enter source URL"
                        value={sourceUrl}
                        onChange={(e) => setSourceUrl(e.target.value)}
                    />
                </div>
                <div className={classes.formgroup}>
                    <label htmlFor="callbackUrl">Callback URL</label>
                    <input
                        type="text"
                        id="callbackUrl"
                        placeholder="Enter callback URL"
                        value={callbackUrl}
                        onChange={(e) => setCallbackUrl(e.target.value)}
                    />
                </div>
                <button type="submit" className={classes.submitbtn}>Subscribe</button>
            </form>
        </div>
    );
};

export default SubscribeForm;
