import React, { useState, useEffect } from 'react';

const Topdlrepos = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://spit-hackthn.vercel.app/top-ml-repos/?language=R&topic=deeplearning&top_n=4',
          {
            headers: {
              Accept: 'application/json',
            },
          }
        );

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setRepos(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {repos.map((repo) => (
          <div
            key={repo.name}
            style={{
              border: '1px solid #ddd',
              borderRadius: '8px',
              margin: '10px',
              padding: '15px',
              backgroundColor: 'white',
              width: '280px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              boxSizing: 'border-box',
              position: 'relative', // To position the icon
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                color: '#6f42c1',
              }}
            >
              {/* ML Icon (using an example SVG) */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                width="24"
                viewBox="0 0 24 24"
              >
             <path d="M27,24a2.9609,2.9609,0,0,0-1.2854.3008L21.4141,20H18v2h2.5859l3.7146,3.7148A2.9665,2.9665,0,0,0,24,27a3,3,0,1,0,3-3Zm0,4a1,1,0,1,1,1-1A1.0009,1.0009,0,0,1,27,28Z"/><path d="M27,13a2.9948,2.9948,0,0,0-2.8157,2H18v2h6.1843A2.9947,2.9947,0,1,0,27,13Zm0,4a1,1,0,1,1,1-1A1.0009,1.0009,0,0,1,27,17Z"/><path d="M27,2a3.0033,3.0033,0,0,0-3,3,2.9657,2.9657,0,0,0,.3481,1.373L20.5957,10H18v2h3.4043l4.3989-4.2524A2.9987,2.9987,0,1,0,27,2Zm0,4a1,1,0,1,1,1-1A1.0009,1.0009,0,0,1,27,6Z"/><path d="M18,6h2V4H18a3.9756,3.9756,0,0,0-3,1.3823A3.9756,3.9756,0,0,0,12,4H11a9.01,9.01,0,0,0-9,9v6a9.01,9.01,0,0,0,9,9h1a3.9756,3.9756,0,0,0,3-1.3823A3.9756,3.9756,0,0,0,18,28h2V26H18a2.0023,2.0023,0,0,1-2-2V8A2.0023,2.0023,0,0,1,18,6ZM12,26H11a7.0047,7.0047,0,0,1-6.92-6H6V18H4V14H7a3.0033,3.0033,0,0,0,3-3V9H8v2a1.0009,1.0009,0,0,1-1,1H4.08A7.0047,7.0047,0,0,1,11,6h1a2.0023,2.0023,0,0,1,2,2v4H12v2h2v4H12a3.0033,3.0033,0,0,0-3,3v2h2V21a1.0009,1.0009,0,0,1,1-1h2v4A2.0023,2.0023,0,0,1,12,26Z"/></svg>
            </div>
            <h3 style={{ marginBottom: '10px', fontSize: '20px', fontWeight: 500 }}>{repo.name}</h3>
            <p style={{ marginBottom: '10px' }}>{repo.description}</p>
            <p style={{ marginBottom: '10px' }}>Stars: {repo.stars+"⭐"}</p>
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#007BFF',
                textDecoration: 'none',
                fontWeight: 'bold',
                display: 'block',
              }}
            >
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Topdlrepos;
