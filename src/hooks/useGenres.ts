import { useQuery } from '@tanstack/react-query';
import { Genre, fetchGenres } from '../services/genres-service';

const useGenres = () => {
  return useQuery<Genre[], Error>({
    queryKey: ['genres'],
    queryFn: fetchGenres,
    staleTime: 24 * 60 * 60 * 1000, //24h
  });
};

export default useGenres;
