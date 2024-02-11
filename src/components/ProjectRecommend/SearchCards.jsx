import React, { useState } from 'react';
import RepositoryCards from './RepositoryCards';
import TopRepos from '../Top_repos';
import Topdlrepos from '../Topdlrepos';
import {Box, Heading} from '@chakra-ui/react'
import Top_genrepos from '../Top_genrepos';

const SearchCards = () => {
  const [repositories, setRepositories] = useState([]);
  const [topic, setTopic] = useState(""); // State to hold the input topic
  const GITHUB_TOKEN = "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"; // Remember to secure your token in a real app

  const handleSearch = () => {
    // Perform the search when the button is clicked
    fetch(`https://spit-hackthn.vercel.app/search/?domain=${topic}&GITHUB_TOKEN=${GITHUB_TOKEN}`, {
      method: 'GET',
      headers: {
        'accept': 'application/json',
      }
    })
    .then(response => response.json())
    .then(data => {
      setRepositories(data); // Assuming 'data' is an array of repositories
    })
    .catch(error => console.error('Error fetching data:', error));
  };

  return (
    <>
    <center><h2 style={{ margin: '0 0 20px 0', fontSize: '24px', align: 'center' }}>Explore your favourite domain to work on!!</h2></center>
    <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'black' }}>
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          value={topic}
          onChange={(e) => setTopic(e.target.value)} // Update topic state on input change
          placeholder="Enter GitHub topic..."
          style={{
            marginRight: '10px',
            padding: '10px',
            borderRadius: '5px',
            border: '2px solid #000',
            backgroundColor: 'white',
            color: 'black',
          }}
        />
        <button
          onClick={handleSearch} // Call handleSearch on button click
          style={{
            padding: '10px 20px',
            cursor: 'pointer',
            backgroundColor: 'black',
            color: 'white',
            border: '2px solid #000',
            borderRadius: '5px',
          }}
        >
          Search
        </button>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
        {/* {repositories.map((repo, index) => (
          <RepositoryCards key={index} repo={repo} />
        ))} */}
      </div>
      <Box mr='-6%' ml='-6%'>
      <TopRepos />
      </Box>
      <Box mr='-6%' ml='-6%'>
      <Topdlrepos />
      </Box>
    </div>
    </>
  );
};

export default SearchCards;