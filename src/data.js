// estas funciones son de ejemplo

export const example = () => {
  return 'example';
};

// export const filterData = (data, condition) => {
//   return data.filter(condition);
// };



export const dadosLol = {
  filterData:
    function (data, condition) {
      return data.filter(condition);
    },

  sortData:
    function (data, sortBy, sortOrder) {
      //data.sort(function (sortBy, sortOrder){//ternário
      sortOder ? //a condição é true?}
        function (data) {
          return sortOrder(data[sortBy])
        } :
        function (data) {
          return data[sortBy];
        }
      //   if (a<b) {
      //     return -1;
      //   }
      //   if (a>b) {
      //     return 1;
      //   }
      //   // a debe ser igual b
      //   return 0;
      // })




    }
}
