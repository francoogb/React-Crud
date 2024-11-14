import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const likeSlice = createSlice({
  name: "like",
  initialState,
  reducers: {
    sumador: (state) => {
      state.value += 1; // Incrementa el valor en 1
    },
    reset: (state) => {
      state.value = 0; // Resetea el contador a 0
    },
  },
});

// Exportar las acciones
export const { sumador, reset } = likeSlice.actions;

// Exportar el reducer
export default likeSlice.reducer;
