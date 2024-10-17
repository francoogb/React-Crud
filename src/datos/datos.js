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
  
  const pais = [
    {
      "id": 1,
      "nombre": "Portugal"
    },
    {
      "id": 2,
      "nombre": "España"
    },
    {
      "id": 3,
      "nombre": "Francia"
    },
    {
      "id": 4,
      "nombre": "Italia"
    },
    {
      "id": 5,
      "nombre": "Reino Unido"
    },
    {
      "id": 6,
      "nombre": "Brasil"
    },
    {
      "id": 7,
      "nombre": "Polonia"
    },
    {
      "id": 8,
      "nombre": "Alemania"
    }
  ];
  
  const ciudades = [
    {
      "id": 1,
      "nombre": "Lisboa",
      "pais_id": 1
    },
    {
      "id": 2,
      "nombre": "Madrid",
      "pais_id": 2
    },
    {
      "id": 3,
      "nombre": "Barcelona",
      "pais_id": 2
    },
    {
      "id": 4,
      "nombre": "Paris",
      "pais_id": 3
    },
    {
      "id": 5,
      "nombre": "Lyon",
      "pais_id": 3
    },
    {
      "id": 6,
      "nombre": "Roma",
      "pais_id": 4
    },
    {
      "id": 7,
      "nombre": "Turín",
      "pais_id": 4
    },
    {
      "id": 8,
      "nombre": "Londres",
      "pais_id": 5
    },
    {
      "id": 9,
      "nombre": "Manchester",
      "pais_id": 5
    },
    {
      "id": 10,
      "nombre": "Rio de Janeiro",
      "pais_id": 6
    },
    {
      "id": 11,
      "nombre": "Varsovia",
      "pais_id": 7
    },
    {
      "id": 12,
      "nombre": "Múnich",
      "pais_id": 8
    },
    {
      "id": 13,
      "nombre": "Berlín",
      "pais_id": 8
    }
  ];
  
  const imagenes = [
    { 
      id: 1,
      titulo: "Django",
      imagen: "https://www.djangoproject.com/m/img/logos/django-logo-negative.svg"
    },
    {
      id: 2,
      titulo: "React",
      imagen: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
    },
    {
      id: 3,
      titulo: "Angular",
      imagen: "https://angular.io/assets/images/logos/angular/angular.svg"
    },
    {
      id: 4,
      titulo: "Vue.js",
      imagen: "https://vuejs.org/images/logo.png"
    },
   
    {
      id: 6,
      titulo: "Node.js",
      imagen: "https://nodejs.org/static/images/logo.svg"
    },
    {
      id: 7,
      titulo: "Laravel",
      imagen: "https://laravel.com/img/logomark.min.svg"
    },
    {
      id: 8,
      titulo: "Flask",
      imagen: "https://flask.palletsprojects.com/en/2.0.x/_static/flask-logo.png"
    }
  ];
  

  export { categorias, productos, paises, atributos, pais, ciudades, imagenes };
  