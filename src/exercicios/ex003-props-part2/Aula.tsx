import React from "react";
import Button from "./Button";

// - Props
//ver compontente button
const Aula002 = () => {
  const [total, setTotal] = React.useState(0);

  function incrementar() {
    setTotal((total) => total + 1);
  }

  return (
    <>
      <p>Total: {total}</p>
      <Button className="btn" tamanho="1.25rem" onClick={incrementar}>
        Incrementar
      </Button>
    </>
  );
};

export default Aula002;
