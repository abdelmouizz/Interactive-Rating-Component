const Firstwrapper=document.querySelector('.first-wrapper');
const Secondwrapper=document.querySelector('.second-wrapper');
const Ratingbtn=document.querySelectorAll('.feedback-num');
const Submitbtn=document.querySelector('.sub-btn');
const Rating=document.querySelector('.rating');
const ratbtn=document.querySelectorAll('.rate-btn')
const btn1=document.getElementById('bt1');
const btn2=document.getElementById('bt2');
const btn3=document.getElementById('bt3');
const btn4=document.getElementById('bt4');
const btn5=document.getElementById('bt5');


function ShowSecondWrapper() {
    Secondwrapper.classList.remove("display");
    Firstwrapper.style.display="none";
    
}
Submitbtn.addEventListener('click', ShowSecondWrapper);

btn1.addEventListener('click',  function() {
  Rating.innerText = btn1.innerText; 
   });
btn2.addEventListener('click',  function() {
  Rating.innerText = btn2.innerText; 
  });
btn3.addEventListener('click',  function() {
  Rating.innerText = btn3.innerText; 
  });
btn4.addEventListener('click',  function() {
  Rating.innerText = btn4.innerText; 

});
btn5.addEventListener('click',  function() {
  Rating.innerText = btn5.innerText; 
  });


