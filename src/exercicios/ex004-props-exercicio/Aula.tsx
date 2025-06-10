import React from "react";
import Input from "./Input";

// Exercicio

// 1 - Crie um componente Input
// 2 - Ele deve retornar <label> e <input>, dentro de uma <div>
// 3 - Recebe uma propriedade chamada label
// 4 - A propriedade deve ser usada como htmlFor (label), name (input), id (input) e como conteúdo de <label>
// 5 - Permita o uso de qualquer propriedade de input no componente Input.
// 6 - Adicione 1rem de marginBottom na <div>

const Aula004 = () => {
  const [data, setData] = React.useState("");
  return (
    <div>
      <Input id="nome" label="Nome" />
      <Input name="email" id="email" label="Email" />
      <Input
        value={data}
        onChange={(e) => setData(e.currentTarget.value)}
        name="data"
        id="data"
        label="Data"
        type="date"
      />
      <Input id="horario" label="Horário" type="time" />
      <p>Data da viagem: {data}</p>
    </div>
  );
};

export default Aula004;
