// Lightbox para as imagens do portfólio
document.querySelectorAll('.projeto img').forEach(imagem => {
    imagem.addEventListener('click', () => {
        const lightbox = document.createElement('div');
        lightbox.style.position = 'fixed';
        lightbox.style.top = '0';
        lightbox.style.left = '0';
        lightbox.style.width = '100%';
        lightbox.style.height = '100%';
        lightbox.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        lightbox.style.display = 'flex';
        lightbox.style.justifyContent = 'center';
        lightbox.style.alignItems = 'center';
        lightbox.style.zIndex = '1000';

        const imgAmpliada = document.createElement('img');
        imgAmpliada.src = imagem.src;
        imgAmpliada.style.maxWidth = '80%';
        imgAmpliada.style.maxHeight = '80%';

        lightbox.appendChild(imgAmpliada);
        document.body.appendChild(lightbox);

        lightbox.addEventListener('click', () => {
            lightbox.remove();
        });
    });
});


