const productos = [
    {
        nombre: "anillo rosa de plata",
        precio: "120.000",
        descripcion: "Anillo de plata con diseño minimalista y elegante.",
        imagen: "img/rosa.png"

    },
    {
        nombre: "collar oro minimalista",
        precio: "250.000",
        descripcion: "Collar de oro con diseño minimalista y elegante.",
        imagen: "img/mini.webp"
    },
    {
        nombre: "anillo oro",
        precio: "150.000",
        descripcion: "Anillo de oro con diseño clásico y elegante.",
        imagen: "img/ring.jpg"
    },
    {
        nombre: "collar de perlas",
        precio: "200.000",
        descripcion: "Collar de perlas con diseño clásico y elegante.",
        imagen: "img/perla.jpg"
    },
    {
        nombre: "pulsera de oro",
        precio: "180.000",
        descripcion: "Pulsera de oro con diseño minimalista y elegante.",
        imagen: "img/esclava.webp"
    },
    {
        nombre: "aretes de plata",
        precio: "90.000",
        descripcion: "Aretes de plata con diseño minimalista y elegante.",
        imagen: "img/arete.avif"
    }
];

const catalogo = document.getElementById("catalogo");
const modal = document.createElement("div");
modal.id = "modal";
modal.classList.add("modal");
document.body.appendChild(modal);

productos.forEach((p, i) => {
    const producto = document.createElement("div");
    producto.classList.add("producto");
    producto.innerHTML = `
        <img src="${p.imagen}" alt="${p.nombre}" />
        <div class="producto-info">
            <h3>${p.nombre}</h3>
            <button class="boton" data-index="${i}">Ver mas</button>
        </div>
    `;
    catalogo.appendChild(producto);
});

document.querySelectorAll(".boton").forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const index = e.target.dataset.index;
        const p = productos[index];
        modal.innerHTML = `
            <div class="modal-content">
                <span class="cerrar">&times;</span>
                <img src="${p.imagen}" alt="${p.nombre}" />
                <h2>${p.nombre}</h2>
                <p>${p.descripcion}</p>
                <strong>Precio: ${p.precio}</strong>
                <br><br>
                <a class="boton" href="https://wa.me/573126238557?text=Hola%2c%20me%20interesa%20${encodeURIComponent(p.nombre)}" target="_blank">Comprar por WhatsApp</a>
            </div>
        `;
        modal.style.display = "flex";
        document.querySelector(".cerrar").onclick = () => {
            modal.style.display = "none";
        };
    });
});