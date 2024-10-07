const categorias = [
    {
      id: 1,
      nombre: "Frutas"
    },
    {
      id: 2,
      nombre: "Verduras"
    },
    {
      id: 3,
      nombre: "Lácteos"
    },
    {
      id: 4,
      nombre: "Carnes"
    },
    {
      id: 5,
      nombre: "Bebidas"
    }
  ];
  
  const productos = [
    {
      id: 1,
      nombre: "Manzana",
      precio: 1.2,
      stock: 50,
      categoria_id: 1 // Relacionado con la categoría "Frutas"
    },
    {
      id: 2,
      nombre: "Banana",
      precio: 0.8,
      stock: 100,
      categoria_id: 1 // Relacionado con la categoría "Frutas"
    },
    {
      id: 3,
      nombre: "Zanahoria",
      precio: 0.5,
      stock: 80,
      categoria_id: 2 // Relacionado con la categoría "Verduras"
    },
    {
      id: 4,
      nombre: "Lechuga",
      precio: 1.0,
      stock: 30,
      categoria_id: 2 // Relacionado con la categoría "Verduras"
    },
    {
      id: 5,
      nombre: "Leche",
      precio: 1.5,
      stock: 60,
      categoria_id: 3 // Relacionado con la categoría "Lácteos"
    },
    {
      id: 6,
      nombre: "Queso",
      precio: 2.5,
      stock: 40,
      categoria_id: 3 // Relacionado con la categoría "Lácteos"
    },
    {
      id: 7,
      nombre: "Pollo",
      precio: 5.0,
      stock: 25,
      categoria_id: 4 // Relacionado con la categoría "Carnes"
    },
    {
      id: 8,
      nombre: "Carne de Res",
      precio: 8.0,
      stock: 20,
      categoria_id: 4 // Relacionado con la categoría "Carnes"
    },
    {
      id: 9,
      nombre: "Jugo de Naranja",
      precio: 1.8,
      stock: 75,
      categoria_id: 5 // Relacionado con la categoría "Bebidas"
    },
    {
      id: 10,
      nombre: "Agua Mineral",
      precio: 1.0,
      stock: 100,
      categoria_id: 5 // Relacionado con la categoría "Bebidas"
    }
  ];

  const atributos = [
    {
      id: 1,
      nombre: "Perecible",
    },
    {
      id: 2,
      nombre: "Armable",
    },
    {
      id: 3,
      nombre: "Orgánico",
    },
    {
      id: 4,
      nombre: "Libre de Gluten",
    },
    {
      id: 5,
      nombre: "Bajo en Azúcar",
    },
  ];
  
  
  const paises = [
    {
      id: 1,
      pais: "Chile",
      dominio: "CL",
      codigoPais: "+56"
    },
    {
      id: 2,
      pais: "Argentina",
      dominio: "AR",
      codigoPais: "+54"
    },
    {
      id: 3,
      pais: "Brasil",
      dominio: "BR",
      codigoPais: "+55"
    },
    {
      id: 4,
      pais: "Colombia",
      dominio: "CO",
      codigoPais: "+57"
    },
    {
      id: 5,
      pais: "Perú",
      dominio: "PE",
      codigoPais: "+51"
    },
    {
      id: 6,
      pais: "Uruguay",
      dominio: "UY",
      codigoPais: "+598"
    },
    {
      id: 7,
      pais: "Paraguay",
      dominio: "PY",
      codigoPais: "+595"
    },
    {
      id: 8,
      pais: "México",
      dominio: "MX",
      codigoPais: "+52"
    },
    {
      id: 9,
      pais: "España",
      dominio: "ES",
      codigoPais: "+34"
    },
    {
      id: 10,
      pais: "Estados Unidos",
      dominio: "US",
      codigoPais: "+1"
    }
  ];
  
  export { categorias, productos, paises, atributos };
  