import apiClient from './api-client';

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
interface PlatformFetchResponse {
  count: number;
  results: Platform[];
}

export const fetchPlatforms = async (): Promise<Platform[]> => {
  return await apiClient
    .get<PlatformFetchResponse>('/platforms/lists/parents')
    .then((res) => res.data.results);
};
