
// Smooth scroll for anchors
document.querySelectorAll('a[href^="#"]').forEach(function(link){
  link.addEventListener('click', function(e){
    e.preventDefault();
    var target = document.querySelector(this.getAttribute('href'));
    if(target) target.scrollIntoView({behavior:'smooth', block:'start'});
  });
});

// Simple form submit handler to show message (Formspree still sends the data)
var form = document.getElementById('contactForm');
if(form){
  form.addEventListener('submit', function(e){
    // allow default submission to Formspree but show a quick alert for UX
    setTimeout(function(){
      alert('Форма отправлена. Спасибо! Мы свяжемся с вами в ближайшее время.');
    }, 500);
  });
}
