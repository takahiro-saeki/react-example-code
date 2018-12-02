// resources: https://www.sitepoint.com/colors-json-example/

const mock = {
  aliceblue: '#f0f8ff',
  antiquewhite: '#faebd7',
  aqua: '#00ffff',
  aquamarine: '#7fffd4',
  azure: '#f0ffff',
  beige: '#f5f5dc',
  bisque: '#ffe4c4',
  black: '#000000',
  blanchedalmond: '#ffebcd',
  blue: '#0000ff',
  blueviolet: '#8a2be2',
  brown: '#a52a2a'
};

const values = Object.values(mock);
const keys = Object.keys(mock);
const createData = values.map((item, id) => ({
  name: keys[id],
  color: item
}));

export default createData;
