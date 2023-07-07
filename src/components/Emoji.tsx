import bullsEye from '../assets/bulls-eye.webp';
import thumbsUp from '../assets/thumbs-up.webp';
import average from '../assets/meh.webp';
import { Image, ImageProps } from '@chakra-ui/react';

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;

  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: average, alt: 'average', boxSize: '25px' },
    4: { src: thumbsUp, alt: 'recommended', boxSize: '20px' },
    5: { src: bullsEye, alt: 'perfect', boxSize: '25px' },
  };

  return <Image {...emojiMap[rating]} marginTop={2} />;
};

export default Emoji;
