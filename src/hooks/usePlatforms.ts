import { useState, useEffect } from 'react';
import apiClient from '../services/api-client';
import { AxiosError, CanceledError } from 'axios';

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
interface FetchResponse {
  count: number;
  results: Platform[];
}

const usePlatforms = () => {
  const [data, setData] = useState<Platform[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setIsLoading(true);
    apiClient
      .get<FetchResponse>('/platforms/lists/parents', {
        signal: controller.signal,
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
  }, []);

  return { data, error, isLoading };
};

export default usePlatforms;
