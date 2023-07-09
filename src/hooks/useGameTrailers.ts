import { useQuery } from '@tanstack/react-query';
import {
  GamesTrailerFetchResponse,
  fetchGameTrailers,
} from '../services/games-service';

const useGameTrailer = (id: number) => {
  return useQuery<GamesTrailerFetchResponse, Error>({
    queryKey: ['gameTrailer', id],
    queryFn: () => fetchGameTrailers(id),
    staleTime: 24 * 60 * 60 * 1000, //24h
  });
};

export default useGameTrailer;
