import React from "react";

interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

const useFetch = <T,>(
  url: RequestInfo | URL,
  options?: RequestInit
): FetchState<T> => {
  const [data, setData] = React.useState<T | null>(null);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string | null>(null);

  const optionsRef = React.useRef(options);
  optionsRef.current = options;

  React.useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    if (!url) return;

    const fetchApi = async () => {
      setLoading(true);
      setData(null);
      setError(null);
      try {
        const r = await fetch(url, {
          signal: signal,
          ...optionsRef.current,
        });
        if (!r.ok) throw new Error(`Erro: ${r.status}`);
        const json = (await r.json()) as T;
        if (!signal.aborted) setData(json);
      } catch (error) {
        if (!signal.aborted && error instanceof Error) {
          setError(error.message);
        } else {
          setError("Erro desconhecido");
        }
      } finally {
        if (!signal.aborted) setLoading(false);
      }
    };
    fetchApi();

    return () => {
      controller.abort();
    };
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
