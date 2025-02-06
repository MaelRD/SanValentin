document.addEventListener('DOMContentLoaded', () => {
    const noBtn = document.getElementById('noBtn');
    const siBtn = document.getElementById('siBtn');
    const respuesta = document.getElementById('respuesta');
    const hamImg = document.getElementById('hamImg');
    const mensajes = [
        "¿Segura? ¡Piénsalo bien! ",
        "¡Amor, YAAAAAAAAA! 💔",
        "¿Neta? ¡Amoooooor porque dices que no!",
        "¡Me odiasssss! ¡Me detestas!",
        "¡Soporte vientos despiadados, infernales desiertos!",
        "¡Escale hasta el último maldito cuarto de la maldita torre más alta!",
        "¿Y qué encontré? Un lobo de sexo dudoso que le dice que su princesa ¡Ya está casada!",
        "Mi suegra se va a enterar de esto"
    ];

    let mensajeIndex = 0; // Índice para mostrar los mensajes en orden

    // Función para mover el botón "No"
    const moverBotonNo = () => {
        const container = document.querySelector('.container');
        const containerRect = container.getBoundingClientRect();
        const buttonWidth = noBtn.offsetWidth;
        const buttonHeight = noBtn.offsetHeight;

        const maxX = containerRect.width - buttonWidth;
        const maxY = containerRect.height - buttonHeight;

        // Evitar que el botón salga de la pantalla en móviles
        const newX = Math.min(Math.max(Math.random() * maxX, 10), maxX - 10);
        const newY = Math.min(Math.max(Math.random() * maxY, 10), maxY - 10);

        noBtn.style.transform = `translate(${newX}px, ${newY}px)`;

        // Mostrar la imagen
        hamImg.style.display = "block";

        // Mostrar mensaje en orden
        const mensajeDiv = document.createElement('div');
        mensajeDiv.textContent = mensajes[mensajeIndex]; // Muestra el mensaje actual
        mensajeDiv.style.position = 'absolute';
        mensajeDiv.style.color = '#d32f2f';
        mensajeDiv.style.top = '-30px';
        mensajeDiv.style.left = '50%';
        mensajeDiv.style.transform = 'translateX(-50%)';
        container.appendChild(mensajeDiv);

        // Incrementar el índice o reiniciar si se llega al final
        mensajeIndex = (mensajeIndex + 1) % mensajes.length;

        // Mantener la imagen visible durante 3 segundos
        setTimeout(() => {
            mensajeDiv.remove();
            hamImg.style.display = "none"; // Oculta la imagen después de 3 segundos
        }, 1000);
    };

    // Eventos para mover el botón "No" en computadoras (mouseover)
    noBtn.addEventListener('mouseover', () => {
        siBtn.style.transform = 'scale(1.1)'; // Aumenta tamaño al 110%
        moverBotonNo();
    });

    // Eventos para mover el botón "No" en teléfonos (touchstart y touchmove)
    noBtn.addEventListener('touchstart', (e) => {
        e.preventDefault(); // Evita la selección accidental del botón en móviles
        moverBotonNo();
    });

    noBtn.addEventListener('touchmove', (e) => {
        e.preventDefault(); // Evita el desplazamiento de la página
        moverBotonNo();
    });

    // Restaurar tamaño del botón "Sí"
    noBtn.addEventListener('mouseleave', () => {
        siBtn.style.transform = 'scale(1)';
    });

    // Mostrar respuesta al hacer clic en "Sí"
    siBtn.addEventListener('click', () => {
        respuesta.classList.remove('hidden');
        siBtn.style.transform = 'scale(1)';
    });
});