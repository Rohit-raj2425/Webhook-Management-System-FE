import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../../store/auth';
import classes from "./webhookList.module.css";

const WebhookList = () => {
    const [webhooks, setWebhooks] = useState([]);
    const auth = useAuth();
    const navigate = useNavigate();
    const authToken = auth.authToken;
    useEffect(() => {
        const fetchWebhooks = async () => {
            try {
              const response = await axios.get('http://localhost:8000/v1/webhooks/subscriptions', {
                headers: {
                    'auth-token': authToken
                }
            });
                setWebhooks(response.data);
            } catch (error) {
                console.error('Error fetching webhooks', error);
            }
        };

        fetchWebhooks();
    }, []);

    const handleAddWebhook = () => {
      console.log("Add Webhook button clicked");
      navigate('/subscribeWebhook');
    };

    return (
      <div className={classes.webhookContainer}>
        <h1 className={classes.webhookTitle}>Webhooks</h1>
        <button className={classes.addWebhookBtn} onClick={handleAddWebhook}>Add Webhook</button>
        <ul className={classes.webhookList}>
            {webhooks.map((webhook, index) => (
                <li key={index} className={classes.webhookItem}>
                    <div className={classes.webhookColumn}>SourceUrl: {webhook.sourceUrl}</div>
                    <div className={classes.webhookColumn}>CallbackUrl: {webhook.callbackUrl}</div>
                </li>
            ))}
        </ul>
      </div>
        
    );
};

export default WebhookList;
