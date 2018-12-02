const PATH = '//hn.algolia.com/api/v1/search?query=react';
const SEARCH_PATH = query =>
  `//hn.algolia.com/api/v1/search?query=${query}&tags=story`;
const getSearch = async (query = false) => {
  if (query) {
    const SERACH = SEARCH_PATH(query);
    const fetchData = await fetch(SERACH);
    const json = await fetchData.json();
    return json;
  }
  const fetchData = await fetch(PATH);
  const json = await fetchData.json();
  return json;
};

export default getSearch;
