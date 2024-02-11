import { Button, Divider, Heading, Stack } from '@chakra-ui/react';
import { useLocation, useNavigate } from 'react-router-dom';

const SideBar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Stack p="4" spacing="4" alignItems="center">
      <Heading
        size="md"
        cursor="pointer"
        onClick={() => navigate(`/`)}
        fontFamily="cursive"
        textAlign="center"
      >
        REPOCRAFT
      </Heading>
      <Divider />
      <Stack spacing="2" alignItems='flex-start'>
        <Button
          bg={location.pathname === '/issues/user' ? 'blue.400' : 'gray.200'}
          onClick={() => navigate(`/issues/user`)}
          width="100%"
        >
          Issues
        </Button>
        <Button
          bg={location.pathname === '/forum' ? 'blue.400' : 'gray.200'}
          onClick={() => navigate(`/forum`)}
          width="100%"
        >
          Community
        </Button>
        <Button
          bg={location.pathname === '/leader' ? 'blue.400' : 'gray.200'}
          onClick={() => navigate(`/leader`)}
          width="100%"
        >
          Leaderboard
        </Button>
        <Button
          bg={location.pathname === '/profile' ? 'blue.400' : 'gray.200'}
          onClick={() => navigate(`/profile`)}
          width="100%"
        >
          Profile
        </Button>
        <Button
          bg={location.pathname === '/ai' ? 'blue.400' : 'gray.200'}
          onClick={() => navigate(`/ai`)}
          width="100%"
        >
          AI
        </Button>
        <Button
          bg={location.pathname === '/domain' ? 'blue.400' : 'gray.200'}
          onClick={() => navigate(`/domain`)}
          width="100%"
        >
          Domain Recommendation
        </Button>
        <Button
          bg={location.pathname === '/repo' ? 'blue.400' : 'gray.200'}
          onClick={() => navigate(`/repo`)}
          width="100%"
        >
          Project Recommendation
        </Button>
      </Stack>
      <a href="http://43.204.130.212/" target="_blank" rel="noreferrer">
        <Button bg="gray.200" width="100%">Code in Collab</Button>
      </a>
    </Stack>
  );
};

export default SideBar;
