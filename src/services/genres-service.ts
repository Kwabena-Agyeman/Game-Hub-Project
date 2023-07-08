import apiClient from './api-client';

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}
interface GenreFetchResponse {
  count: number;
  results: Genre[];
}

export const fetchGenres = async (): Promise<Genre[]> => {
  return await apiClient
    .get<GenreFetchResponse>('/genres')
    .then((res) => res.data.results);
};
