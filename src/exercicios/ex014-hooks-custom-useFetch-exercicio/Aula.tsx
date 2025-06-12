import React, { useLayoutEffect } from "react";
import useFetch from "./useFetch";

// Crie um custom hook chamado useFetch.

// 1 - Este hook deve retornar a interface:
// interface FetchState<T> {
//   data: T | null;
//   loading: boolean;
//   error: string | null;
// }

// Onde T é um valor genérico que deverá ser passado quando o Hook for utilizado.

// 2 - data, loading e error são estados reativos (useState).

// 3 - O hook deve receber a URL e OPTIONS como argumentos (interfaces de fetch).

// 4 - O fetch deve ocorrer em um useEffect, com dependência apenas da URL.

// 5 - Use AbortController para abortar o fetch caso o componente desmonte, antes do fetch ser concluído.

// 6 - Teste o Hook com a api: https://data.origamid.dev/produtos

interface ApiInterface {
  id: string;
  nome: string;
  preco: number;
  quantidade: number;
  descricao: string;
  internacional: boolean;
}

const Aula014 = () => {
  const [id, setId] = React.useState("p001");
  const produtos = useFetch<ApiInterface[]>(
    "https://data.origamid.dev/produtos"
  );
  const produto = useFetch<ApiInterface>(
    `https://data.origamid.dev/produtos/${id}`
  );
  if (produtos.loading) return <p>Carregando...</p>;
  if (produtos.error) return <p>Erro: {produtos.error}</p>;
  return (
    <section className="flex">
      <div>
        {produtos.data &&
          produtos.data.map((produto) => (
            <button onClick={() => setId(produto.id)} key={produto.id}>
              {produto.id}
            </button>
          ))}
      </div>
      <div>
        {produto.loading && <p>Carregando...</p>}
        {produto.data && (
          <ul>
            <li>ID: {produto.data.id}</li>
            <li>Nome: {produto.data.nome}</li>
            <li>Descrição: {produto.data.descricao}</li>
            <li>Quantidade: {produto.data.quantidade}</li>
          </ul>
        )}
      </div>
    </section>
  );
};

export default Aula014;

// sua solução - boa solucão ----------------------
// interface ApiInterface {
//   id: string;
//   nome: string;
//   preco: number;
//   quantidade: number;
//   descricao: string;
//   internacional: boolean;
// }

// const options = {
//   method: "GET",
// };

// const Aula014 = () => {
//   const { data, loading, error } = useFetch<ApiInterface[]>(
//     "https://data.origamid.dev/produtos",
//     options
//   );
//   if (loading) return <p>Carregando...</p>;
//   if (error) return <p>Erro: {error}</p>;
//   return (
//     <div>
//       {data?.map((produto) => (
//         <div key={produto.id}>
//           <h2>{produto.nome}</h2>
//           <p>{produto.descricao}</p>
//           <p>Preço: R$ {produto.preco}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Aula014;
