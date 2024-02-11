import React, { useState } from 'react';

const Emails = () => {
  const [repoUrl, setRepoUrl] = useState('');
  const [emails, setEmails] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    setRepoUrl(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const API_URL = 'https://spit-hackthn.vercel.app/get-mails/';

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ issue_url: repoUrl }),
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      setEmails(data.emails);
    } catch (error) {
      console.error('Error:', error.message);
      setEmails([]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      margin: '40px',
      fontFamily: 'Arial, sans-serif',
    }}>
      <h2 style={{
        color: 'black',
        fontSize: '28px',
        marginBottom: '25px',
      }}>🔍 Discover Repository Contacts</h2>
      <form onSubmit={handleSubmit} style={{
        width: '100%',
        maxWidth: '500px',
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
      }}>
        <input
          type="text"
          value={repoUrl}
          onChange={handleInputChange}
          placeholder="Paste the GitHub repository URL here"
          style={{
            width: '100%',
            padding: '15px',
            borderRadius: '8px',
            border: '2px solid #000',
            outline: 'none',
            fontSize: '16px',
            background: 'white',
            color: 'black',
          }}
        />
        <button
          type="submit"
          disabled={isLoading}
          style={{
            padding: '10px 20px',
            backgroundColor: 'black',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: 'bold',
          }}
        >
          {isLoading ? 'Fetching...' : 'Fetch Emails'}
        </button>
      </form>
      {emails.length > 0 && (
        <div style={{
          marginTop: '30px',
          padding: '20px',
          borderRadius: '8px',
          backgroundColor: 'white',
          width: '100%',
          maxWidth: '500px',
        }}>
          <h3 style={{ margin: '0 0 10px 0', color: 'black' }}>📧 Emails:</h3>
          <ul style={{ listStyle: 'none', padding: '0', margin: '0', color: 'black' }}>
            {emails.map((email, index) => (
              <li key={index} style={{ marginBottom: '8px' }}>{email}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Emails;