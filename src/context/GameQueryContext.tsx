import { ReactNode, createContext, useState } from 'react';
import { Genre } from '../services/genres-service';
import { Platform } from '../services/platform-service';

interface Props {
  children: ReactNode;
}

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
  page?: string | null;
}

export type GameContextType = {
  gameQuery: GameQuery;
  setGameQuery: (query: GameQuery) => void;
};

export const GameQueryContext = createContext<GameContextType>({
  gameQuery: {
    genre: null,
    platform: null,
    sortOrder: '',
    searchText: '',
    page: null,
  } as GameQuery,
  setGameQuery: function (): void {
    throw new Error('Function not implemented.');
  },
});

export const GameQueryContextProvider = ({ children }: Props) => {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <GameQueryContext.Provider
      value={{
        gameQuery,
        setGameQuery,
      }}
    >
      {children}
    </GameQueryContext.Provider>
  );
};
