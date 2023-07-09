import { HStack, Image } from '@chakra-ui/react';
import logo from '../assets/logo.webp';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';
import { useContext } from 'react';
import { GameQueryContext } from '../context/GameQueryContext';

const NavBar = () => {
  const { gameQuery, setGameQuery } = useContext(GameQueryContext);

  return (
    <HStack justifyContent={'space-between'} padding={'10px'}>
      <Image src={logo} boxSize={16} />
      <SearchInput
        onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
      />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
