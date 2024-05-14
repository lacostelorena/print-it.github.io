const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

document.addEventListener("DOMContentLoaded", (event) => {


  let position = 0;
  const numberOfSlide = slides.length;

  createCaroussel(position);
  createDots();
  updateDot();


  const left = document.querySelector('.arrow_left');
  const right = document.querySelector('.arrow_right');


  /* Event listener qui permet le changement d'image au moment du click et la differentiation du click droit et gauche dans la console  */
  left.addEventListener("click", function () {
    if (position == 0) {
      position = numberOfSlide - 1;
    }
    else {
      position--;
    }
    createCaroussel(position);
    updateDot();
    console.log("vous avez cliquer sur la flèche de gauche")
  });

  right.addEventListener("click", function () {
    if (position == numberOfSlide - 1) {
      position = 0;
    } else {
      position++;
    }
    createCaroussel(position);
    updateDot();
    console.log("vous avez cliquer sur la flèche de droite")

  });

  /* creation des dot en fonction de la longueur du tableau slides */
  function createDots() {
    const dots = document.querySelector(".dots");
    for (let index = 0; index < slides.length; index++) {
      const dot = document.createElement("div");
      dot.setAttribute("class", "dot");
      dots.appendChild(dot);
    }
  }

  /* changement du dot selectionner en fonction d'ou l'on se trouve sur le carrousel */
  function updateDot() {
    const listPoints = document.querySelectorAll(".dot");
    for (let index = 0; index < listPoints.length; index++) {

      const dot = listPoints[index];
      if (index == position) {
        dot.classList.add('dot_selected');
      }
      else {
        dot.classList.remove('dot_selected');
      }

    }
  }

  /* creation du caroussel composer d'une image , d'un texte et de dots */
  function createCaroussel(position) {

    const element = slides[position];
    const img = document.querySelector(".banner-img");
    img.setAttribute("src", "./assets/images/slideshow/" + element.image);

    const p = document.querySelector(".banner-txt");
    p.innerHTML = element.tagLine;

  }

});