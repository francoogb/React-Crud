import  {Titulo, Circulo, Caja} from "../styled/estilos"; 

const StyleComponents = () => {
  return (
    <>
      <hr></hr>
      <Titulo>Styled Component Renovado </Titulo>
      <Circulo>Circulo </Circulo>
      <hr></hr>
      <Caja type="text" defaultValue={"@ejemplo"} placeholder="Escribe Aqui" color_custom = "orange"></Caja>

    </>
  );
};

export default StyleComponents;
