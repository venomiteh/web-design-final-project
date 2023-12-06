function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}
window.addEventListener('scroll', function() {
  const scrollToTopBtn = document.getElementById('scrollToTopBtn');
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.style.display = 'block';
  } else {
    scrollToTopBtn.style.display = 'none';
  }
});


function showLogin(event) {
   event.preventDefault();
   var loginOverlay = document.getElementById("loginOverlay");
   var registrationOverlay = document.getElementById("registrationOverlay");
 
   loginOverlay.style.display = "block";
   registrationOverlay.style.display = "none";}

function showregistration(event){
  event.preventDefault();
  var loginOverlay = document.getElementById("loginOverlay");
  var registrationOverlay = document.getElementById("registrationOverlay");

  loginOverlay.style.display = "none";
  registrationOverlay.style.display = "block";


}
function remove(){
  var loginOverlay = document.getElementById("loginOverlay");
  var registrationOverlay = document.getElementById("registrationOverlay");
  var discussionoverlay=document.getElementById("adddiscOverlay")
  var showerror=document.getElementById("errorOverlay");
  showerror.style.display="none"
  loginOverlay.style.display = "none";
  registrationOverlay.style.display = "none";
  discussionoverlay.style.display="none";


}
function dropdown(event){
  event.preventDefault();
  var dropdown=document.getElementById("myDropdown")
  var arrow = document.getElementById('arrow');
  var polygon = arrow.querySelector('polygon');
  if(dropdown.style.display=="none")
  {dropdown.style.display="block";
  polygon.setAttribute('points', '5,45 45,45 25,5');}
  else{
dropdown.style.display="none";
polygon.setAttribute('points', '5,5 45,5 25,45');


}
  

}
function active1(event){
  event.preventDefault();
  var active1=document.getElementById("active1");
  var active2=document.getElementById("active2");
  var active3=document.getElementById("active3");
  if(active1.style.backgroundColor == "dodgerblue"){
  active1.style.backgroundColor = "white";
  active1.style.color ="black";
  }
  else
  {active1.style.backgroundColor = "dodgerblue";
  active2.style.color ="black";
  active3.style.color ="black";
  active1.style.color ="white";
  active2.style.backgroundColor = "white";
  active3.style.backgroundColor = "white";}
}
function active2(event){
  event.preventDefault();
  var active1=document.getElementById("active1");
  var active2=document.getElementById("active2");
  var active3=document.getElementById("active3");
  if(active2.style.backgroundColor == "dodgerblue"){
    active2.style.backgroundColor = "white";
    active2.style.color ="black";
    }
    else
    {active2.style.backgroundColor = "dodgerblue";
    active1.style.color ="black";
    active3.style.color ="black";
    active2.style.color ="white";
    active1.style.backgroundColor = "white";
    active3.style.backgroundColor = "white";}
}
function active3(event){
  event.preventDefault();
  var active1=document.getElementById("active1");
  var active2=document.getElementById("active2");
  var active3=document.getElementById("active3");
  if(active3.style.backgroundColor == "dodgerblue"){
    active3.style.backgroundColor = "white";
    active3.style.color ="black";
    }
    else
    {active3.style.backgroundColor = "dodgerblue";
    active1.style.color ="black";
    active2.style.color ="black";
    active3.style.color ="white";
    active1.style.backgroundColor = "white";
    active2.style.backgroundColor = "white";}
}


function showdiscOverlay(event){
  event.preventDefault();
  var discussionoverlay = document.getElementById("adddiscOverlay");


  discussionoverlay.style.display = "block";



}

function showreperror(event){
  var showerror=document.getElementById("errorOverlay");
  showerror.style.display="block"
}