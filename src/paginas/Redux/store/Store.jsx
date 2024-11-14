import { configureStore } from "@reduxjs/toolkit";
import procedenciaReducer from './../features/ProcedenciaSlice';  // Importa el reducer de procedencia
import calculadoraReducer from './../features/CalculadoraSlice';  // Importa el reducer de procedencia
import likeReducer from './../features/LikeSlice';  // Importa el reducer de procedencia
import parametrosReducer from './../features/ParametrosSlice';  // Importa el reducer de procedencia


// Configuración del store
const store = configureStore({
  reducer: {
    procedencia: procedenciaReducer,  // Añade el reducer de procedencia al store
    calculadora: calculadoraReducer,  // Añade el reducer de calculadora al store
    like : likeReducer,
    parametros : parametrosReducer

  },
});

export default store;
