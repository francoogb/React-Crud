import { createSlice } from "@reduxjs/toolkit";

// Definir el estado inicial fuera del componente
const initialState = {
  numero1: 10,
  numero2: 10,
  resultado: 0,
};

export const calculadoraSlice = createSlice({
  name: "calculadora",
  initialState,
  reducers: {
    sumar: (state) => {
      state.resultado = state.numero1 + state.numero2;
    },
    restar: (state) => {
      state.resultado = state.numero1 - state.numero2;
    },
    multiplicar: (state) => {
      state.resultado = state.numero1 * state.numero2;
    },
    dividir: (state) => {
      // Validación para evitar división por cero
      if (state.numero2 !== 0) {
        state.resultado = state.numero1 / state.numero2;
      } else {
        state.resultado = "Error: División por cero";
      }
    },
    resetear: (state) => {
      state.resultado = 0;
    },
  },
});


// Exportar las acciones y el reducer del slice
export const { sumar, restar, multiplicar, dividir, resetear } = calculadoraSlice.actions;

export default calculadoraSlice.reducer;
