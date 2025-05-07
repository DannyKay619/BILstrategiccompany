const productos = [
    {
        nombre: "anillo rosa de plata",
        precio: "120.000",
        descripción: "Anillo de plata con diseño minimalista y elegante.",
        imagen: "https://via.placeholder.com/400x300?text=Anillo+Plata"
    },
    {
        nombre: "collar oro minimalista",
        precio: "250.000",
        descripción: "Collar de oro con diseño minimalista y elegante.",
        imagen: "https://via.placeholder.com/400x300?text=Collar+Oro"
    },
    {
        nombre: "anillo oro",
        precio: "150.000",
        descripción: "Anillo de oro con diseño clásico y elegante.",
        imagen: "https://via.placeholder.com/400x300?text=Anillo+Oro"
    },
    {
        nombre: "collar de perlas",
        precio: "200.000",
        descripción: "Collar de perlas con diseño clásico y elegante.",
        imagen: "https://via.placeholder.com/400x300?text=Collar+Perlas"
    },
    {
        nombre: "pulsera de oro",
        precio: "180.000",
        descripción: "Pulsera de oro con diseño minimalista y elegante.",
        imagen: "https://via.placeholder.com/400x300?text=Pulsera+Oro"
    },
    {
        nombre: "aretes de plata",
        precio: "90.000",
        descripción: "Aretes de plata con diseño minimalista y elegante.",
        imagen: "https://via.placeholder.com/400x300?text=Aretes+Plata"
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
            <button class="boton" data-index="${i}">Ver más</button>
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
                <p>${p.descripción}</p>
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