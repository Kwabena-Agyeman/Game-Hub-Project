import { Card, CardBody, HStack, Heading, Image } from '@chakra-ui/react';
import PlatformIconList from './PlatformIconList';
import CriticScore from './CriticScore';
import getCroppedImageUrl from '../services/image-url';
import Emoji from './Emoji';
import { Game } from '../services/games-service';
import { Link } from 'react-router-dom';

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card height={'full'}>
      <Link to={`/games/${game.slug}`}>
        <Image src={getCroppedImageUrl(game.background_image)} />
        <CardBody>
          <HStack justifyContent={'space-between'} marginBottom={3}>
            <PlatformIconList
              platforms={game?.parent_platforms?.map((p) => p.platform)}
            />
            <CriticScore score={game.metacritic} />
          </HStack>
          <Heading fontSize={'2xl'}>{game.name}</Heading>
          <Emoji rating={game.rating_top} />
        </CardBody>
      </Link>
    </Card>
  );
};

export default GameCard;
