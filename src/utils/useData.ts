import { useState, useEffect } from "react";

export type Note = {
  id: string;
  title: string;
  tags: string[];
  content: string;
  lastEdited: string;
  isArchived: boolean;
};

export default function useData(url: string) {
  const [data, setData] = useState<Note[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    const getData = async () => {
      try {
        const response = await fetch(url, { signal: controller.signal });
        if (!response.ok) {
          setError("Error: cannot find the product");
          setData(null);
          return;
        }
        const json: Note[] = await response.json();
        setData(json);
        setError(null);
      } catch (err) {
        if (err instanceof DOMException && err.name === "AbortError") {
          setError("Aborted");
          return;
        }
        setData(null);
        setError(err instanceof Error ? err.message : String(err));
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };

    getData();
    return () => {
      controller.abort();
    };
  }, [url]);

  return {
    data,
    error,
    isLoading,
  };
}
