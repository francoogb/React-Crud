// Encabezados corregidos
let cabeceros = {
  "Content-Type": "application/json",
  Authorization:
    "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MzYsImlhdCI6MTczMDIzNTA0OSwiZXhwIjoxNzMyODI3MDQ5fQ.RI9FU6E37w62DX-JPO44-y-wP5YvmZLo-WCJXrLU0X0",
};

let cabeceros_upload = {
  Authorization:
    "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MzYsImlhdCI6MTczMDIzNTA0OSwiZXhwIjoxNzMyODI3MDQ5fQ.RI9FU6E37w62DX-JPO44-y-wP5YvmZLo-WCJXrLU0X0",
};

export async function getCategorias() {
  try {
    let respuesta = await fetch(`${import.meta.env.VITE_API_URL}categorias`, {
      headers: cabeceros,
    });

    if (!respuesta.ok) {
      throw new Error("Error al obtener las categorías");
    }

    const resultado = await respuesta.json();
    return resultado;
  } catch (error) {
    console.error("Error en getCategorias:", error);
    return []; // Devuelve un array va
  }
}

export async function addCategorias(datos) {
  const respuesta = await fetch(`${import.meta.env.VITE_API_URL}categorias`, {
    method: "POST",
    body: JSON.stringify(datos),
    headers: cabeceros,
  });

  await respuesta.json();
}


export async function editCategorias(datos, id) {
    try {
      const respuesta = await fetch(`${import.meta.env.VITE_API_URL}categorias/${id}`, {
        method: "PUT",
        body: JSON.stringify(datos),
        headers: {
          "Content-Type": "application/json",
          ...cabeceros, // Asumiendo que 'cabeceros' es un objeto con otros encabezados, como autorización, etc.
        },
      });
  
      // Verificar si la respuesta fue exitosa
      if (!respuesta.ok) {
        throw new Error(`Error: ${respuesta.statusText}`);
      }
  
      // Si la respuesta es correcta, puedes procesar la respuesta
      const data = await respuesta.json();
      return data; // O lo que sea necesario procesar
    } catch (error) {
      console.error("Error al actualizar la categoría:", error);
      throw error; // Lanza el error para que lo maneje el componente
    }
  }
  

  // Función para eliminar categorías
export async function deleteCategorias(id) {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}categorias/${id}`,
      {
        headers: cabeceros,
        method : "DELETE"
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

//Listar productos

export async function getProductos(page) {
  try {
    let respuesta = await fetch(`${import.meta.env.VITE_API_URL}productos?page=${page}`, {
      headers: cabeceros,
    });

    if (!respuesta.ok) {
      throw new Error("Error al obtener las categorías");
    }

    const resultado = await respuesta.json();
    return resultado;
  } catch (error) {
    console.error("Error en getCategorias:", error);
    return []; // Devuelve un array va
  }
}


export async function addProductos(datos) {
  try {
    const apiUrl = `${import.meta.env.VITE_API_URL}productos`;
    console.log("URL de la solicitud:", apiUrl);
    console.log("Datos enviados:", datos);

    const respuesta = await fetch(apiUrl, {
      method: "POST",
      body: JSON.stringify(datos),
      headers:cabeceros
    });

    // Revisamos si la respuesta no es OK
    if (!respuesta.ok) {
      const errorText = await respuesta.text(); // Obtener el contenido de la respuesta del servidor
      console.error('Error en la respuesta del servidor:', errorText); // Muestra el error exacto
      throw new Error(`Error ${respuesta.status}: ${respuesta.statusText}`);
    }

    const respuestaJSON = await respuesta.json();
    console.log('Respuesta JSON:', respuestaJSON);
    return respuestaJSON;

  } catch (error) {
    console.error('Error en la solicitud:', error.message);
    throw error; // Relanza el error para manejarlo fuera de esta función
  }
}




export async function editProductos(datos, id) {
  try {
    // Log para revisar los datos y el ID
    console.log("Editando producto con los datos:", datos);
    console.log("ID del producto:", id);

    // Realizamos la petición PUT a la API
    const respuesta = await fetch(`${import.meta.env.VITE_API_URL}productos/${id}`, {
      method: "PUT",
      body: JSON.stringify(datos),
      headers:cabeceros

    });

    // Verificar si la respuesta fue exitosa
    if (!respuesta.ok) {
      // Log para ver la respuesta de error si la petición falla
      console.error("Error al actualizar el producto:", respuesta.statusText);
      throw new Error(`Error: ${respuesta.statusText}`);
    }

    // Log para revisar la respuesta de la API
    const data = await respuesta.json();
    console.log("Respuesta de la API:", data);

    return data; // O lo que sea necesario procesar
  } catch (error) {
    // Log para capturar cualquier error que ocurra
    console.error("Error en la función editProductos:", error);
    throw error; // Lanza el error para que lo maneje el componente
  }
}


  // Función para eliminar productos
  export async function deleteProductos(id) {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}productos/${id}`,
        {
          headers: cabeceros,
          method : "DELETE"
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
  
  export async function getProductosFotosPorId(id) {
    try {
      let respuesta = await fetch(`${import.meta.env.VITE_API_URL}productos/${id}`, {
        headers: cabeceros,
      });
  
      if (!respuesta.ok) {
        throw new Error("Error al obtener las categorías");
      }
  
      const resultado = await respuesta.json();
      return resultado;
    } catch (error) {
      console.error("Error en getCategorias:", error);
      return []; // Devuelve un array va
    }
  }
  


  export async function getProductosFotos(id) {
    try {
      let respuesta = await fetch(`${import.meta.env.VITE_API_URL}productos-fotos/${id}`, {
        headers: cabeceros,
      });
  
      if (!respuesta.ok) {
        throw new Error("Error al obtener las categorías");
      }
  
      const resultado = await respuesta.json();
      return resultado;
    } catch (error) {
      console.error("Error en getCategorias:", error);
      return []; // Devuelve un array va
    }
  }
  
  export async function addFotosPorProducto(productos_id) {
    let myFile = document.querySelector("input[type=file]").files[0];
    
    if (!myFile) {
        console.error("No se ha seleccionado ningún archivo.");
        throw new Error("Debes seleccionar un archivo.");
    }

    let formData = new FormData();
    formData.append("imagen", myFile);
    formData.append("productos_id", productos_id);

    try {
        // Realizar el fetch
        let respuesta = await fetch(`${import.meta.env.VITE_API_URL}productos-fotos`, {
            method: "POST",
            body: formData,
            headers : cabeceros_upload
        });

        // Procesar la respuesta
        let datos = await respuesta.json();

        // Retornar tanto el status como los datos
        return { status: respuesta.status, datos };

    } catch (error) {
        console.error("Error al agregar la foto (catch):", error);
        throw error;
    }
}



  // Función para eliminar productos
  export async function deleteFotos(id) {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}productos-fotos/${id}`,
        {
          headers: cabeceros,
          method : "DELETE"
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