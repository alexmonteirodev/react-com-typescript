import React from "react";
import Button from "./Button";

// Anote o tipo das propriedades de Button.tsx

function Aula006() {
  const [total, setTotal] = React.useState(0);

  return (
    <div>
      <p>Total: {total}</p>
      <Button total={total} setTotal={setTotal} />
    </div>
  );
}

export default Aula006;
