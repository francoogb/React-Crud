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
export const acortarTexto = (valor, desde, hasta) => {
    return valor.substring(desde, hasta);
}
