import { useState } from 'react';

function Ai() {
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);
  const [readmeContent, setReadmeContent] = useState('');

  const handleInputChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSearchClick = () => {
    setLoading(true);
    fetch('https://spit-hackthn.vercel.app/get-readme/', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ url: username }) // Assuming the input is the full URL of the GitHub repo
    })
    .then(response => response.json())
    .then(data => {
      setReadmeContent(data.readme_content);
      setLoading(false);
    })
    .catch(error => {
      console.error('Error:', error);
      setLoading(false);
    });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
      {loading && (
        <div style={{ width: '100%', backgroundColor: '#ccc' }}>
          <div style={{ height: '4px', width: '50%', backgroundColor: '#007BFF', transition: 'width 2s' }}></div>
        </div>
      )}
      <div style={{ marginBottom: '20px', opacity: loading ? 0 : 1, transition: 'opacity 0.5s ease' }}>
        <div style={{
          fontSize: '30px',
          fontFamily: 'Arial, sans-serif',
          color: '#007BFF',
          fontWeight: 'bold'
        }}>
          Understand repo with the power of AI
        </div>
      </div>
      <input
        type="text"
        value={username}
        onChange={handleInputChange}
        placeholder="Enter GitHub repository URL..."
        style={{
          width: '300px',
          padding: '10px',
          marginBottom: '20px',
          border: '2px solid #000000',
          borderRadius: '5px',
          outline: 'none',
          fontSize: '16px',
          fontFamily: 'Arial, sans-serif',
          backgroundColor: 'transparent',
          color: 'black',
        }}
      />
      <button
        onClick={handleSearchClick}
        style={{
          padding: '10px 20px',
          backgroundColor: '#000000',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          fontSize: '16px',
          fontFamily: 'Arial, sans-serif',
        }}
      >
        Search
      </button>
      {readmeContent && (
        <div style={{ marginTop: '20px', textAlign: 'left', width: '100%', maxWidth: '600px', overflowWrap: 'break-word' }}>
          <pre style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>{readmeContent}</pre>
        </div>
      )}
    </div>
  );
}

export default Ai;