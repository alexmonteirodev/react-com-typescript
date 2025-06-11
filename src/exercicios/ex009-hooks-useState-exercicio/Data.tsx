import React from "react";

type TypeSetData = {
  setData: React.Dispatch<React.SetStateAction<null | ApiInterface[]>>;
};

interface ApiInterface {
  id: string;
  nome: string;
  preco: number;
  status: string;
  pagamento: string;
  parcelas: number | null;
  data: string;
}

const Data = ({ setData }: TypeSetData) => {
  const linkApi = "https://data.origamid.dev/vendas/";

  React.useEffect(() => {
    async function fetchData(api: string) {
      const r = await fetch(api);
      const json: ApiInterface[] = await r.json();
      return setData(json);
    }

    fetchData(linkApi);
  }, []);

  return <div>teste</div>;
};

export default Data;
