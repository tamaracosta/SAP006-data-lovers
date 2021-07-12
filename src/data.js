
export const filterData = (data, condition) => {
  return data.filter(condition);
 }
  
 export const sortData = (data, sortBy, sortOrder) => {
  
  return sortOrder == "crescente" ?
    data.sort((a, b) => { return a[sortBy] > b[sortBy] ? 1 : a[sortBy] < b[sortBy] ? -1 : 0 }) :
    data.sort((a, b) => { return a[sortBy] > b[sortBy] ? -1 : a[sortBy] < b[sortBy] ? 1 : 0 })
    
 }
  
 export const computeStats = (data) => {
  const soma = data.reduce((acumulado, atual) => acumulado + atual, 0);
  const divisor = data.length;
  const media = parseInt(soma) / divisor;
   return media.toFixed(2);
 }
 

 