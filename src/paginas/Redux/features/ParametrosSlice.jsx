import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    nombre: "",
    perfil_id : 3,
    perfil : ""
  
}

 export const  parametrosSlice = createSlice ({
    name: "parametros",
    initialState,
    reducers: {

        iniciarSesion : (state, datos)=> {
            
            state.nombre = datos.payload.nombre;
            state.perfil_id = datos.payload.perfil_id;
            state.perfil = datos.payload.perfil;

        }
    }
})

// Exporta las acciones generadas
export const { iniciarSesion } = parametrosSlice.actions;

// Exporta el reducer para usarlo en la configuración de la tienda
export default parametrosSlice.reducer;