import { GameQuery } from '../App';
import apiClient from './api-client';
import { Platform } from './platform-service';

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

interface GamesFetchResponse {
  count: number;
  results: Game[];
}

export const fetchGames = async (gameQuery: GameQuery): Promise<Game[]> => {
  const { genre, platform, searchText, sortOrder } = gameQuery;
  return await apiClient
    .get<GamesFetchResponse>('/games', {
      params: {
        ...(genre?.id && { genres: genre.id }),
        ...(platform?.id && { parent_platforms: platform.id }),
        ...(sortOrder && { ordering: sortOrder }),
        ...(searchText && { search: searchText }),
      },
    })
    .then((res) => res.data.results);
};
