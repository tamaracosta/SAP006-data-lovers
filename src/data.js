// estas funciones son de ejemplo

export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};

export const dadosLol = {
  filterData:
    function (data, condition) {
      return data.filter(condition);
    },

  sortData:
    function (data, sortBy, sortOrder) {

      sortOrder == "crescente" ?
        data.sort((a, b) => { return a[sortBy] > b[sortBy] ? 1 : a[sortBy] < b[sortBy] ? -1 : 0 }) :
        data.sort((a, b) => { return a[sortBy] > b[sortBy] ? -1 : a[sortBy] < b[sortBy] ? 1 : 0 })

    },

  computeStats:
    function (data) {

      let totalDificuldade = 0
      let totalPersonagens = data.length
      let resultadoFinal;

      for (let i = 0; i < data.length; i++) {
        totalDificuldade += data[i].info.difficulty
      }

      resultadoFinal = totalDificuldade / totalPersonagens
      return resultadoFinal.toFixed(2);

    }
}

