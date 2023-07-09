import React from 'react';
import { useParams } from 'react-router-dom';
import useGameDetails from '../hooks/useGameDetails';
import { Heading, Spinner, Text } from '@chakra-ui/react';

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, error, isLoading } = useGameDetails(slug as string);

  if (isLoading) return <Spinner />;

  if (error) return <Text>Something went wrong</Text>;

  return (
    <>
      <Heading>{game.name}</Heading>
      <Text>{game.description_raw}</Text>
    </>
  );
};

export default GameDetailPage;
