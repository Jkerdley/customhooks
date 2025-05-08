import { useCallback, useEffect, useState } from "react";

export interface PostsDTO {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export type QueryParams = {
  params?: Record<string, string | number>;
};

interface UseFetchReturnData {
  data: PostsDTO[];
  isLoading: boolean;
  error: string | null;
  refetch: (params?: QueryParams) => void;
}

export const useFetch = (url: string): UseFetchReturnData => {
  const [data, setData] = useState<PostsDTO[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchServerData = useCallback(
    async (queryParams?: QueryParams) => {
      try {
        setIsLoading(true);
        setError(null);
        const params = queryParams?.params;
        const query = params
          ? `?${new URLSearchParams(params as Record<string, string>)}`
          : "";

        const res = await fetch(`${url}${query}`);
        if (!res.ok) {
          throw new Error(`Ошибка HTTP запроса. Статус: ${res.status}`);
        }
        const posts = (await res.json()) as PostsDTO[];
        setData(posts);
      } catch (error) {
        setError(error instanceof Error ? error.message : "Неизвестная ошибка");
        setData([]);
      } finally {
        setIsLoading(false);
      }
    },
    [url]
  );

  useEffect(() => {
    fetchServerData();
  }, [fetchServerData]);

  const refetch = useCallback(
    (params?: QueryParams) => {
      fetchServerData(params);
    },
    [fetchServerData]
  );

  return { data, isLoading, error, refetch };
};
