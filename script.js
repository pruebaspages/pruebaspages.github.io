var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    autoplay: {
      delay: 10000,
      disableOnInteraction: false,
    },
    speed: 1000,
    effect: "slide",
});

const textosPilares = [
    "Estamos comprometidos a adorar en Espíritu y verdad para el placer de Dios. Creemos que la adoración es un testimonio de nuestra pasión por Dios y un instrumento de guerra espiritual (Juan 4:23-24; 2 Corintios 10:3-6). <br>Estamos comprometidos con un entorno vibrante lleno del Espíritu que expresa nuestra herencia judía mesiánica (2 Samuel 6:14; 1 Crónicas 15:16; Salmo 9:1; 100; 150). <br>Fomentamos el ejercicio de los dones del Espíritu para la edificación mutua y la producción de frutos duraderos (Romanos 12; 1 Corintios 12; Gálatas 5:22-26). <br>Buscamos exaltar al Dios de Israel y a Su Hijo Yeshua como nuestro enfoque y meta central en todo lo que hacemos, desde una perspectiva bíblica y hebraica auténtica (Efesios 1:15-23).",
    "Estamos comprometidos a orar por la dirección, la habilitación y la bendición de Dios en todos nuestros esfuerzos. Creemos que la oración es esencial para fortalecer nuestra relación corporativa e individual con Dios (Jeremías 29:11-13). <br>Estamos comprometidos a ser casa de oración para todos los pueblos, elevando unánimes nuestra voz a Dios (Isaías 56:6-7; Hechos 4:24-31). Animamos al Cuerpo del Mesías alrededor del mundo a orar por la restauración física y espiritual de Israel (Salmo 122:6).",
    "Estamos comprometidos a hacer discípulos enseñando todo el consejo de Dios (Génesis a Apocalipsis) y alentando a los creyentes a vivir su fe caminando según el estándar bíblico de santidad y justicia como se revela en la Torá, Tanakh y Brit Chadashah. <br>Honramos nuestras raíces en las Escrituras de Israel, que nutren nuestra fe y nos permiten comunicar la verdad con mayor eficacia. Somos responsables ante Dios, ante otros en la congregación, y estamos abiertos al consejo de otros miembros del Cuerpo universal del Mesías (Efesios 5:21; Santiago 5:16; Colosenses 3:9). <br>Creemos en la bendición de dar diezmos y ofrendas a Dios para el sostenimiento de nuestra congregación y de otros que sirven al Señor en todo el mundo (Malaquías 3:10-12). Nos animamos unos a otros a ser sumergidos en el Espíritu Santo (Hechos 1:5) y ser llenos diariamente de Su poder (Efesios 5:18). <br>Estamos comprometidos a expresar el corazón del Mesías hacia las personas que sufren a través de obras de compasión, y confiamos en que Dios obrará a través de Su Espíritu para sanar y liberar (Santiago 1:27; 5:14; Isaías 61:1; Juan 10:10). Estamos comprometidos a inspirar y equipar a personas y ministerios que se identifiquen con nuestra visión y valores fundamentales. Nuestro objetivo, a través de cada ministerio, es exaltar y exaltar a Yeshua como el Mesías, el Hijo de Dios. Su Palabra, predicada y enseñada desde una perspectiva judía, es el fundamento de lo que creemos. Cada individuo aporta al organismo local dones y talentos únicos empoderados por el Espíritu. Alentamos a nuestros miembros a desarrollar y usar estos talentos dados por Dios para edificar la congregación y fomentar el Reino de Di-s. Estamos comprometidos a levantar, empoderar y transmitir nuestra identidad mesiánica y herencia bíblica a la próxima generación de creyentes en Yeshua (Deuteronomio 6:4-9; Hechos 2:42; Efesios 6:4).",
    "Estamos comprometidos con la tarea de proclamar con nuestros labios y nuestras vidas que Yeshua el Mesías es el único Salvador de Israel y del mundo. “Porque no me avergüenzo del evangelio, ya que es poder de Dios para salvación a todo aquel que cree, al judío primeramente, y también al gentil” (Romanos 1:16-17). Nos esforzamos por revelar al Mesías de Israel, Yeshua, de una manera amorosa, culturalmente relevante y sensible al pueblo judío. También creemos que nuestro testimonio se vuelve real y convincente cuando los discípulos judíos y no judíos sirven juntos como “un solo hombre nuevo” (Efesios 2:15). <br>Creemos que Dios está restaurando al pueblo judío físicamente a su tierra y espiritualmente a Él mismo (Isaías 44:21-28). “Y todos los días, en el Templo y de casa en casa, seguían enseñando y predicando a Yeshua como el Mesías, y Dios añadía cada día a ellos los que iban siendo salvos” (Hechos 2:47)."
];


document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".imagenes_slider");
  const images = document.querySelectorAll(".imagenes_slider img");
  let index = 0;
  const intervalTime = 5000;
  let interval;

  function moveSlider() {
      index++;
      
      if (index >= images.length) {
          index = 0;
      }

      const scrollAmount = slider.clientWidth * index;
      slider.scrollTo({
          left: scrollAmount,
          behavior: "smooth"
      });
  }

  function resetInterval() {
      clearInterval(interval);
      interval = setInterval(moveSlider, intervalTime);
  }

  slider.addEventListener("scroll", function () {
      index = Math.round(slider.scrollLeft / slider.clientWidth);
      resetInterval();
  });

  interval = setInterval(moveSlider, intervalTime);
});

let interval;
const slideDuration = 10000;
let currentIndex = 0;

function startAutoSlide() {
    const items = document.querySelectorAll('.item');
    if (items.length <= 1) return;

    interval = setInterval(() => {
        showNextSlide(items);
    }, slideDuration);
}

function showNextSlide(items) {
    currentIndex = (currentIndex + 1) % items.length;
    centerActiveItem(items);
}

function showPrevSlide(items) {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    centerActiveItem(items);
}

function centerActiveItem(items) {
    items.forEach((item, index) => {
        item.classList.remove('active');
        const video = item.querySelector('video');
        if (video) {
            video.pause();
            video.currentTime = 0;
        }
    });

    const activeItem = items[currentIndex];
    activeItem.classList.add('active');
    
    const video = activeItem.querySelector('video');
    if (video) {
        video.play();
    }

    const pilar = document.getElementById("pilar");
    if (pilar && textosPilares[currentIndex]) {
        pilar.innerHTML = textosPilares[currentIndex];
    }


    const container = document.querySelector('.contenedor');
    const translateX = -activeItem.offsetLeft + (container.offsetWidth / 2) - (activeItem.offsetWidth / 2);
    const carousel = document.querySelector('.carrusel');
    carousel.style.transform = `translateX(${translateX}px)`;
}

document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.item');
    if (items.length > 0) {
        centerActiveItem(items);
        startAutoSlide();
    }

    const prevButton = document.querySelector('.previo');
    const nextButton = document.querySelector('.siguiente');

    prevButton.addEventListener('click', () => {
        showPrevSlide(items);
        resetAutoSlide();
    });

    nextButton.addEventListener('click', () => {
        showNextSlide(items);
        resetAutoSlide();
    });

    const carousel = document.querySelector('.carrusel');
    carousel.addEventListener('scroll', () => {
        clearInterval(interval);
        const activeItem = document.elementFromPoint(window.innerWidth / 2, window.innerHeight / 2);
        if (activeItem && activeItem.classList.contains('item')) {
            items.forEach((item, index) => {
                if (item === activeItem) {
                    currentIndex = index;
                }
                item.classList.remove('active');
                const video = item.querySelector('video');
                if (video) {
                    video.pause();
                    video.currentTime = 0;
                }
            });
            activeItem.classList.add('active');
            const video = activeItem.querySelector('video');
            if (video) {
                video.play();
            }
        }
        startAutoSlide();
    });

    items.forEach((item, index) => {
        item.addEventListener('click', () => {
            currentIndex = index;
            centerActiveItem(items);
            resetAutoSlide();
        });
    });

const elementosAnimar = document.querySelectorAll('.animacion-deslizar-arriba');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animacion-activa');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.2
  });

  elementosAnimar.forEach(el => observer.observe(el));
});

function resetAutoSlide() {
    clearInterval(interval);
    startAutoSlide();
}

document.getElementById("mensaje").style.display = "block";
            let contador = 10;
            let intervalo = setInterval(function() {
                contador--;
                document.getElementById("cuenta").innerText = contador;
                if (contador === 0) {
                    clearInterval(intervalo);
                    document.getElementById("mensaje").style.display = "none";
                }
            }, 1000);

