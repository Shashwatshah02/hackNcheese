import { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Button, Flex, Heading } from '@chakra-ui/react';
import CustomLoadingAnimation from './Elements/CustomLoadingAnimation';

const Profile = () => {
  // const navigate = useNavigate();
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [displayCount, setDisplayCount] = useState(12);
  const [displayCountCon, setDisplayCountCon] = useState(12);

  useEffect(() => {
    let data = JSON.stringify({
      username: "string",
      token: "string",
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://spit-hackthn.vercel.app/fetch-user-data-fromdbs/",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        setUserData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <CustomLoadingAnimation />;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const arr = userData.repositories;
  const arr1 = userData.contributions;

  const rep = Array.isArray(arr) ? arr : [];
  const rep1 = Array.isArray(arr1) ? arr1 : [];

  const handleViewMore = () => {
    // Increase the display count by 6
    setDisplayCount(displayCount + 6);
  };

  const handleViewMoreCon = () => {
    // Increase the display count by 6
    setDisplayCountCon(displayCountCon + 6);
  };

  return (
    <Flex>
    <div className="profile-container">
      <Box m='10%'>
      <Heading size={'md'} mb='3%'>Repositories:</Heading>
      <ul className="repo-list">
        {/* Map over the user data to display repositories */}
        {rep?.slice(0, displayCount).map((repo) => (
          <a key={repo.id} href={repo.html_url}>
          <li size={'md'}>{repo.name}</li>
          </a>
        ))}
      </ul>
      <Box align={'center'} mt='5%'>
      <Button bgColor={'black'} color={'white'} _hover={{ bgColor: 'gray.700' }} m='auto' onClick={handleViewMore}>View More</Button>
      </Box>
      </Box>
    </div>
    <div className="profile-container">
      <Box m='10%'>
      <Heading size={'md'} mb='3%'>Contributions:</Heading>

      <ul className="repo-list">
        {/* Map over the user data to display repositories */}
        {rep1
  ?.slice(0, displayCountCon)
  .reverse()
  .map((repo) => (
    <a key={repo.id} href={repo.repo_url}>
    <li size={'md'} >
      {repo.repo_name}
    </li>
    </a>
  ))}
      </ul>

      <Box align={'center'} mt='5%'>
      <Button bgColor={'black'} color={'white'} _hover={{ bgColor: 'gray.700' }} m='auto' onClick={handleViewMoreCon}>View More</Button>
      </Box>
      </Box>
    </div>
    </Flex>
  );
};

export default Profile;
