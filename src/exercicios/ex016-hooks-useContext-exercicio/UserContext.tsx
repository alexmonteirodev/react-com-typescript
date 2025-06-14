import React from "react";
import useFetch from "./UseFetch";

interface UserPreferenceInterface {
  id: number;
  nome: string;
  idade: number;
  aulas: number;
  cursos: number;
  preferencias: {
    playback: number;
    volume: number;
    qualidade: string;
  };
}

type FetchInterface = {
  data: UserPreferenceInterface | null;
  loading: boolean;
  error: string | null;
};

const UserContext = React.createContext<FetchInterface | null>(null);

export const useUserContext = () => {
  const context = React.useContext(UserContext);

  if (context === null) throw new Error("escqueceu de passar o provider");

  return context;
};

export const UserContextProvider = ({ children }: React.PropsWithChildren) => {
  const userPreferences = useFetch<UserPreferenceInterface>(
    "https://data.origamid.dev/usuarios/1"
  );

  return (
    <UserContext.Provider value={userPreferences}>
      {children}
    </UserContext.Provider>
  );
};
