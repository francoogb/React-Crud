export const formatearFecha = (fecha) => {
    const fechaNueva = new Date(fecha);
    const opciones = {
        year: 'numeric',
        month: 'long', // Corregido: 'long' en lugar de 'longh'
        day: '2-digit'
    }

    return fechaNueva.toLocaleDateString('es-ES', opciones);
}

// Helper para formatear números
export const formatearNumero = (numero) => {
    return new Intl.NumberFormat().format(numero);
}

// Helper para acortar texto
export function acortarTexto(texto, maxLength) {
    // Verificar si el texto es válido y es una cadena
    if (typeof texto !== 'string') {
      return '';  // Retorna una cadena vacía o un valor alternativo si no es un string
    }
  
    // Si el texto es más corto que el máximo, devuelve el texto completo
    if (texto.length <= maxLength) {
      return texto;
    }
  
    // Acortar el texto y agregar puntos suspensivos al final
    return texto.substring(0, maxLength) + '...';
  }
  