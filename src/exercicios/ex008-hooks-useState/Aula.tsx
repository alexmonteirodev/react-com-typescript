import React from "react";
import Button from "./Button";

// - useState
// O React faz um bom trabalho ao inferir o type quando passamos o valor do useState, o problem é quando o tipo pode ser multiplos tipos (em um fetch por exemplo)
// Generics para definir os possíveis tipos: useState<null | User>(null).
//Outro problema que podemos ter é quando vamos passar o state para outro componente, ai também teremos que anotar o tipo no outro componente, no state o primeiro elemento é simple, é o valor e o setSegundoElemento, basta colocar o mouse em cima para ver o type

function userFetch() {
  return {
    nome: "André",
    profissao: " Designer",
  };
}

type UserData = {
  nome: string;
  profissao: string;
};

function Aula008() {
  const [data, setData] = React.useState<null | UserData>(null);
  const [total, setTotal] = React.useState(0);

  React.useEffect(() => {
    setTimeout(() => {
      setData(userFetch());
    }, 1000);
  }, []);

  return (
    <div>
      <div style={{ marginBottom: "1rem" }}>
        {data === null ? (
          "carregando..."
        ) : (
          <div>
            {data?.nome}: {data?.profissao}
          </div>
        )}
      </div>
      <Button setTotal={setTotal} />
      <p>{total}</p>
    </div>
  );
}

export default Aula008;
