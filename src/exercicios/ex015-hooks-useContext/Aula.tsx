import React from "react";
import { UiContextProvider } from "./UiContext";
import Header from "./Header";

// - useContext
// Defina a interface do contexto e passe ela no genérico do createContext React.createContext<IUiContext | null>(null).
//exemplo: vamos criar um componente chamado UiContext, que terá elementos de Ui da aplicação e quero que sejam globais, como por exemplo dark mode, modais e etc...
//no exemplo a seguie como o componente Header está dentro do contexto, ele tem acesso a qualquer valor que for exportado em value no componente UiContext

const Aula015 = () => {
  return (
    <UiContextProvider>
      <Header />
    </UiContextProvider>
  );
};

export default Aula015;
