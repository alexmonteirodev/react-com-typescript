import React from "react";
import Header from "./Header";
import Content from "./Content";
import { UserContextProvider } from "./UserContext";

// Utilize a API: https://data.origamid.dev/usuarios/1

// 1 - Crie um UserContext
// 2 - Use o useFetch dentro do UserContext para exportar data, loading e error
// 3 - Crie dois componentes: Header.tsx e Content.tsx e adicine ambos ao App.tsx
// 4 - Mostre o nome da pessoa em Header.tsx e as preferências em Content.tsx

const Aula016 = () => {
  return (
    <UserContextProvider>
      <Header />
      <Content />
    </UserContextProvider>
  );
};

export default Aula016;
