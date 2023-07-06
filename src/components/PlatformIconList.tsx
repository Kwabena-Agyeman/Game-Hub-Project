import { HStack, Icon } from '@chakra-ui/react';
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaAndroid,
  FaLinux,
} from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si';
import { BsGlobe } from 'react-icons/bs';
import { Platform } from '../hooks/useGames';

import { IconType } from 'react-icons/lib/esm/iconBase';

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows as IconType,
    playstation: FaPlaystation as IconType,
    xbox: FaXbox as IconType,
    nintendo: SiNintendo as IconType,
    mac: FaApple as IconType,
    android: FaAndroid as IconType,
    linux: FaLinux as IconType,
    ios: MdPhoneIphone as IconType,
    web: BsGlobe as IconType,
  };

  return (
    <HStack marginY={1}>
      {platforms.map((platform) => (
        <Icon
          key={platform.slug}
          as={iconMap[platform.slug]}
          color={'gray.500'}
        />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
