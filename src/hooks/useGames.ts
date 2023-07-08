import { useInfiniteQuery } from '@tanstack/react-query';
import { GamesFetchResponse, fetchGames } from '../services/games-service';
import { GameQuery } from '../App';

const useGames = (gameQuery: GameQuery) => {
  return useInfiniteQuery<GamesFetchResponse, Error>({
    queryKey: ['games', gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      fetchGames({ ...gameQuery, page: pageParam as string | null }),
    staleTime: 24 * 60 * 60 * 1000, //24h
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
  });
};

export default useGames;
