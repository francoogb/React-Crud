import styled from "@emotion/styled";

export const Titulo = styled.h1`
  font-size: 40px;
  color: #3c3c3c;
  text-align: center;

  /* Efecto hover */
  &:hover {
    color: #007bff; /* Cambia el color al pasar el ratón por encima */
    cursor: pointer; /* Cambia el cursor a pointer para indicar interactividad */
  }
`;

export const Circulo = styled.div`
  background-color: #3c3c3c;
  color: #fff;
  width: 100px;      /* Ancho del círculo */
  height: 100px;     /* Alto del círculo */
  border-radius: 50%; /* Esto hace que sea un círculo */
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;


export const Caja = styled.input`
  width: 200px;                /* Ancho de la caja de entrada */
  height: 40px;                /* Altura de la caja de entrada */
  padding: 0 12px;            /* Espaciado interno para el texto */
  border: 2px solid #ccc;     /* Borde gris claro */
  border-radius: 4px;         /* Bordes redondeados */
  font-size: 16px;            /* Tamaño de fuente */
  color: ${props => props.color_custom || "green"}; /* Color del texto */
  background-color: #fff;    /* Fondo blanco */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Sombra sutil */
  transition: border-color 0.3s ease, box-shadow 0.3s ease; /* Transiciones suaves */


  /* Estilos para el enfoque (focus) */
  &:focus {
    border-color: #007bff;    /* Borde azul al estar enfocado */
    outline: none;            /* Eliminar el contorno por defecto */
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25); /* Sombra azul al estar enfocado */
  }
`;


