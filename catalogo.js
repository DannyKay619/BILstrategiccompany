const productos = [
    // Relojes
    { nombre: "Reloj de plata clásico", descripcion: "Elegante reloj de pulsera en plata 925.", imagen: "https://via.placeholder.com/400x300?text=Reloj+Plata" },
    { nombre: "Reloj de plata moderna", descripcion: "Diseño minimalista con correa metálica.", imagen: "https://via.placeholder.com/400x300?text=Reloj+Plata+Moderno" },
    { nombre: "Reloj de oro fino", descripcion: "Reloj dorado con detalles de lujo.", imagen: "https://via.placeholder.com/400x300?text=Reloj+Oro" },
    { nombre: "Reloj de oro clásico", descripcion: "Diseño clásico en oro brillante.", imagen: "https://via.placeholder.com/400x300?text=Reloj+Oro+Clásico" },
    { nombre: "Reloj de plata negra", descripcion: "Estilo oscuro y moderno.", imagen: "https://via.placeholder.com/400x300?text=Reloj+Plata+Negra" },
  
    // Esclavas
    { nombre: "Esclava de bronce", descripcion: "Esclava rústica de bronce pulido.", imagen: "https://via.placeholder.com/400x300?text=Esclava+Bronce" },
    { nombre: "Esclava de oro", descripcion: "Esclava maciza de oro brillante.", imagen: "https://via.placeholder.com/400x300?text=Esclava+Oro" },
    { nombre: "Esclava de acero", descripcion: "Esclava moderna de acero inoxidable.", imagen: "https://via.placeholder.com/400x300?text=Esclava+Acero" },
    { nombre: "Esclava de plata fina", descripcion: "Diseño elegante en plata.", imagen: "https://via.placeholder.com/400x300?text=Esclava+Plata" },
    { nombre: "Esclava de plata trenzada", descripcion: "Diseño artesanal en plata 925.", imagen: "https://via.placeholder.com/400x300?text=Esclava+Plata+Trenzada" },
  
    // Anillos
    { nombre: "Anillo de plata liso", descripcion: "Anillo minimalista de plata.", imagen: "https://via.placeholder.com/400x300?text=Anillo+Plata+1" },
    { nombre: "Anillo de plata con piedra", descripcion: "Anillo decorado con zirconia.", imagen: "https://via.placeholder.com/400x300?text=Anillo+Plata+2" },
    { nombre: "Anillo de plata floral", descripcion: "Diseño con grabados florales.", imagen: "https://via.placeholder.com/400x300?text=Anillo+Plata+3" },
    { nombre: "Anillo de plata rústico", descripcion: "Textura martillada artesanal.", imagen: "https://via.placeholder.com/400x300?text=Anillo+Plata+4" },
    { nombre: "Anillo de plata con relieve", descripcion: "Diseño con relieves artísticos.", imagen: "https://via.placeholder.com/400x300?text=Anillo+Plata+5" },
    { nombre: "Anillo de oro liso", descripcion: "Anillo clásico de oro amarillo.", imagen: "https://via.placeholder.com/400x300?text=Anillo+Oro+1" },
    { nombre: "Anillo de oro con piedra", descripcion: "Decorado con esmeralda sintética.", imagen: "https://via.placeholder.com/400x300?text=Anillo+Oro+2" },
    { nombre: "Anillo de oro trenzado", descripcion: "Diseño entrelazado artesanal.", imagen: "https://via.placeholder.com/400x300?text=Anillo+Oro+3" },
    { nombre: "Anillo de oro brillante", descripcion: "Pulido espejo y detalles finos.", imagen: "https://via.placeholder.com/400x300?text=Anillo+Oro+4" },
    { nombre: "Anillo de oro grabado", descripcion: "Grabado a mano con patrón único.", imagen: "https://via.placeholder.com/400x300?text=Anillo+Oro+5" },
  
    // Aretes
    { nombre: "Aretes de oro liso", descripcion: "Pequeños aretes esféricos de oro.", imagen: "https://via.placeholder.com/400x300?text=Aretes+Oro+1" },
    { nombre: "Aretes de oro con perla", descripcion: "Decorados con perla natural.", imagen: "https://via.placeholder.com/400x300?text=Aretes+Oro+2" },
    { nombre: "Aretes de plata simple", descripcion: "Aretes básicos de plata.", imagen: "https://via.placeholder.com/400x300?text=Aretes+Plata+1" },
    { nombre: "Aretes de plata flor", descripcion: "Diseño floral elegante.", imagen: "https://via.placeholder.com/400x300?text=Aretes+Plata+2" },
    { nombre: "Aretes de plata largos", descripcion: "Estilo colgante largo.", imagen: "https://via.placeholder.com/400x300?text=Aretes+Plata+3" },
  
    // Pulseras
    { nombre: "Pulsera de oro", descripcion: "Pulsera delicada de oro amarillo.", imagen: "https://via.placeholder.com/400x300?text=Pulsera+Oro" },
    { nombre: "Pulsera de plata clásica", descripcion: "Diseño trenzado en plata.", imagen: "https://via.placeholder.com/400x300?text=Pulsera+Plata+1" },
    { nombre: "Pulsera de plata moderna", descripcion: "Estilo plano y brillante.", imagen: "https://via.placeholder.com/400x300?text=Pulsera+Plata+2" },
  
    // Cadenas
    { nombre: "Cadena de plata gruesa", descripcion: "Cadena sólida y brillante.", imagen: "https://via.placeholder.com/400x300?text=Cadena+Plata+1" },
    { nombre: "Cadena de plata fina", descripcion: "Diseño delgado y elegante.", imagen: "https://via.placeholder.com/400x300?text=Cadena+Plata+2" },
    { nombre: "Cadena de oro", descripcion: "Cadena brillante en oro 18K.", imagen: "https://via.placeholder.com/400x300?text=Cadena+Oro" },
  
    // Camándulas
    { nombre: "Camándula de oro", descripcion: "Diseño religioso en oro.", imagen: "https://via.placeholder.com/400x300?text=Camandula+Oro" },
    { nombre: "Camándula de plata", descripcion: "Camándula artesanal en plata.", imagen: "https://via.placeholder.com/400x300?text=Camandula+Plata" },
  
    // Reloj de bolsillo
    { nombre: "Reloj de bolsillo de oro", descripcion: "Estilo vintage con cadena dorada.", imagen: "https://via.placeholder.com/400x300?text=Reloj+Bolsillo+Oro" }
  ];
  
  const contenedor = document.getElementById("catalogo-amplio");
  
  productos.forEach(p => {
    const card = document.createElement("div");
    card.classList.add("producto");
  
    card.innerHTML = `
      <img src="${p.imagen}" alt="${p.nombre}" />
      <div class="producto-info">
        <h3>${p.nombre}</h3>
        <p>${p.descripcion}</p>
        <a class="boton" href="https://wa.me/573126238557?text=Hola%2C%20me%20interesa%20${encodeURIComponent(p.nombre)}" target="_blank">Comprar</a>
      </div>
    `;
  
    contenedor.appendChild(card);
  });
  