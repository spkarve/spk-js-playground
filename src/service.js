export const getCatalog = () => {
  const CATALOG_URL =
    "https://skarve-dev.s3.ap-south-1.amazonaws.com/catalog_v1.json";
  return fetch(CATALOG_URL).then((response) => response.json());
};

export const getFilters = () => {
  const FILTERS_URL =
    "https://skarve-dev.s3.ap-south-1.amazonaws.com/filters_v1.json";

  return fetch(FILTERS_URL).then((response) => response.json());
};
