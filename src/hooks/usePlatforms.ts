import { useQuery } from '@tanstack/react-query';
import { fetchPlatforms } from '../services/platform-service';

const usePlatforms = () => {
  return useQuery({
    queryKey: ['platforms'],
    queryFn: fetchPlatforms,
    staleTime: 24 * 60 * 60 * 1000, //24h
  });
};

export default usePlatforms;
