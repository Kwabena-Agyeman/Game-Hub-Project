import useGameTrailers from '../hooks/useGameTrailers';

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data, error, isLoading } = useGameTrailers(gameId);

  if (isLoading) return null;

  if (error) throw new Error(error.message);

  const first = data?.results[0];
  if (!first) return null;

  return <video src={first.data[480]} poster={first.preview} controls />;
};

export default GameTrailer;
