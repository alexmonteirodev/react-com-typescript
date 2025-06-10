import React from "react";

// - React
// DICA: use o vscode para aprender ou saber qual type é de qual elemento. Ao passar o mouse por cima de elementos que estão conectados da pra ter uma noção sem precisar ir ver em documentação.
// As interfaces de React com TypeScript estão disponíveis diretamente no objeto React importado de React. (cmd + clique para acessar em React)

// - JSX.Element
// Elemento que é retornado pelo componente. Pode ser também: React.ReactElement e React.JSX.Element. Não precisamos anotar, pois o React já infere o mesmo.

// - Eventos
// Não confunda, um evento onClick no React é um evento próprio do React e não um evento nativo do JavaScript. O correto é React.MouseEvent e não MouseEvent.

const Aula005 = () => {
  const handleClick = (e: React.MouseEvent) => {
    console.log(e);
  };
  return <button onClick={handleClick}>Comprar</button>; //React.DOMAttributes<HTMLButtonElement>.onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined
};

export default Aula005;

//poderia também informar que o handleClick é um React.MouseEventHandler. Assim ele assume que event é um React.MouseEvent
const handleClick: React.MouseEventHandler = (event) => {
  //repare que ao colocar o mouse em cima de onClick ele diz o type
  console.log(event.pageX);
};
