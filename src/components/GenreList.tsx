import {
  Box,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from '@chakra-ui/react';
import useGenres from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-url';

const GenreList = () => {
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
            <Text fontSize={'large'}>{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
