import  { useEffect, useState } from 'react';

function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    fetch('https://spit-hackthn.vercel.app/leaderboard/', {
      method: 'GET',
      headers: {
        'accept': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => setLeaderboard(data))
      .catch(error => console.error('Error fetching data: ', error));
  }, []);

  const getEmojiForRank = (index) => {
    let emojiStyle = { fontSize: '24px' }; // Adjust the font size as needed
    switch (index) {
      case 0: return <span style={emojiStyle}>🥇</span>;
      case 1: return <span style={emojiStyle}>🥈</span>;
      case 2: return <span style={emojiStyle}>🥉</span>;
      default: return '';
    }
  };

  const cardColors = ['#8CB9BD', '#A3C9AA', '#DED0B6']; // Colors for the first three cards

  return (
    <div style={{ margin: 'auto', width: '80%', marginTop: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '20px' }}>
        {leaderboard.slice(0, 3).map(({ name, number }, index) => (
          <div key={index} style={{
            flex: 1,
            margin: '0 10px',
            backgroundColor: cardColors[index],
            // border: '3px solid', // Added 3px border
            borderRadius: '8px',
            overflow: 'hidden',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <div style={{ padding: '20px', textAlign: 'center' }}>
              <strong>{name}</strong> {getEmojiForRank(index)}
              <p>Number: {number}</p>
            </div>
          </div>
        ))}
      </div>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Full Leaderboard</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ borderBottom: '2px solid #ddd', padding: '10px', textAlign: 'left' }}>Rank</th>
            <th style={{ borderBottom: '2px solid #ddd', padding: '10px', textAlign: 'left' }}>Name</th>
            <th style={{ borderBottom: '2px solid #ddd', padding: '10px', textAlign: 'left' }}>Number</th>
          </tr>
        </thead>
        <tbody>
          {leaderboard.map(({ name, number }, index) => (
            <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#f2f2f2' : 'white' }}>
              <td style={{ padding: '10px' }}>{index + 1}</td>
              <td style={{ padding: '10px' }}>{name}</td>
              <td style={{ padding: '10px' }}>{number}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Leaderboard;