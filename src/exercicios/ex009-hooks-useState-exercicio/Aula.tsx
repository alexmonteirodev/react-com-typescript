import React from "react";
import Data from "./Data";
import Input from "./Input";

// - Exercicio

// Interface da API: https://data.origamid.dev/vendas/
// <!-- Essa API possui dados de hoje até 90 dias atrás -->

// 1 - Utilize a API: `https://data.origamid.dev/vendas/?inicio=${inicio}&final=${final}`
// 2 - Inicio/Final é uma string do tipo data YYYY-MM-DD (padrão de saída do input tipo date)
// 3 - Crie ou reutilize o componente Input.tsx (Label com Input) das aulas anteriores
// 4 - Crie 3 estados reativos em App.tsx: data, inicio, final
// 5 - Utilize o componente Input.tsx para modificar o estado de inicio/final
// 6 - Crie um efeito que ocorrerá toda vez que inicio/final mudar. Se existir inicio/final, faça o fetch da API e popule o estado de data com o resultado.
// 7 - Caso data seja diferente de null, mostre na tela o nome e o status de cada venda do período selecionado

function Aula009() {
  const [data, setData] = React.useState<ApiInterface[] | null>(null);
  const [inicio, setInicio] = React.useState("");
  const [final, setFinal] = React.useState("");

  function handleInicio({ target }: React.ChangeEvent<HTMLInputElement>) {
    if (target.id === "inicio") {
      setInicio(target.value);
    } else if (target.id === "final") {
      setFinal(target.value);
    }
  }
  console.log(data);
  return (
    <div>
      <Data setData={setData} inicio={inicio} final={final} />
      <Input id="inicio" txt="Início:" onChange={handleInicio} />
      <Input id="final" txt="Final:" onChange={handleInicio} />
      <ul>
        {data?.map(({ nome, status }, i) => (
          <li key={i}>
            {nome}: {status}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Aula009;
