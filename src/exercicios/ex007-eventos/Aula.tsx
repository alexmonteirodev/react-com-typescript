import React from "react";
import Checkbox from "./Checkbox";

// - EventHandler
// É possível definir o elemento em que o EventHandler será usado. Assim o currentTarget será definido corretamente.

function Aula007() {
  return (
    <div>
      <Checkbox label="Termos e Condições" />
    </div>
  );
}

export default Aula007;
