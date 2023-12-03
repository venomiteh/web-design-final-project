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
  loginOverlay.style.display = "none";
  registrationOverlay.style.display = "none";


}