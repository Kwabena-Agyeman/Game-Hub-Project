import { useQuery } from '@tanstack/react-query';
import { Platform, fetchPlatforms } from '../services/platform-service';

const usePlatforms = () => {
  return useQuery<Platform[], Error>({
    queryKey: ['platforms'],
    queryFn: fetchPlatforms,
    staleTime: 24 * 60 * 60 * 1000, //24h
  });
};

export default usePlatforms;
