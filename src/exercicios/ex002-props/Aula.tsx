import React from "react";
import Button from "./Button";

// - Props
// É preciso anotar as props que um componente recebe.

//se vc escrever o type do button quando for usar outro button sem alguma das propriedades vai dar erro de TS, portanto é interessante usar propriedades opcionais? para poder reutilizar componentes depois

//caso queira passar o innerText do button como propriedade para poder escolher o texto cada vez que for utilizar ele, basta usar o children.
// o que é o children de um elemento react? - pode ser uma string, outro elemento react, tag html, enfim, pode ser um monte de coisa, logo, o react tem um tipo próprio que se chama reactNode

const Aula002 = () => {
  const [total, setTotal] = React.useState(0);

  function incrementar() {
    setTotal((total) => total + 1);
  }

  return (
    <>
      <p>Total: {total}</p>
      <Button tamanho="1.25rem" onClick={incrementar}>
        Incrementar
      </Button>
    </>
  );
};

export default Aula002;
