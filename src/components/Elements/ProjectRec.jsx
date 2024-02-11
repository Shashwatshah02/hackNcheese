import React, { useState } from 'react';
import CustomLoadingAnimation from './CustomLoadingAnimation'

const cardData = [
  {
    name: "relume",
    details: "Relume AI Website Builder",
    backgroundColor: "#f8d7da",
    visitUrl: "https://www.relume.io/"
  },
  {
    name: "v0.dev",
    details: "generative user interface system",
    backgroundColor: "#d1ecf1",
    visitUrl: "https://v0.dev/l"
  },
  {
    name: "teleporthq",
    details: "UI Generator with ChatGPT",
    backgroundColor: "#d4edda",
    visitUrl: "https://teleporthq.io/ai-website-builder"
  },
];

const ProjectRec = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [projectIdeas, setProjectIdeas] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // Prevent the default action to avoid submitting the form
      submitSearchTerm();
    }
  };

  const submitSearchTerm = () => {
    setIsLoading(true); // Start loading
    const API_URL = 'https://spit-hackthn.vercel.app/get-ai-project/';

    fetch(API_URL, {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ content: searchTerm }),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      setProjectIdeas(data.response);
      setIsLoading(false); // Stop loading
    })
    .catch(error => {
      console.error('Error:', error);
      setIsLoading(false); // Stop loading in case of error
    });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '20px' }}>
      <h2 style={{ margin: '0 0 20px 0', fontSize: '24px' }}>Explore Your Next Adventure</h2>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        onKeyPress={handleKeyPress}
        placeholder="🔍 What kind of project sparks your curiosity?"
        style={{
          padding: '15px',
          marginBottom: '20px',
          borderRadius: '5px',
          border: '1px solid #ccc',
          fontSize: '16px',
          width: '80%',
          maxWidth: '500px',
        }}
      />
      {isLoading ? (
        <CustomLoadingAnimation></CustomLoadingAnimation>
      ) : (
        <>
          <div style={{ marginTop: '20px', textAlign: 'left', width: '80%', maxWidth: '500px' }}>
            <p style={{ whiteSpace: 'pre-line' }}>{projectIdeas}</p>
          </div>
          <div style={{
              display: 'flex',
              justifyContent: 'space-around',
              gap: '20px',
              flexWrap: 'wrap',
              width: '100%',
              marginTop: '20px',
            }}>
            {cardData.map((card, index) => (
              <div key={index} style={{ 
                  padding: '20px',
                  textAlign: 'center',
                  backgroundColor: card.backgroundColor,
                  borderRadius: '10px',
                  width: '300px',
                }}>
                <h3>{card.name}</h3>
                <p>{card.details}</p>
                <a href={card.visitUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'black' }}>
                  Visit
                </a>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

// Add keyframes for the spin animation
const styleSheet = document.createElement("style")
styleSheet.type = "text/css"
styleSheet.innerText = `
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}`
document.head.appendChild(styleSheet);

export default ProjectRec;