import { useState, useEffect } from 'react';
import apiClient from '../services/api-client';
import { AxiosError, CanceledError } from 'axios';

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

interface Props {
  genre: string | number;
  platform: string | number;
  sortOrder: string;
}
interface FetchResponse {
  count: number;
  results: Game[];
}

const useGames = ({ genre, platform, sortOrder }: Props) => {
  const [data, setData] = useState<Game[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setIsLoading(true);
    apiClient
      .get<FetchResponse>('/games', {
        signal: controller.signal,
        params: {
          ...(genre && { genres: genre }),
          ...(platform && { parent_platforms: platform }),
          ...(sortOrder && { ordering: sortOrder }),
        },
      })
      .then((res) => {
        setData(res.data.results);
        setIsLoading(false);
      })
      .catch((err: AxiosError) => {
        if (err instanceof CanceledError) return;

        setError(err.message);
        setIsLoading(false);
      });

    return () => controller.abort();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [genre, platform, sortOrder]);

  return { data, error, isLoading };
};

export default useGames;
