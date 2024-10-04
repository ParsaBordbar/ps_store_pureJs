const addToCartBtn = document.getElementById('addToCartBtn');
const plusBtn = document.getElementById('plusBtn');
const screenShotBtn = document.getElementById('screenShotBtn');
const body = document.querySelector("body");

gameInCart = [];

const gameDetails = {
    name : 'Hogwarts Legacy',
    price: 69.99,
    gameID: 'HG:L',
    image: 'http://127.0.0.1:5501/components/pictures/hogwarts.webp'
}
gameInCart.push(gameDetails);

addToCartBtn.addEventListener('click',()=>{
    gameDetailsString = JSON.stringify(gameDetails)
    localStorage.setItem('gameThatAdded', gameDetailsString);
})

let customScroll = document.querySelector('#scroll')
window.addEventListener('scroll', function () {
    let scrollTop = window.scrollY
    let documentHeight = document.body.clientHeight
    let windowHeight = window.innerHeight
    let scrollPercent = scrollTop / (documentHeight - windowHeight)
    let scrollPercentRounded = scrollPercent * 100
    customScroll.style.width = scrollPercentRounded + '%'
    console.log(scrollPercentRounded);
})

const showModal = () =>{
    modalParent.style.display = 'flex';
    if(modalParent.style.display === 'flex')
        body.style.overflow = "hidden";
};
const hideModalClickOutSide = () =>{
    document.getElementById('modalParent').addEventListener('click',(e)=>{
        if(e.srcElement === document.getElementById('modalParent')){
            document.getElementById("modalParent").style.display = 'none';
            if(modalParent.style.display === 'none')
                body.style.overflow = "auto";
        }
    });
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

screenShotBtn.addEventListener('click', showModal);
hideModalClickOutSide();