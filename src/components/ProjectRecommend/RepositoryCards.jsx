// RepositoryCard.js
import React from 'react';

const RepositoryCards = ({ repo }) => {
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      alert("URL copied to clipboard!");
    }, (err) => {
      console.error('Error copying text: ', err);
    });
  };

  return (
    <div style={{
      width: '260px',
      border: '1px solid #000',
      borderRadius: '8px',
      height: '200px',
      padding: '20px',
      backgroundColor: 'white',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      color: 'black',
    }}>
      <h3 style={{ color: '#000', marginBottom: '10px', fontSize: '20px', fontWeight: 500 }}>{repo.repository_title}</h3>
      <p style={{ marginBottom: '10px' }}>Stars: {repo.stargazers_count}</p>
      <div style={{ marginBottom: '10px' }}>
        {repo.topics.slice(0, 2).join(', ')}
      </div>
      <button onClick={() => copyToClipboard(repo.repository_url)} style={{
        padding: '5px 10px',
        cursor: 'pointer',
        backgroundColor: 'black',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
      }}>
        Copy URL
      </button>
    </div>
  );
};

export default RepositoryCards;