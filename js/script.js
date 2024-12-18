// Contacto 

const formulario = document.querySelector('.medida-formulario-contacto');
if (formulario) { 
  function verificarCampos(event) {
    event.preventDefault(); 

    const nombre = document.querySelector('#Nombre').value.trim();
    const email = document.querySelector('#Email').value.trim();
    const asunto = document.querySelector('#Asunto').value.trim();
    const mensaje = document.querySelector('.mensaje-formulario').value.trim();

    if (!nombre || !email || !asunto || !mensaje || mensaje === 'Tu mensaje') {
      console.log('Por favor, completa todos los campos del formulario.');
    } else {
      console.log('Todos los campos están completos. ¡Lo puedes enviar!');
      formulario.submit(); 
    }
  }

  formulario.addEventListener('submit', verificarCampos);
}

// Ciclo - lista de productos disponibles 


if (window.location.pathname.includes("cuadros.html")) {
  const productos = [
    {
      nombre: "Bastidores personalizados",
      precio: 60000,
      imagen: "img/cuadros/bastidor-22x16-1.jpg",
    },
    {
      nombre: "Cuadros personalizados A3",
      precio: 30000,
      imagen: "img/cuadros/cuadro a3.jpg",
    },
    {
      nombre: "Cuadro personalizado 45x60",
      precio: 38000,
      imagen: "img/cuadros/cuadro-45x60-1.jpg",
    },
    {
      nombre: "Cuadro personalizado 50x70",
      precio: 72500,
      imagen: "img/cuadros/cuadro-50x70-a.jpg",
    },
    {
      nombre: "Cuadro personalizado 13x18",
      precio: 20000,
      imagen: "img/cuadros/cuadro-13x18.jpg",
    },
    {
      nombre: "Lamina impresa personalizada",
      precio: 38000,
      imagen: "img/cuadros/cuadro-45x60-3.jpg",
    },
  ];

  console.log("Lista de productos disponibles:");
  productos.forEach((producto, index) => {
  console.log(`${index + 1}. ${producto.nombre} - $${producto.precio}`);
  console.log(`Imagen: ${producto.imagen}`);
});
}

if (window.location.pathname.includes("postales.html")) {
  const productos = [
    {
      nombre: "Postal sin sobre",
      precio: 10000,
      imagen: "img/postales/postal 1.jpg",
    },
    {
      nombre: "Postal con sobre",
      precio: 15000,
      imagen: "img/postales/postal2.jpg",
    },
    {
      nombre: "Postal con tarjetero de madera",
      precio: 22000,
      imagen: "img/postales/postal3.jpg",
    },
  ];

  console.log("Lista de productos disponibles:");
  productos.forEach((producto, index) => {
  console.log(`${index + 1}. ${producto.nombre} - $${producto.precio}`);
  console.log(`Imagen: ${producto.imagen}`);
});
}

if (window.location.pathname.includes("cuadernos-agendas.html")) {
const productos = [
  {
      nombre: "Agenda personalizada A5 con tapa de cuerina",
      precio: 22000,
      imagen: "img/agendas-cuadernos/agenda-cuerina/cuerina-capitan.jpg"
  },
  {
      nombre: "Agenda personalizada A5 con cinta",
      precio: 20000,
      imagen: "img/agendas-cuadernos/agendas-a5/agendas-a5-2.jpg"
  },
  {
      nombre: "Cuaderno anillado personalizado",
      precio: 30000,
      imagen: "img/agendas-cuadernos/cuaderno-anillado/cuadernoanillado-chimu.jpg"
  },
  {
      nombre: "Cuaderno tapa dura personalizado",
      precio: 30000,
      imagen: "img/agendas-cuadernos/cuadernos/cuaderno-moana.jpg"
  }
];

console.log("Lista de productos disponibles:");
productos.forEach((producto, index) => {
  console.log(`${index + 1}. ${producto.nombre} - $${producto.precio}`);
  console.log(`Imagen: ${producto.imagen}`);
});
}

if (window.location.pathname.includes("ilustraciones.html")) {
  const productos = [
    {
        nombre: "Ilustraciones de mascotas",
        imagen: "img/ilustraciones/ilustraciones-mascotas/gomitaytina.jpg",
    },
    {
        nombre: "Ilustraciones Lowpoly",
        imagen: "img/ilustraciones/ilustraciones-mascotas/ilustracion-lowpoly/mordelonlowpoly.png",
    },
    {
        nombre: "Ilustraciones lineales",
        imagen: "img/ilustraciones/ilustraciones-lineales/melinamartin.jpg",
    },
    {
      nombre: "Ilustraciones minimalistas",
      imagen: "img/ilustraciones/ilustraciones-minimalistas/anne.jpg", 
    },
      ];
  
  console.log("Lista de productos disponibles:");
  productos.forEach((producto, index) => {
    console.log(`${index + 1}. ${producto.nombre} - $${producto.precio}`);
    console.log(`Imagen: ${producto.imagen}`);
  });
  }
