// estas funciones son de ejemplo

// export const example = () => {
//   return 'example';
// };

// export const anotherExample = () => {
//   return 'OMG';
// };



export const filterData = (data, condition) => {
  return data.filter(condition);

};


export const sortData = (data, sortBy, sortOrder) => {
  sortOrder == "crescente" ?
    data.sort((a, b) => { return a[sortBy] > b[sortBy] ? 1 : a[sortBy] < b[sortBy] ? -1 : 0 }) :
    data.sort((a, b) => { return a[sortBy] > b[sortBy] ? -1 : a[sortBy] < b[sortBy] ? 1 : 0 })
}

export const computeStats = (data) => {
  if (Array.isArray(data) === false) {
    throw TypeError();
  }
  const soma = data.reduce((acumulado, atual) => acumulado + atual);
  const divisor = data.length;
  const media = (soma) / divisor;

  return media.toFixed(2);
}


