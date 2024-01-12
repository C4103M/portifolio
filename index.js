const arrowRigth = document.querySelector('.arrow-rigth');
const arrowLeft = document.querySelector('.arrow-left');

const skill = document.querySelector('.skills')
const skill2 = document.querySelector('.skills2')
function rigth() {
    skill.style.left = '-100vw'
    skill2.style.left = '0'
    arrowRigth.style.opacity = '0.3';
    arrowLeft.style.opacity = '1';
}
function left() {
    skill.style.left = '0'
    skill2.style.left = '100vw'
    arrowRigth.style.opacity = '1';
    arrowLeft.style.opacity = '0.3';
}
function slideRight() {
    let foto = document.querySelector('.foto');
    foto.style.left = '-360px'
}


// const element1 = document.querySelector('#element1');
// const element2 = document.querySelector('#element2');

// const modal = document.querySelector('dialog');

// modal.showModal();


const ic1 = document.getElementById('ic1');
const ic2 = document.getElementById('ic2');
const ic3 = document.getElementById('ic3');
const ic4 = document.getElementById('ic4');
const ic5 = document.getElementById('ic5');

const ic6 = document.getElementById('ic6');
const ic7 = document.getElementById('ic7');
const ic8 = document.getElementById('ic8');
const ic9 = document.getElementById('ic9');
const ic10 = document.getElementById('ic10');
const ic11 = document.getElementById('ic11');
const ic12 = document.getElementById('ic12');
const ic13 = document.getElementById('ic13');
const ic14 = document.getElementById('ic14');
const ic15 = document.getElementById('ic15');

ic1.addEventListener('click', () => {
    window.open('https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile', '_blank');
})
ic2.addEventListener('click', () => {
    window.open('https://github.com/C4103M', '_blank');
})
ic3.addEventListener('click', () => {
    
})
ic4.addEventListener('click', () => {
    window.open('https://www.instagram.com/caioemns/', '_blank');
})
ic5.addEventListener('click', () => {
    window.open('https://wa.link/u3er4u', '_blank');
})
ic6.addEventListener('click', () => {
  window.open('https://quizapp01.42web.io/', '_blank');
})
ic7.addEventListener('click', () => {
  window.open('https://github.com/C4103M/quizapp', '_blank');
})
ic8.addEventListener('click', () => {
  window.open('http://redesocial.42web.io/', '_blank');
})
ic9.addEventListener('click', () => {
  window.open('https://github.com/C4103M/redesocial', '_blank');
})
ic10.addEventListener('click', () => {
  window.open('http://projetoloja.42web.io/', '_blank');
})
ic11.addEventListener('click', () => {
  window.open('https://github.com/C4103M/projetoloja', '_blank');
})
ic12.addEventListener('click', () => {
  window.open('https://c4103m.github.io/guardioesDaGalaxia/', '_blank');
})
ic13.addEventListener('click', () => {
  window.open('https://github.com/C4103M/guardioesDaGalaxia', '_blank');
})
ic14.addEventListener('click', () => {
  window.open('https://c4103m.github.io/HarryPotterBlog/', '_blank');
})
ic15.addEventListener('click', () => {
  window.open('https://github.com/C4103M/HarryPotterBlog', '_blank');
})
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}




// showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}

let menu = document.querySelector('#menu')
let navegacao = document.getElementById('navigation')
function changeMenu() {
	menu.classList.toggle('active');
	navegacao.classList.toggle('active');

}