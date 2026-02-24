

const goBtn = document.getElementById("goBtn");
if (goBtn) {
  goBtn.addEventListener("click", () => {
    window.location.href = "./page2.html";
  });
}

const backBtn = document.getElementById("btn");
if (backBtn) {
  backBtn.addEventListener("click", () => {
    window.location.href = "./index.html";
  });
}

const burger = document.getElementById("burger");
const menu = document.querySelector(".nav-list");

if (burger && menu) {
  burger.addEventListener("click", () => {
    menu.classList.toggle("active");
  });
}

console.log(burger, menu)

const body = document.querySelector(".body")
const bag = document.getElementById("bag")

if(body && bag) {
  bag.addEventListener("click", () => {
    body.classList.toggle("active")
  })
}

const search = document.getElementById("search")
const input = document.querySelector(".input-nav")
const btn = document.getElementById("btn-input")
const inputText = document.getElementById("input-text")

if(search && input) {
  search.addEventListener("click", () => {
    input.classList.toggle("active")
  })
}

 let xoxma = ""

if(btn) {
  btn.addEventListener("click", () => {
      input.classList.toggle("active", false);
     xoxma = inputText.value;
        inputText.value = "";
  })
}

  const gallery = document.querySelector(".img-main2-container")


//  if (gallery) {
//   const photos = Array.from(gallery.querySelectorAll('img'));
//   const galleryCenter = gallery.offsetWidth / 2;

//   let closestIndex = 0;
//   let minDistance = Infinity;

//   photos.forEach((photo, index) => {
//     const galleryLeft = gallery.getBoundingClientRect().left;
//     const photoLeft = photo.getBoundingClientRect().left;

//     const relativeLeft = photoLeft - galleryLeft;
//     const photoCenter = relativeLeft + photo.offsetWidth / 2;

//     const distance = Math.abs(photoCenter - galleryCenter);

//     if (distance < minDistance) {
//       minDistance = distance;
//       closestIndex = index;
//     }
//   });

//   console.log("Центральная фотка:", closestIndex);
// }



const track = document.querySelector('.track');
const dotsContainer = document.getElementById('dots');
const images = document.querySelectorAll('.track img');

let currentIndex = 0;
const visibleSlides = 3;
const totalSlides = images.length - (visibleSlides - 1);

for (let i = 0; i < totalSlides; i++) {
  const dot = document.createElement('span');
  if (i === 0) dot.classList.add('active');

  dot.addEventListener('click', () => {
    currentIndex = i;
    updateSlider();
  });

  dotsContainer.appendChild(dot);
}

function updateSlider() {
  const slideWidth = images[0].offsetWidth + 20;
  track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;

  document.querySelectorAll('.dots span').forEach(dot => dot.classList.remove('active'));
  dotsContainer.children[currentIndex].classList.add('active');
}


const swoop = document.getElementById("swoop");
const slides = document.querySelectorAll(".main-7-slide");
const krugiContainer = document.getElementById("krugi");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");

if(swoop) {

/* -------- CREATE KRUGI -------- */

slides.forEach((_, index) => {
  const krug = document.createElement("span");

  krug.addEventListener("click", () => {
    const slideWidth = slides[0].offsetWidth + 20;

    swoop.scrollTo({
      left: slideWidth * index,
      behavior: "smooth"
    });
  });

  krugiContainer.appendChild(krug);
});

function updateKrugi(index) {
  const krugi = document.querySelectorAll(".krugi span");
  krugi.forEach(k => k.classList.remove("active"));

  if (krugi[index]) {
    krugi[index].classList.add("active");
  }
}

updateKrugi(0);

/* -------- SCROLL LOGIC -------- */

swoop.addEventListener("scroll", () => {
  const slideWidth = slides[0].offsetWidth + 20;
  const index = Math.round(swoop.scrollLeft / slideWidth);

  updateKrugi(index);
});

/* -------- MODAL -------- */

slides.forEach(slide => {
  slide.addEventListener("click", () => {
    const img = slide.querySelector("img");

    modal.style.display = "flex";
    modalImg.src = img.src;
    document.body.style.overflow = "hidden";
  });
});

modal.addEventListener("click", () => {
  modal.style.display = "none";
  document.body.style.overflow = "auto";
});

}

const elements = document.querySelectorAll('.real');

if (elements && elements.length > 0) {

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.2
  });

  elements.forEach(el => observer.observe(el));
}

let active = null;

const buttons = document.querySelectorAll('.main-8-button .btn');


buttons[0].classList.add('active');
active = buttons[0].dataset.id;
console.log("Активная кнопка при загрузке:", active);


buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    // Убираем active у всех кнопок
    buttons.forEach(b => b.classList.remove('active'));

    // Делаем активной кнопку, на которую кликнули
    btn.classList.add('active');

    // Обновляем переменную
    active = btn.dataset.id;
    console.log("Активная кнопка:", active);
  });
});


const one = document.querySelector('.img-container-8');
const two = document.querySelector('.img-id-shampo');
const three = document.querySelector('.img-id-pearl');





function showGroup(groupToShow) {
  const allGroups = ['img-container-id', 'img-id-shampo', 'img-id-pearl'];

  allGroups.forEach(group => {
    const blocks = document.querySelectorAll(`.${group}`);
    blocks.forEach(block => {
      if (group === groupToShow) {
        block.style.display = 'block'; // показываем нужную группу
      } else {
        block.style.display = 'none';  // скрываем остальные
      }
    });
  });
}