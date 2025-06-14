import React from "react";
import { useUserContext } from "./UserContext";

const Content = () => {
  const { data, loading, error } = useUserContext();

  if (loading) return <p>Carregando...</p>;
  if (!data?.preferencias) return <p>{error}</p>;

  const preferencias = Object.entries(data?.preferencias);

  return (
    <div>
      <h2>Preferências:</h2>
      <ul>
        {preferencias.map(([key, value]) => (
          <li key={key}>
            {key}: {value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Content;

//   const frutas = ["banana", "doce"];

//   const [fruta, sabor] = frutas;
//   console.log(fruta, sabor) //"banana", "doce"
