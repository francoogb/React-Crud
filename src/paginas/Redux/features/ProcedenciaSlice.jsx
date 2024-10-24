import { createSlice } from "@reduxjs/toolkit";

// Definir el estado inicial fuera del componente
const initialState = {
  pais: "Chile",
  ciudad: "Viña del Mar",
};

// Slice de Redux para manejar el estado de procedencia
const procedenciaSlice = createSlice({
  name: "procedencia",
  initialState,
  reducers: {
    cambiarArgentina: (state) => {
      state.pais = "Argentina";
      state.ciudad = "Buenos Aires";
    },
    cambiarMexico: (state) => {
      state.pais = "México";
      state.ciudad = "Ciudad de México";
    },
    cambiarBrasil: (state) => {
      state.pais = "Brasil";
      state.ciudad = "Río de Janeiro";
    },
    cambiarPeru: (state) => {
      state.pais = "Perú";
      state.ciudad = "Lima";
    },
    cambiarColombia: (state) => {
      state.pais = "Colombia";
      state.ciudad = "Bogotá";
    },
    VolverChile: (state) => {
      state.pais = "Chile";
      state.ciudad = "Viña del Mar";
    },
  },
});

// Exportar las acciones y el reducer del slice
export const { cambiarArgentina, cambiarMexico, cambiarBrasil, cambiarPeru, cambiarColombia, VolverChile } = procedenciaSlice.actions;

export default procedenciaSlice.reducer;
