import { useQuery } from '@tanstack/react-query';
import { Game, fetchGameDetails } from '../services/games-service';

const useGameDetails = (slug: string) => {
  return useQuery<Game, Error>({
    queryKey: ['gameDetails'],
    queryFn: () => fetchGameDetails(slug),
    staleTime: 24 * 60 * 60 * 1000, //24h
  });
};

export default useGameDetails;
