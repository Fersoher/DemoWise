function carrusel() {
    const images = document.querySelectorAll('.carousel-images img');
    let currentIndex = 0;
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    let autoplayInterval;
    // Mostrar imagen por índice
    function showImage(index) {
        const totalImages = images.length;
        currentIndex = (index + totalImages) % totalImages;
        document.querySelector('.carousel-images').style.transform = `translateX(-${currentIndex * 100}%)`;
    }
    // Función para empezar el autoplay
    function startAutoplay() {
        autoplayInterval = setInterval(() => {
            showImage(currentIndex + 1);
        }, 3000); // Cambia la imagen cada 3 segundos
    }
    // Función para detener el autoplay
    function stopAutoplay() {
        clearInterval(autoplayInterval);
    }
    // Eventos de click en los botones
    prevBtn.addEventListener('click', () => showImage(currentIndex - 1));
    nextBtn.addEventListener('click', () => showImage(currentIndex + 1));

    // Eventos de teclado (flechas izquierda/derecha)
    document.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowLeft') {
            showImage(currentIndex - 1);
        } else if (event.key === 'ArrowRight') {
            showImage(currentIndex + 1);
        }
    });
    // Detectar gestos de swipe para móviles
    let startX;
    document.querySelector('.carousel-images').addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
    });

    document.querySelector('.carousel-images').addEventListener('touchend', (e) => {
        const endX = e.changedTouches[0].clientX;
        if (startX - endX > 50) { // Deslizamiento hacia la izquierda
            showImage(currentIndex + 1);
        } else if (endX - startX > 50) { // Deslizamiento hacia la derecha
            showImage(currentIndex - 1);
        }
    });
    // Iniciar en la primera imagen
    showImage(currentIndex);
    // Autoplay cuando la página carga
    startAutoplay();
    // Detener autoplay cuando el ratón esté sobre el carrusel
    document.querySelector('.carousel-images').addEventListener('mouseenter', stopAutoplay);
    document.querySelector('.carousel-images').addEventListener('mouseleave', startAutoplay);
}
document.addEventListener('DOMContentLoaded', carrusel);

$("li").on("click", function () {

    var item = $(this),
        pos = "-" + (item.index() * 515) + "px";

    item.addClass("active");
    item.siblings().removeClass("active");

    $("ul").css("left", pos);

});
