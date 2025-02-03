// Seleciona a div do carrossel e adiciona mais imagens automaticamente
const carousel = document.querySelector(".hotel-slide");
const images = [
  "./src/Img/Img_carrossel/img_quarto_1.jpg",
  "./src/Img/Img_carrossel/img_quarto_2.jpg",
  "./src/Img/Img_carrossel/img_quarto_3.jpg",
  "./src/Img/Img_carrossel/img_quarto_4.jpg",
  "./src/Img/Img_carrossel/img_quarto_5.jpg",
  "./src/Img/Img_carrossel/img_quarto_6.jpg",
  "./src/Img/Img_carrossel/img_quarto_7.jpg"
];

let currentIndex = 0;

// Função para trocar a imagem automaticamente
function changeImage() {
  currentIndex = (currentIndex + 1) % images.length; // Loop infinito entre as imagens
  carousel.querySelector("img").src = images[currentIndex];
}

// Muda a imagem a cada 5 segundos
setInterval(changeImage, 3000);
