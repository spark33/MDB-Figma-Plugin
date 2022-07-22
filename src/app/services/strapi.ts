import useSWR from 'swr';
import { fetcher } from './base';
import { stringify } from 'qs';

const STRAPI_URL = 'https://gentle-plains-45068.herokuapp.com/api/';

export function useFetchComponents() {
  const { data, error } = useSWR(`${STRAPI_URL}components?populate[0]=component_image`, fetcher);

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
}

export function useFetchComponent(id: number) {
  const query = stringify(
    {
      populate: {
        DesignGuideline: {
          populate: '*',
        },
        DevelopmentGuidelines: {
          populate: '*',
        },
        component_variants: {
          populate: ['thumbnail'],
        },
        component_figma_versions: {
          populate: ['thumbnail'],
        },
      },
    },
    {
      encodeValuesOnly: true,
    }
  );

  const { data, error } = useSWR(`${STRAPI_URL}components/${id}?${query}`, fetcher);

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
}
