import { Heading } from '@chakra-ui/react';
import { GameQuery } from '../context/GameQueryContext';

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const heading = `${gameQuery.platform?.name || ''} ${
    gameQuery.genre?.name || ''
  } Games`;

  return (
    <Heading marginY={5} fontSize={'5xl'} as={'h2'}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
