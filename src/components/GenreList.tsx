import {
  Box,
  Button,
  HStack,
  Heading,
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
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
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
    <>
      <Heading fontSize={'2xl'} marginBottom={3}>
        Genres
      </Heading>
      <List>
        {genres.map((genre) => (
          <ListItem key={genre.id} paddingY={'4px'}>
            <HStack>
              <Image
                boxSize={'40px'}
                objectFit={'cover'}
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                whiteSpace={'normal'}
                textAlign={'left'}
                fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'}
                fontSize={'lg'}
                variant={'link'}
                onClick={() => onSelectGenre(genre)}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
