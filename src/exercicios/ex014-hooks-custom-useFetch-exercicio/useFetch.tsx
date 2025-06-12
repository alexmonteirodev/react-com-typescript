import React from "react";

interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}
// interface OptionsApi {
//   method?: string;
//   headers?: HeadersInit;
//   body?: BodyInit | null;
//   mode?: string;
//   credentials?: string;
//   cache?: string;
//   redirect?: string;
//   referrerPolicy?: string;
// }
// options já tem um tipo próprio pré definido na API Fetch do navegador - RequestInit

const useFetch = <T,>(url: string, options: RequestInit): FetchState<T> => {
  const [data, setData] = React.useState<T | null>(null);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (!url) return;

    const fetchApi = async () => {
      setLoading(true);
      setError(null);
      try {
        const r = await fetch(url, options);
        if (!r.ok) {
          setError(`Erro: ${r.status}`);
          return;
        }
        const json = (await r.json()) as T;
        setData(json);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("Erro desconhecido");
        }
      } finally {
        setLoading(false);
      }
    };
    fetchApi();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
