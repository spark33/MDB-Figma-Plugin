import useSWR from 'swr';
import { fetcher } from './base';

const STRAPI_URL = 'https://gentle-plains-45068.herokuapp.com/api/';

export function useFetchComponents() {
  const { data, error } = useSWR(`${STRAPI_URL}components`, fetcher);

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
}

export function useFetchComponent(id: number) {
  const { data, error } = useSWR(`${STRAPI_URL}components/${id}`, fetcher);

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
}
