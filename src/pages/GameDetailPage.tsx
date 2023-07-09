import { useParams } from 'react-router-dom';
import useGameDetails from '../hooks/useGameDetails';
import { Heading, SimpleGrid, Spinner, Text } from '@chakra-ui/react';
import ExpandableText from '../components/ExpandableText';
import DefinitionItem from '../components/DefinitionItem';
import CriticScore from '../components/CriticScore';

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, error, isLoading } = useGameDetails(slug as string);

  if (isLoading) return <Spinner />;

  if (error) return <Text>Something went wrong</Text>;

  return (
    <>
      <Heading>{game.name}</Heading>
      <ExpandableText>{game.description_raw}</ExpandableText>
      <SimpleGrid columns={2} as='dl'>
        <DefinitionItem term='Platforms'>
          {game.parent_platforms?.map((platform) => {
            return (
              <Text key={platform.platform.id}>{platform.platform.name}</Text>
            );
          })}
        </DefinitionItem>
        <DefinitionItem term='Metascore'>
          <CriticScore score={game.metacritic} />
        </DefinitionItem>
        <DefinitionItem term='Genres'>
          {game.genres?.map((genre) => (
            <Text key={genre.id}>{genre.name}</Text>
          ))}
        </DefinitionItem>
        <DefinitionItem term='Publishers'>
          {game.publishers?.map((publisher) => (
            <Text key={publisher.id}>{publisher.name}</Text>
          ))}
        </DefinitionItem>
      </SimpleGrid>
    </>
  );
};

export default GameDetailPage;
