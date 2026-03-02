

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

if(buttons) {
buttons[0].classList.add('active');
active = buttons[0].dataset.id;
console.log("Активная кнопка при загрузке:", active);
}

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


const gallery1 = document.querySelector('.gallery');
const leftBtn = document.querySelector('.scroll-btn.left');
const rightBtn = document.querySelector('.scroll-btn.right');

function getVisibleCount() {
  const width = window.innerWidth;
  if (width <= 768) return 1;       // мобильный
  if (width <= 1024) return 2;      // планшет
  return 3;                          // desktop
}

leftBtn.addEventListener('click', () => {
  const photoWidth = gallery1.querySelector('img').offsetWidth + 10; // +gap
  const visibleCount = getVisibleCount();
  gallery1.scrollBy({ left: -photoWidth * visibleCount, behavior: 'smooth' });
});

rightBtn.addEventListener('click', () => {
  const photoWidth = gallery1.querySelector('img').offsetWidth + 10;
  const visibleCount = getVisibleCount();
  gallery1.scrollBy({ left: photoWidth * visibleCount, behavior: 'smooth' });
});