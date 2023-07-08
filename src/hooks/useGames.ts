import { useQuery } from '@tanstack/react-query';
import { fetchGames } from '../services/games-service';
import { GameQuery } from '../App';
import { Platform } from '../services/platform-service';

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const useGames = (gameQuery: GameQuery) => {
  return useQuery<Game[], Error>({
    queryKey: ['games', gameQuery],
    queryFn: () => fetchGames({ ...gameQuery }),
  });
};

export default useGames;
