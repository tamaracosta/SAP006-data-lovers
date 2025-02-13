export const filterDataNome = (data, propriedade, nomePersonagem) => {
    return data.filter(function (cartaoAtual) {
        if (cartaoAtual[propriedade].toUpperCase().includes(nomePersonagem.toUpperCase())) {
            return true;
        }
        else {
            return false;
        }
    });
}


export const sortData = (data, sortBy, sortOrder) => {
  return sortOrder === "crescente" ?
    data.sort((a, b) => { return a[sortBy] > b[sortBy] ? 1 : a[sortBy] < b[sortBy] ? -1 : 0 }):
    data.sort((a, b) => { return a[sortBy] > b[sortBy] ? -1 : a[sortBy] < b[sortBy] ? 1 : 0 })
}

export const computeStats = (data) => {
  if (Array.isArray(data) === false) {
    throw TypeError();
  }
  const soma = data.reduce((acumulado, atual) => acumulado + atual, 0);
  const divisor = data.length;
  const media = soma / divisor;
  return media.toFixed(2);
}


export const filterNestedObj = (data, selected, obj) => {
  if (typeof selected !== "string" && Array.isArray(selected) === false || Array.isArray(data) === false || typeof obj !== "function") {
    throw TypeError();
  }
  return data.filter(item => selected.includes(obj(item)));
}



export const filterNestedArr = (data, propriedade, selected) => {
  if (typeof selected !== "string" && Array.isArray(selected) === false || Array.isArray(data) === false) {
    throw TypeError();
  }
  return data.filter(item => item[propriedade].some(s => selected.includes(s)));
}
