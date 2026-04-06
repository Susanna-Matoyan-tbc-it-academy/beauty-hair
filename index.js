


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

 
function initButtons() {
  const buttons = document.querySelectorAll('.main-8-button .btn');

  if (buttons.length === 0) return;

  let active = null;

  const setActive = (btn) => {
    buttons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    active = btn.dataset.id;
    console.log('Активная кнопка:', active);
  };

  setActive(buttons[0]);

  buttons.forEach(btn => {
    btn.addEventListener('click', () => setActive(btn));
  });
}

initButtons();







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








const bookingBtn = document.getElementById("bookingBtn");

const form = document.querySelector("form");

if(bookingBtn) {


bookingBtn.addEventListener('click', () => {

  form.addEventListener("submit", function(e) {
  e.preventDefault();

  Swal.fire({
    title: "Booking confirmed!",
    text: "You have successfully booked!",
    icon: "success",
    confirmButtonText: "OK"
  }).then(() => {
    form.reset();
  });
});

})
}

