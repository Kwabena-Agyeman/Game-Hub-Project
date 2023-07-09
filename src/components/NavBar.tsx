import { HStack, Image } from '@chakra-ui/react';
import logo from '../assets/logo.webp';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';
import { useContext } from 'react';
import { GameQueryContext } from '../context/GameQueryContext';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const { gameQuery, setGameQuery } = useContext(GameQueryContext);

  return (
    <HStack justifyContent={'space-between'} padding={'10px'}>
      <Link to={'/'}>
        <Image src={logo} boxSize={16} objectFit={'cover'} />
      </Link>
      <SearchInput
        onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
      />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
