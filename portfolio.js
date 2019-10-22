AOS.init();

function animateWithRandomNumber(myClass, from, to) {
  TweenLite.fromTo(myClass, Math.floor(Math.random() * 20 + 1), { y: from }, { y: to,
    onComplete: animateWithRandomNumber,
    onCompleteParams: [myClass, from, to],
    ease: Linear.easeNone });
}

const itemsDown = [".light4", ".light5", ".light6", ".light7", ".light8", ".light11", ".light12", ".light13", ".light14", ".light15", ".light16"].
forEach(e => animateWithRandomNumber(e, -1080, 1080));
const itemsUp = [".light1", ".light2", ".light3", ".light9", ".light10", ".light17"].
forEach(e => animateWithRandomNumber(e, 1080, -1080));

// Add smooth scrolling to all links
$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    } 
  });
});
