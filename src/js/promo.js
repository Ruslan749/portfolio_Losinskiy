function promo (){
// promo
const burger = document.querySelector('.burger'),
menuClose = document.querySelector('.menu__close'),
menuActive = document.querySelector('.menu__active');


burger.addEventListener('click', () =>{
  burger.classList.toggle('burger_active');

  if (burger.classList.contains("burger_active")) {
      menuClose.style.display="none";
      menuActive.style.display="block";
  } else {
      menuClose.style.display="block";
      menuActive.style.display="none";
  }

});
}
export default promo;