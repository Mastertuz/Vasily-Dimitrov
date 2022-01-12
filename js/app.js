$(function(){
   $('.menu__btn').on('click', function(){
    $('.header-top').toggleClass
    ('header-top--active');
   });

   $(".menu a, .go-top").on("click", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1000);
	});
});





const slides = document.querySelectorAll('.slide')

for (const slide of slides){
   slide.addEventListener('click', () => {
clearaActiveClasses()

slide.classList.add('active')
   })
}

function clearaActiveClasses() {
   slides.forEach((slide) => {
slide.classList.remove('active')
   })
}

