import React from "react";
import { useUi } from "./UiContext";

const Header = () => {
  //   const ui = React.useContext(UiContext);
  //   console.log(ui);

  // não chamar o  const ui = React.useContext(UiContext); e sim o useui pois o que iamos fazer aqui já fizemos no context e agora é só receber o contexto e usar direto porque já é feita a verificação dele lá no componente do contexto.

  const { dark, setDark } = useUi();

  return (
    <div>
      <h1>{dark ? "dark" : "light"} </h1>
      <button onClick={() => setDark((b) => !b)}>Mode</button>
    </div>
  );
};

export default Header;
