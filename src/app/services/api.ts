import useSWR from 'swr';

const DATA_URL = 'https://gentle-plains-45068.herokuapp.com/api/';

// @ts-expect-error:
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export function useFetchComponents() {
  const { data, error } = useSWR(`${DATA_URL}components`, fetcher);

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
}

export function useFetchComponent(id: number) {
  const { data, error } = useSWR(`${DATA_URL}components/${id}`, fetcher);

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
}
