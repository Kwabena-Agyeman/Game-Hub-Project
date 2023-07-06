import { ChakraTheme, extendTheme, type ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'dark',
};

const theme = extendTheme(config) as ChakraTheme;

export default theme;
