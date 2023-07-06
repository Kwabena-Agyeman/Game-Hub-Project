import { HStack, Image } from '@chakra-ui/react';
import logo from '../assets/logo.webp';
import ColorModeSwtich from './ColorModeSwtich';

const NavBar = () => {
  return (
    <HStack justifyContent={'space-between'} padding={'10px'}>
      <Image src={logo} boxSize={16} />
      <ColorModeSwtich />
    </HStack>
  );
};

export default NavBar;
