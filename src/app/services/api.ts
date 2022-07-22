import useSWR from 'swr';
import { stringify } from 'qs';

const DATA_URL = 'https://gentle-plains-45068.herokuapp.com/api/';

// @ts-expect-error:
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export function useFetchComponents() {
  const { data, error } = useSWR(`${DATA_URL}components`, fetcher);
  console.log(data);

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
}

export function useFetchComponent(id: number) {
  const query = stringify(
    {
      populate: ['DesignGuidelines', 'DesignGuidelines.content'],
    },
    {
      encodeValuesOnly: true, // prettify URL
    }
  );

  const { data, error } = useSWR(`${DATA_URL}components/${id}?${query}`, fetcher);
  console.log(query);
  console.log(data);

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
}

export function useFetchVersion(id: number) {
  const { data, error } = useSWR(`${DATA_URL}component-figma-versions/${id}`, fetcher);

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
}
