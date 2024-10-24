import { configureStore } from "@reduxjs/toolkit";
import procedenciaReducer from './../features/ProcedenciaSlice';  // Importa el reducer de procedencia

// Configuración del store
const store = configureStore({
  reducer: {
    procedencia: procedenciaReducer,  // Añade el reducer de procedencia al store
  },
});

export default store;
