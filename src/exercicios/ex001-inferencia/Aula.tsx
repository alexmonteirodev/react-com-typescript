import React from "react";
// o TS funciona muito bem com o React e infere a maioria dos tipos, exemplo é o estado total. Então vamos deixar o React inferir o máximo possível sempore e só usar anotações de tipo quando forem necessárias
// Então precisamos anotar o tipo quando o React não consegue prever o tipo do elemento, exemplo ao passar um event (ou props que um componente recebe - prox aula). E aqui que as coisas mudam realmente, pois ao passar um tipo ao evento de 'MouseEvent' no argumento de 'incrementar', temos um erro no evento onClick, porque em React os eventos são criados em uma interface própria do React, o que faz com que ao inves de ser 'MouseEvent', seja, 'React.MouseEvent'.

//obs: basicamente temos que anotar o tipo quando:
// 1- em events - ver aula 007
// 2- ao passar como props - ver aula 002
// 3- tipos que tem multiplos tipos nos hooks (quando o state recebe um fetch por exemplo) - ver aula 008
// 4- com hooks, ao passar para outro componente tbm tem que anotar - ver aula 008

const Aula001 = () => {
  const [total, setTotal] = React.useState(0);
  // const total: number
  // const setTotal: React.Dispatch<React.SetStateAction<number>>

  function incrementar(event: React.MouseEvent) {
    setTotal((total) => total + 1);
    console.log(event);
  }

  return (
    <div>
      <p>{total}</p>
      <button onClick={incrementar}>Incrementar</button>
    </div>
  );
};

export default Aula001;
