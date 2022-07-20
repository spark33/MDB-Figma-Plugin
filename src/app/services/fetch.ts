import useSWR from 'swr';

const API = 'https://gentle-plains-45068.herokuapp.com/api/';

// @ts-expect-error:
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export function useFetchComponents() {
  const { data, error } = useSWR(`${API}components`, fetcher);

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
}

export function useFetchComponent(id: number) {
  const { data, error } = useSWR(`${API}components/${id}`, fetcher);

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
}
