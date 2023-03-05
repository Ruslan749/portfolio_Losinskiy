function modal (){
 // модельное окно

 const modal = document.querySelector('.modal');// объект
 const btn = document.querySelectorAll('.button__modal');// масив
 const close = document.querySelector('.close');
 const windows = document.querySelectorAll('[data-modal]');

 btn.forEach(item => {

     item.addEventListener('click', (e) =>{

         if (e.target){
             e.preventDefault();
         }
         
         windows.forEach(item =>{
             item.style.display ="none";
         });

         modal.style.display = "block";

         document.body.style.overflow = "hidden"; //  для того чтобы при появлении мод окна страница замораживалась
     });
 });

 close.addEventListener('click', () => {
     modal.style.display ='none';
     document.body.style.overflow = "";
 });
}
export default modal;