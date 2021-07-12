import {  computeStats } from '../src/data.js';

describe('computeStats', () => {
  it('deve ser uma função', () => {
    expect(typeof computeStats).toBe("function");
  });

  it('deve jogar um TypeError quando invocado com tipos de argumentos errados', () => {
    expect(() => computeStats(4)).toThrow(TypeError); //argumento tipo number
    expect(() => computeStats('string')).toThrow(TypeError); //argumento tipo string
    expect(() => computeStats()).toThrow(TypeError); //argumento vazio 
    expect(() => computeStats(null)).toThrow(TypeError); //argumento null
    expect(() => computeStats({})).toThrow(TypeError);
  });

  it('deve retornar media 8.00 para data [7,10,7]', () => {
    expect(computeStats([7,10,7])).toBe('8.00');
  })
})

