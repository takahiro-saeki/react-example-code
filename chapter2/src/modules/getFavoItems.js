const PATH = query => `http://hn.algolia.com/api/v1/items/${query}`;

const getFavoItems = async query => {
  const box = [];
  for (const item of query) {
    const getItem = await fetch(PATH(item));
    const toJSON = await getItem.json();
    await box.push(toJSON);
  }
  return box;
};

export default getFavoItems;
