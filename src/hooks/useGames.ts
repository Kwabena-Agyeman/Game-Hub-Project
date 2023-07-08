import { useQuery } from '@tanstack/react-query';
import { Game, fetchGames } from '../services/games-service';
import { GameQuery } from '../App';

const useGames = (gameQuery: GameQuery) => {
  return useQuery<Game[], Error>({
    queryKey: ['games', gameQuery],
    queryFn: () => fetchGames({ ...gameQuery }),
  });
};

export default useGames;
