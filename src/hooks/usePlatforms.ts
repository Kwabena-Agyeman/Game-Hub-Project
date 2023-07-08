import { useQuery } from '@tanstack/react-query';
import { fetchPlatforms } from '../services/platform-service';

const usePlatforms = () => {
  return useQuery({
    queryKey: ['platforms'],
    queryFn: fetchPlatforms,
  });
};

export default usePlatforms;
