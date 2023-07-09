import { GameQuery } from '../context/GameQueryContext';
import apiClient from './api-client';
import { Platform } from './platform-service';

export interface Game {
  id: number;
  name: string;
  slug: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
  description_raw: string;
}

export interface GamesFetchResponse {
  count: number;
  results: Game[];
  next: string | null;
}

export const fetchGames = async (
  gameQuery: GameQuery
): Promise<GamesFetchResponse> => {
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
    .then((res) => res.data);
};

export const fetchGameDetails = async (slug: string): Promise<Game> => {
  return await apiClient.get<Game>(`/games/${slug}`).then((res) => res.data);
};
