import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';
import { GameQuery } from '../App';

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({
  gameQuery: { genre, platform, sortOrder, searchText },
}: Props) => {
  const {
    data: games,
    error,
    isLoading,
  } = useGames({
    genre: genre ? genre.id : '',
    platform: platform ? platform.id : '',
    sortOrder: sortOrder,
    searchText: searchText,
  });

  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  if (error) return <Text>{error}</Text>;

  return (
    <SimpleGrid
      columns={{
        sm: 1,
        md: 2,
        lg: 3,
        xl: 4,
      }}
      padding={'10px'}
      spacing={6}
    >
      {isLoading &&
        skeletons.map((el) => (
          <GameCardContainer key={el}>
            <GameCardSkeleton />
          </GameCardContainer>
        ))}
      {games.map((game) => (
        <GameCardContainer key={game.id}>
          <GameCard game={game} />
        </GameCardContainer>
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
