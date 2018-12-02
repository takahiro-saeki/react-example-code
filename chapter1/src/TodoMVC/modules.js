export const checkFilter = () => {
  const checkHash = location.hash;
  switch (true) {
    case checkHash.includes('all'):
      return 'all';
    case checkHash.includes('active'):
      return 'active';
    case checkHash.includes('completed'):
      return 'completed';
    default:
      return 'all';
  }
};

export const persist = {
  read: () => JSON.parse(localStorage.getItem('store')),
  save: data => localStorage.setItem('store', JSON.stringify(data))
};
