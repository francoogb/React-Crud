import React from "react";

export default class ComponenteClase extends React.Component {
  constructor(props) {
    super();
    console.log("Componente aun no esta montado");
    this.state = {
      contador: 0,
      nombre: "Frxngb",
    };
  }
  componentDidMount() {
    console.group("Componente ya se encuentra en el DOM");
    this.setState({
      contador: this.state.contador + 1,
    });
  }
  componentWillUnmount() {
    console.group("Componente ha sido eliminado");
  }
  render() {
    return (
      <>
        <h1>Hola desde un componente de clase</h1>
        <p>
          Contador = {this.state.contador} {this.state.nombre}
        </p>
      </>
    );
  }
}
