import {
  Box,
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from '@chakra-ui/react';
import useGenres, { Genre } from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-url';

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: Props) => {
  const { data: genres, isLoading, error } = useGenres();

  if (isLoading || error)
    return (
      <Box
        display={'flex'}
        height={'full'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        {isLoading ? <Spinner /> : <Text>{error}</Text>}
      </Box>
    );
  return (
    <List>
      {genres.map((genre) => (
        <ListItem key={genre.id} paddingY={'4px'}>
          <HStack>
            <Image
              boxSize={'32px'}
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Button
              fontSize={'sm'}
              variant={'link'}
              onClick={() => onSelectGenre(genre)}
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
