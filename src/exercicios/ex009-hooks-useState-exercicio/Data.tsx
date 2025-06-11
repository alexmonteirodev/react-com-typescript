import React from "react";

type TypeSetData = {
  setData: React.Dispatch<React.SetStateAction<null | ApiInterface[]>>;
  inicio: string;
  final: string;
};
declare global {
  interface ApiInterface {
    id: string;
    nome: string;
    preco: number;
    status: string;
    pagamento: string;
    parcelas: number | null;
    data: string;
  }
}

const Data = ({ setData, inicio, final }: TypeSetData) => {
  const linkApiBuscaData = `https://data.origamid.dev/vendas/?inicio=${inicio}&final=${final}`;

  React.useEffect(() => {
    if (inicio && final) {
      async function fetchData(api: string) {
        const r = await fetch(api);
        const json: ApiInterface[] = await r.json();
        return setData(json);
      }

      fetchData(linkApiBuscaData);
    } else {
      console.log("erro, selecione datas");
    }
  }, [inicio, final]);

  return <></>;
};

export default Data;
