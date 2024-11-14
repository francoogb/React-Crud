import axios from "axios"; //npm i axios

// Encabezados corregidos
let cabeceros = {
  "Content-Type": "application/json",
  Authorization:
    "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MzYsImlhdCI6MTczMDIzNTA0OSwiZXhwIjoxNzMyODI3MDQ5fQ.RI9FU6E37w62DX-JPO44-y-wP5YvmZLo-WCJXrLU0X0",
};

let cabeceros_upload = {
  "Content-Type": "multipart/form-data",
  Authorization:
    "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MzYsImlhdCI6MTczMDIzNTA0OSwiZXhwIjoxNzMyODI3MDQ5fQ.RI9FU6E37w62DX-JPO44-y-wP5YvmZLo-WCJXrLU0X0",
};

// Función para obtener categorías con .then()
export function getCategorias() {
  return axios
    .get(`${import.meta.env.VITE_API_URL}categorias`, {
      headers: cabeceros,
    })
    .then((response) => {
      // Verifica si la respuesta fue exitosa
      if (response.status === 200) {
        return response.data;
      } else {
        // Lanza un error si la comunicación falló
        throw new Error(
          "Fallo la comunicación en el then. Status: " + response.status
        );
      }
    })
    .catch((error) => {
      // Maneja el error y lo imprime en la consola
      console.error("Error al obtener categorías:", error);
      throw error; // Lanza el error para manejarlo externamente si es necesario
    });
}

export function addCategorias(request) {
  return axios
    .post(`${import.meta.env.VITE_API_URL}categorias`, request, {
      headers: cabeceros,
    })
    .then((response) => {
      // Retorna el estado de la respuesta
      return response.status;
    })
    .catch((error) => {
      console.error("Error al agregar la categoría:", error);
      // Opcionalmente, puedes lanzar el error o devolver un valor como null
      throw error; // O puedes devolver un valor como null o -1
    });
}

export function getCategoriasId(id) {
  return axios
    .get(`${import.meta.env.VITE_API_URL}categorias/${id}`, {
      headers: cabeceros,
    })
    .then((response) => {
      // Verifica si la respuesta fue exitosa
      if (response.status === 200) {
        return response.data;
      } else {
        // Lanza un error si la comunicación falló
        throw new Error(
          "Fallo la comunicación en el then. Status: " + response.status
        );
      }
    })
    .catch((error) => {
      // Maneja el error y lo imprime en la consola
      console.error("Error al obtener categorías:", error);
      throw error; // Lanza el error para manejarlo externamente si es necesario
    });
}

// Función para editar categorías
export async function editCategorias(request, id) {
  try {
    const response = await axios.put(
      `${import.meta.env.VITE_API_URL}categorias/${id}`,
      request,
      {
        headers: cabeceros,
      }
    );

    // Verifica si la respuesta es exitosa (200 o 201)
    if (response.status === 200 || response.status === 201) {
      return response.status; // Retorna el estado de éxito
    } else {
      console.warn(`Unexpected status code: ${response.status}`);
      return null; // Retorna null si no es 200 o 201
    }
  } catch (error) {
    console.error("Error al editar la categoría:", error);
    return -1; // Retorna -1 en caso de error
  }
}

// Función para eliminar categorías
export async function deleteCategorias(id) {
  try {
    const response = await axios.delete(
      `${import.meta.env.VITE_API_URL}categorias/${id}`,
      {
        headers: cabeceros,
      }
    );

    console.log("Response completa:", response); // Verifica toda la respuesta para entender qué está sucediendo

    // Retornar solo el código de estado
    return response.status;
  } catch (error) {
    console.error("Error al eliminar la categoría:", error);
    return -1; // Retorna -1 en caso de error
  }
}

// Función para obtener productos con .then()
export function getProductos(page) {
  return axios
    .get(`${import.meta.env.VITE_API_URL}productos?page=${page}`, {
      headers: cabeceros,
    })
    .then((response) => {
      // Verifica si la respuesta fue exitosa
      if (response.status === 200) {
        return response.data;
      } else {
        // Lanza un error si la comunicación falló
        throw new Error(
          "Fallo la comunicación en el then. Status: " + response.status
        );
      }
    })
    .catch((error) => {
      // Maneja el error y lo imprime en la consola
      console.error("Error al obtener categorías:", error);
      throw error; // Lanza el error para manejarlo externamente si es necesario
    });
}

// Función para obtener productos con .then()
export function getCategoriasPorSlug(slug) {
  return axios
    .get(`${import.meta.env.VITE_API_URL}categorias-slug/${slug}`, {
      headers: cabeceros,
    })
    .then((response) => {
      // Verifica si la respuesta fue exitosa
      if (response.status === 200) {
        return response.data;
      } else {
        // Lanza un error si la comunicación falló
        throw new Error(
          "Fallo la comunicación en el then. Status: " + response.status
        );
      }
    })
    .catch((error) => {
      // Maneja el error y lo imprime en la consola
      console.error("Error al obtener categorías:", error);
      throw error; // Lanza el error para manejarlo externamente si es necesario
    });
}

// Función para buscar productos con .then()
export function getObtenerProductosPorCategoria(slug, page) {
  return axios
    .get(
      `${import.meta.env.VITE_API_URL}productos-buscar/${slug}?page=${page}`,
      {
        headers: cabeceros,
      }
    )
    .then((response) => {
      // Verifica si la respuesta fue exitosa
      if (response.status === 200) {
        return response.data;
      } else {
        // Lanza un error si la comunicación falló
        throw new Error(
          "Fallo la comunicación en el then. Status: " + response.status
        );
      }
    })
    .catch((error) => {
      // Maneja el error y lo imprime en la consola
      console.error("Error al obtener categorías:", error);
      throw error; // Lanza el error para manejarlo externamente si es necesario
    });
}
export function addProductos(request) {
  return axios
    .post(`${import.meta.env.VITE_API_URL}productos`, request, {
      headers: cabeceros, // Asegúrate de que 'cabeceros' esté definido correctamente
    })
    .then((response) => {
      // Maneja la respuesta exitosa aquí
      console.log("Producto agregado con éxito:", response.data);
      return response.data; // Devuelve la respuesta para que el llamador pueda usarla
    })
    .catch((error) => {
      // Maneja el error aquí
      console.error("Error al agregar producto:", error);
      throw error; // Lanza el error para que el llamador pueda manejarlo
    });
}

export function getProductosPorId(id) {
  return axios
    .get(`${import.meta.env.VITE_API_URL}productos/${id}`, {
      headers: cabeceros,
    })
    .then((response) => {
      // Verifica si la respuesta fue exitosa
      if (response.status === 200) {
        return response.data;
      } else {
        // Lanza un error si la comunicación falló
        throw new Error(
          "Fallo la comunicación en el then. Status: " + response.status
        );
      }
    })
    .catch((error) => {
      // Maneja el error y lo imprime en la consola
      console.error("Error al obtener categorías:", error);
      throw error; // Lanza el error para manejarlo externamente si es necesario
    });
}

// Función para editar productos
export async function editProductos(request, id) {
  try {
    console.log("ID del producto:", id); // Verifica el valor del ID

    // Verifica si el ID es válido antes de hacer la solicitud
    if (!id || id === "false") {
      console.error("El ID del producto es incorrecto");
      return -1;
    }

    const url = `${import.meta.env.VITE_API_URL}productos/${id}`;
    console.log("URL de la solicitud PUT:", url); // Verifica la URL final

    const response = await axios.put(url, request, {
      headers: cabeceros,
    });

    // Verifica si la respuesta es exitosa (200 o 201)
    if (response.status === 200 || response.status === 201) {
      return response.status; // Retorna el estado de éxito
    } else {
      console.warn(`Unexpected status code: ${response.status}`);
      return null; // Retorna null si no es 200 o 201
    }
  } catch (error) {
    console.error("Error al editar la categoría:", error);
    return -1; // Retorna -1 en caso de error
  }
}

// Función para eliminar productos
export async function deleteProductos(id) {
  try {
    const response = await axios.delete(
      `${import.meta.env.VITE_API_URL}productos/${id}`,
      {
        headers: cabeceros,
      }
    );

    console.log("Response completa:", response); // Verifica toda la respuesta para entender qué está sucediendo

    // Retornar solo el código de estado
    return response.status;
  } catch (error) {
    console.error("Error al eliminar la categoría:", error);
    return -1; // Retorna -1 en caso de error
  }
}

// Función para obtener productos fotos con .then()
export function getProductosFotos(id) {
  return axios
    .get(`${import.meta.env.VITE_API_URL}productos-fotos/${id}`, {
      headers: cabeceros,
    })
    .then((response) => {
      // Verifica si la respuesta fue exitosa
      if (response.status === 200) {
        return response.data;
      } else {
        // Lanza un error si la comunicación falló
        throw new Error(
          "Fallo la comunicación en el then. Status: " + response.status
        );
      }
    })
    .catch((error) => {
      // Maneja el error y lo imprime en la consola
      console.error("Error al obtener categorías:", error);
      throw error; // Lanza el error para manejarlo externamente si es necesario
    });
}

export function addFotosPorProducto(imagen, productos_id) {
  let formData = new FormData();
  formData.append("imagen", imagen);
  formData.append("productos_id", productos_id);

  let datos = axios

    .post(`${import.meta.env.VITE_API_URL}productos-fotos`, formData, {
      headers: cabeceros_upload,
    })
    .then((response) => {
      return response.status;
    })
    .catch((error) => {
      console.log(error);
    });

  return datos;
}


// Función para eliminar productos
export async function deleteFotoPorId(id) {
  try {
    const response = await axios.delete(
      `${import.meta.env.VITE_API_URL}productos-fotos/${id}`,
      {
        headers: cabeceros,
      }
    );

    console.log("Response completa:", response); // Verifica toda la respuesta para entender qué está sucediendo

    // Retornar solo el código de estado
    return response.status;
  } catch (error) {
    console.error("Error al eliminar la categoría:", error);
    return -1; // Retorna -1 en caso de error
  }
}
