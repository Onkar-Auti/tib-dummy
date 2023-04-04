// ------------- Navigation responsive ---------------- 
// const list = document.querySelector('.menu-list')
// const menuBtn = document.querySelector('.menu-btn')
// const cancleBtn = document.querySelector('.cancle-btn')

// menuBtn.addEventListener('click',()=>{
//     list.classList.add("active");
//     menuBtn.classList.add("hide")
// })
// cancleBtn.addEventListener('click',()=>{
//     list.classList.remove("active")
//     menuBtn.classList.remove("hide")
// })

// ------------------------ stick navbar -------------- 
window.onscroll = function () {myFunction() };

var navbar = document.getElementById("nav");
var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}
// ------------- Navigation responsive end---------------- 

//  Initialize main-corousel Swiper 

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    autoplay: {
        delay: 3000,
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
//  Initialize main-corousel Swiper code end


  // ------------------ product card corousel code---------------- 

  var galleryThumbs = new Swiper(".gallery-thumbs", {
    // centeredSlides: true,
    // centeredSlidesBounds: true,
    slidesPerView: 3,
    allowTouchMove: false,
    allowSlideNext: false,
    // watchOverflow: true,
    // watchSlidesVisibility: true,
    // watchSlidesProgress: true,
    direction: 'horizontal'
  });
  
  var galleryMain = new Swiper(".gallery-main", {
    watchOverflow: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    preventInteractionOnTransition: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    effect: 'fade',
      fadeEffect: {
      crossFade: true
    },
    thumbs: {
      swiper: galleryThumbs
    }
  });
  
  galleryMain.on('slideChangeTransitionStart', function() {
    galleryThumbs.slideTo(galleryMain.activeIndex);
  });
  
  galleryThumbs.on('transitionStart', function(){
    galleryMain.slideTo(galleryThumbs.activeIndex);
  });

  // ------------------ product card corousel code end---------------- 

// ------------------- feautred corousel -------------- 

var swiper = new Swiper(".featured-Swiper", {
  slidesPerView: 3,
  dynamicBullets: true,
  clickable: true,
  spaceBetween: 30,
  breakpoints: {  
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    680: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// --------------- input field hide and show in navigation --------------- 


var button = document.getElementById('showing-3'); 
button.onclick = function() {
    var div = document.getElementById('Hidding-3');
    if (div.style.display !== 'none') {
        div.style.display = 'none';
    }
    else {
        div.style.display = 'block';
    }
};

var button = document.getElementById('showing-5'); 
button.onclick = function() {
    var div = document.getElementById('Hidding-3');
    if (div.style.display !== 'none') {
        div.style.display = 'none';
    }
    else {
        div.style.display = 'block';
    }
};



// -------------------- dashboard side panel js ------------------------
const tabsBox = document.querySelector(".tabs-box"),
allTabs = tabsBox.querySelectorAll(".tab"),
arrowIcons = document.querySelectorAll(".icon i");

let isDragging = false;

const handleIcons = (scrollVal) => {
let maxScrollableWidth = tabsBox.scrollWidth - tabsBox.clientWidth;
arrowIcons[0].parentElement.style.display = scrollVal <= 0 ? "none" : "flex";
arrowIcons[1].parentElement.style.display = maxScrollableWidth - scrollVal <= 1 ? "none" : "flex";
}

arrowIcons.forEach(icon => {
icon.addEventListener("click", () => {
    // if clicked icon is left, reduce 350 from tabsBox scrollLeft else add
    let scrollWidth = tabsBox.scrollLeft += icon.id === "left" ? -340 : 340;
    handleIcons(scrollWidth);
});
});

allTabs.forEach(tab => {
tab.addEventListener("click", () => {
    tabsBox.querySelector(".active").classList.remove("active");
    tab.classList.add("active");
});
});

const dragging = (e) => {
if (!isDragging) return;
tabsBox.classList.add("dragging");
tabsBox.scrollLeft -= e.movementX;
handleIcons(tabsBox.scrollLeft)
}

const dragStop = () => {
isDragging = false;
tabsBox.classList.remove("dragging");
}

tabsBox.addEventListener("mousedown", () => isDragging = true);
tabsBox.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);

// -------------------- dashboard side panel js ------------------------
