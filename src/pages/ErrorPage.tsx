import { Box, Heading, Text } from '@chakra-ui/react';

import { useRouteError, isRouteErrorResponse } from 'react-router-dom';
import NavBar from '../components/NavBar';

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <NavBar />
      <Box padding={5}>
        <Heading>Oops</Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? 'This page does not exists'
            : 'Something went wrong'}
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;
