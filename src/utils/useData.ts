import { useState, useEffect } from "react";

export type Note = {
  id: string;
  title: string;
  tags: string[];
  content: string;
  lastEdited: string;
  isArchived: boolean;
};

export type Notes = Note[];

export type UseDataResult = {
  data: Note[];
  setData: React.Dispatch<React.SetStateAction<Notes>>;
  error: string | null;
  isLoading: boolean;
};

export default function useData(source: string): UseDataResult {
  const [data, setData] = useState<Notes>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // localStorage
  useEffect(() => {
    if (source === "local") {
      try {
        const localNotes = localStorage.getItem("notes");
        setData(localNotes ? JSON.parse(localNotes) : []);
      } catch {
        setError("fail");
        setData([]);
      } finally {
        setIsLoading(false);
      }
    } else {
      // API
      const controller = new AbortController();

      const getData = async () => {
        if (source !== "local") {
          try {
            const response = await fetch(source, { signal: controller.signal });
            if (!response.ok) {
              setError("Error: cannot find the product");
              setData([]);
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
            setData([]);
            setError(err instanceof Error ? err.message : String(err));
            console.log(err);
          } finally {
            setIsLoading(false);
          }
        }
      };
      getData();
      return () => {
        controller.abort();
      };
    }
  }, [source]);

  useEffect(() => {
    if (source === "local") {
      localStorage.setItem("notes", JSON.stringify(data));
    }
  }, [source, data]);

  return {
    data,
    setData,
    error,
    isLoading,
  };
}
