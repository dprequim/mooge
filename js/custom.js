gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);





function setSplitText(element, type) {

	let className = null;

	switch(type) {
		case 'lines':
		className = 'line';
		break;
		case 'words':
		className = 'word';
		break;
		case 'chars':
		className = 'char';
		break;
		default: 
		className = null;
	}

	document.querySelectorAll(element).forEach(el => {
		let splitText = new SplitText(el, {type: type, linesClass: className});
	});

}



// Document Ready
document.addEventListener('DOMContentLoaded', function(){

	// setSplitText('.scene-1 .title', 'chars');
	// setSplitText('.scene-1 .subtitle', 'word');
	// setSplitText('.scene-3 .text__title', 'chars');
	// setSplitText('.main__footer .title', 'chars');



	const overlay1move = gsap.timeline({
		scrollTrigger: {
			trigger: '.scene-1',
			start: 'top top',   
			end: 'bottom top',
			scrub: true,
			pin: false,
			pinSpacing: false,
		}
	}).to('.global__overlay', {backgroundImage: 'linear-gradient(0deg, rgba(6, 162, 239, 1) 0%, rgba(92, 198, 207, 1) 100%)'});





	// const scene1move = gsap.timeline({
	// 	scrollTrigger: {
	// 		trigger: '.scene-1',
	// 		start: 'top top',   
	// 		end: 'bottom top',
	// 		scrub: true,
	// 		pin: false,
	// 		pinSpacing: false,
	// 	}}).to('.scene-1 .socials__wrapper', {y: "-50vh", ease: 'power1.in'},'<')
	// 		 .to('.scene-1 .logo__area', {y: "-100vh", ease: 'power1.in'}, '<')
	// 		 .to('.scene-1 .text__area', {y: "-100vh", ease: 'power1.in'}, '<');







	const overlay2move = gsap.timeline({
		scrollTrigger: {
			trigger: '.scene-2',
			start: 'top top',   
			end: 'bottom top',
			scrub: true,
			pin: false,
			pinSpacing: false,
		}})
			.to('.global__overlay', {backgroundImage: 'linear-gradient(0deg, rgba(6, 162, 239, 1) 0%, rgba(92, 198, 207, 1) 100%)'});


	// const scene2move = gsap.timeline({
	// 	scrollTrigger: {
	// 		trigger: '.scene-2',
	// 		start: 'top bottom',   
	// 		end: 'bottom top',
	// 		scrub: true,
	// 		pin: true,
	// 		pinSpacing: false, 
	// 	}})
	// 		.set('.scene-2 .media', {scaleX: 0.5, scaleY: 0.5, transformOrigin: '50% 80%'})
	// 		.to('.scene-2 .media', { duration: 0.2, y: '-115%', ease: 'none'})
	// 		.to('.scene-2 .media', {duration: 0.3, scaleX: 1, scaleY: 1, ease: 'none'});


	// gsap.set('.scene-2 .media', {scaleX: 0.5, scaleY: 0.5, transformOrigin: '50% 80%'});

	// if(window.innerWidth > 1199) {
	// 	const scene2move = gsap.timeline({
	// 	scrollTrigger: {
	// 		trigger: '.scene-2',
	// 		start: 'top top+=50%',   
	// 		end: 'bottom top',
	// 		scrub: true,
	// 		pin: true,
	// 		pinSpacing: true,
	// 		// markers: true, 
	// 	}})
	// 		.set('.scene-2 .media', {y: '30%'})
	// 		.to('.scene-2 .media', {duration: 0.2, y: '-55%', ease: 'none'})
	// 		.to('.scene-2 .media', {duration: 0.2, scaleX: 1, scaleY: 1, ease: 'none'});
	// }


	const overlayInfomove = gsap.timeline({
		scrollTrigger: {
			trigger: '.scene.info',
			start: 'top top',   
			end: 'bottom top',
			scrub: true,
			pin: false,
			pinSpacing: false,
		}})
			.to('.global__overlay', {backgroundImage: 'linear-gradient(0deg, rgba(181, 255, 229, 1) 0%, rgba(92, 198, 207, 1) 100%)'});
	


		const overlay3move = gsap.timeline({
		scrollTrigger: {
			trigger: '.scene-3',
			start: 'top top',   
			end: 'bottom top',
			scrub: true,
			pin: false,
			pinSpacing: false,
		}})
			.to('.global__overlay', {backgroundImage: 'linear-gradient(0deg, rgba(181, 255, 229, 1) 0%, rgba(92, 198, 207, 1) 100%)'});


		const scene3Top = gsap.timeline({
		scrollTrigger: {
			trigger: '.scene-3 .scene__content_inner_top',
			start: 'top top+=70%',   
			end: 'bottom top',
			scrub: false,
			pin: false,
			pinSpacing: false,
		}})
			 .from('.scene-3 .dash', {duration: 0.5, scaleX: 0, scaleY: 0, transformOrigin: '50% 50%', ease: "back.out(4)"})
			 .from('.scene-3 .omics', {duration: 0.5, scaleX: 0, scaleY: 0, transformOrigin: '50% 50%', ease: "back.out(4)"}, '-=0.4')
			 //.from('.scene-3 .progress__bar', {duration: .5, scaleX: 0, transformOrigin: '50% 50%', ease: 'back.out(2)'}, '-=0.4')
			 //.from('.scene-3 .progress__bar_item', {duration: 1, scaleX: 0, transformOrigin: '0% 50%', ease: 'power4.out'})
			 .from(['.scene-3 .progress__bar_item .title', '.scene-3 .progress__bar_item .percents'], {opacity: 0, ease: 'power4.out'}, '-=0.2')
			 .from('.scene-3 .text__title', {duration: 0.5, scaleX: 0, scaleY: 0, transformOrigin: '50% 50%', ease: "back.out(4)"}, '-=1');





		const scene3Bottom = gsap.timeline({
		scrollTrigger: {
			trigger: '.scene-3 .scene__content_inner_bottom',
			start: 'top bottom-=30%',   
			end: 'bottom bottom',
			scrub: false,
			pin: false,
			pinSpacing: false, 
		}})
			 //.from('.scene-3 .island', {duration: 1, scaleX: 0.3, y: '100%', ease: 'power4.out'})
			 //.from('.scene-3 .mountains img', {duration: 1, y: '100%', ease: 'power4.out'}, '-=0.8')
			 //.from('.scene-3 .house', {duration: 1, scaleY: 0, transformOrigin: '50% 100%', ease: "elastic.out(1, 0.3)"}, '-=0.2')
			 //.from('.scene-3 .dog', {opacity: 0, ease: 'power4.out'}, '-=0.5')
			 .from('.scene-3 .bubble.b-1', {duration: 0.5, scaleX: 0, scaleY: 0, transformOrigin: '50% 50%', ease: 'power2.out'}, '-=0.5')
			 .from('.scene-3 .bubble.b-3', {duration: 0.5, scaleX: 0, scaleY: 0, transformOrigin: '50% 50%', ease: 'power2.out'}, '-=0.4')
			 .from('.scene-3 .bubble.b-2', {duration: 0.5, scaleX: 0, scaleY: 0, transformOrigin: '50% 50%', ease: 'power2.out'}, '-=0.4')
			 .from('.scene-3 .bubble.b-4', {duration: 0.5, scaleX: 0, scaleY: 0, transformOrigin: '50% 50%', ease: 'power2.out'}, '-=0.4')
			 .from('.scene-3 .bee.b-1', {duration: 1, x: '-200%', y: '-50%', scaleX: 0, scaleY: 0, transformOrigin: '50% 50%', ease: 'power4.out'}, '-=0.3')
			 .from('.scene-3 .bee.b-2', {duration: 1, x: '-200%', y: '-50%', scaleX: 0, scaleY: 0, transformOrigin: '50% 50%', ease: 'power4.out'}, '-=0.5')
			 .from('.scene-3 .bee.b-3', {duration: 1, x: '-200%', y: '-50%', scaleX: 0, scaleY: 0, transformOrigin: '50% 50%', ease: 'power4.out'}, '-=0.5')
			 .from('.scene-3 .bird', {duration: 1, x: '200%', y: '50%', scaleX: 0, scaleY: 0, transformOrigin: '50% 50%', ease: 'power4.out'}, '-=1.2');


	

	const scene4move = gsap.timeline({
		scrollTrigger: {
			trigger: '.scene-4',
			start: 'top bottom-=75%',   
			end: 'bottom top',
			scrub: false,
			pin: false,
			pinSpacing: false,
		}}).from('.scene-4 .bubble', {duration: 1, scaleX: 0, scaleY: 0, transformOrigin: '50% 50%', ease: 'power2.out', stagger: 0.1})
			 .from('.scene-4 .dog', {opacity: 0, ease: 'power2.out'}, '-=0.5')
			 .from('.scene-4 .f-1', {duration: 1.5, x: '-30vw', ease: 'power2.out'}, '-=0.5')
			 .from('.scene-4 .f-2', {duration: 1.5, x: '30vw', ease: 'power2.out'}, '-=1.3')
			 .from('.scene-4 .f-3', {duration: 1.5, x: '30vw', ease: 'power2.out'}, '-=1.1');


	const scene5move = gsap.timeline({
		scrollTrigger: {
			trigger: '.scene-5',
			start: 'top bottom-=75%',   
			end: 'bottom top',
			scrub: false,
			pin: false,
			pinSpacing: false,
		}}).from('.scene-5 .coin.contact img', {duration: 1.5, scaleX: 0, scaleY: 0, transformOrigin: '50% 50%', ease: 'power2.out'})
			 .from('.scene-5 .coin.chart img', {duration: 1.5, scaleX: 0, scaleY: 0, transformOrigin: '50% 50%', ease: 'power2.out'}, '-=1.4')
			 .from('.scene-5 .coin.buy img', {duration: 1.5, scaleX: 0, scaleY: 0, transformOrigin: '50% 50%', ease: 'power2.out'}, '-=1.3')
			 .from('.scene-5 .dog', {opacity: 0, ease: 'power4.out'}, '-=1');





	document.querySelectorAll('.description__item').forEach(item => {

		const image = item.querySelector('.description__item_image');
		const text = item.querySelector('.description__item_text');


		const sceneInfoMove = gsap.timeline({
		scrollTrigger: {
			trigger: item,
			start: 'top top+=70%',   
			end: 'bottom top',
			scrub: false,
			pin: false,
			pinSpacing: false,
			// markers: true,
		}}).from(image, {duration: 0.5, scaleX: 0, scaleY: 0, transformOrigin: '50% 50%', ease: 'back.out(4)'})
			 .from(text, {duration: 0.5, scaleX: 0, scaleY: 0, transformOrigin: '50% 50%', ease: 'power2.out'}, '<');

	});

	



	gsap.to('.global__overlay', {backgroundImage: 'linear-gradient(0deg, rgba(6, 162, 239, 1) 0%, rgba(6, 162, 239, 1) 100%)'});

	gsap.utils.toArray(".main__menu a:not(.initial)").forEach(function(a) {
		a.addEventListener("click", function(e) {
			e.preventDefault();

			console.log(document.querySelector(`${e.target.getAttribute("href")}`).offsetTop);

			if(e.target.getAttribute("href") == '#game') {
				if(window.pageYOffset < window.innerHeight) {
					gsap.to(window, {duration: 1, scrollTo: {y: e.target.getAttribute("href"), offsetY: -window.innerHeight / 2}});
				} else {
					gsap.to(window, {duration: 1, scrollTo: {y: e.target.getAttribute("href"), offsetY: window.innerHeight / 2}});
				}
			} else {
				gsap.to(window, {duration: 1, scrollTo: e.target.getAttribute("href")});
			}
			
		});

		window.location.href.substr(0, window.location.href.indexOf('#'));
	});



	let lastScrollTop = window.pageYOffset;
	window.addEventListener('scroll', function(e){
		let st = window.pageYOffset;
		if (st > lastScrollTop){
			document.querySelector('.main__header').classList.add('out');
		} else {
			document.querySelector('.main__header').classList.remove('out');
		}
		lastScrollTop = st;
	});



	document.querySelector('.contact__form').addEventListener('submit', function(e) {
		e.preventDefault();

		const formData = new FormData(this);

		fetch('/mail.php', {
			method: 'POST',
			body: formData,		
		}).then(function(response) {
			return response.text();
		}).then(function(text) {
			e.target.classList.add('success');
			e.target.reset();
			setTimeout(function() {
				e.target.classList.remove('success');
			}, 4000);
		}).catch(function(error) {
			console.log(error);
		});

	});
	






}); // End Document ready



// window load
window.addEventListener("load", function(event) {



	document.querySelectorAll('.lazy').forEach((item) => {
		const src = item.dataset.src;
		item.src = src;
	});



	document.querySelector('.preloader').classList.add('out');

	setTimeout(function() {

		/* ---------- first scene ---------- */

	const scene1 = gsap.timeline({})
	.set('.scene-1 .scene__content', {visibility: 'visible'})
	.from('.scene-1 .logo__part_one img', {duration: 0.5, scaleX: 0, scaleY: 0, transformOrigin: '50% 50%', ease: "back.out(3)"})
	.from('.scene-1 .logo__part_two img', {duration: 0.5, scaleX: 0, scaleY: 0, transformOrigin: '50% 50%', ease: "back.out(3)"}, '-=0.4')
	.from('.scene-1 .house', {duration: 0.5, scaleY: 0, transformOrigin: '50% 100%', ease: "back.out(4)"}, '-=0.2')
	.from('.scene-1 .coins__list li', {duration: 0.1, opacity: 0, ease: "none"}, '-=0.5')
	.from('.scene-1 .coins__list li', {duration: 2, y: '-80%', stagger: 0.05, ease: "elastic.out(2, 0.2)"}, '-=0.5')
	.from('.scene-1 .dog', {duration: 2, scaleY: 0, scaleX: 0, transformOrigin: '50% 100%', ease: "back.out(4)"}, '-=1.8')
	.from('.scene-1 .bird', {duration: 1, scaleX:0, scaleY: 0, x: '50%', y: '50%', transformOrigin: '100% 100%', ease: "back.out(3)"}, '-=1.8')
	.from('.scene-1 .socials li a img', {duration: 0.5, autoAlpha: 0, scaleX: 0, scaleY: 0, transformOrigin: '50% 50%', stagger: 0.1, ease: "back.out(2)"}, '-=2')
	.from('.scene-1 .title', {duration: 0.5, scaleX: 0, scaleY: 0, transformOrigin: '50% 50%', ease: "back.out(2)"}, '-=0.5')
	.from('.scene-1 .subtitle', {duration: 0.5, scaleX: 0, scaleY: 0, transformOrigin: '50% 50%', ease: "back.out(2)", onComplete: function() {
		document.querySelector('html').classList.remove('fix');
		document.querySelector('body').classList.remove('fix');

		const footerMove = gsap.timeline({
		scrollTrigger: {
			trigger: '.main__footer',
			start: 'top bottom-=35%',   
			end: 'bottom top',
			scrub: false,
			pin: false,
			pinSpacing: false,
		}}).from('.main__footer .partners__list', {duration: 1.5, scaleX: 0, scaleY: 0, transformOrigin: '50% 50%', ease: 'power2.out'})
			 .from('.main__footer_content_side.left', {duration: 1.5, scaleX: 0, scaleY: 0, transformOrigin: '50% 50%', ease: 'power2.out'},'-=1.3')
			 .from('.main__footer .title div', {duration: 0.5, scaleX: 0, scaleY: 0, transformOrigin: '50% 50%', stagger: 0.05, ease: "power2.out"}, '-=1.5')
			 .from('.main__footer .socials li a img', {duration: 0.5, autoAlpha: 0, scaleX: 0, scaleY: 0, transformOrigin: '50% 50%', stagger: 0.1, ease: "back.out(2)"}, '-=0.8');
		
	}}, '-=2');
	}, 1200);


	// Parallax


	if(window.innerWidth > 1199) {
		gsap.to(".parallax__bg", {
		scrollTrigger: {
				scrub: true
			}, 
			y: (i, target) => -ScrollTrigger.maxScroll(window) * target.dataset.speed,
			ease: "none"
		});
	}
	





	// Mouse move parallax

function parallaxIt(e, target, movement){
	let touch, relX, relY;
	const $this = document.querySelector('#main');

	relX = e.pageX - $this.offsetLeft;
  relY = e.pageY - $this.offsetTop;

	if(e.touches !== undefined || e.changedTouches !== undefined) {
		touch = e.touches[0] || e.changedTouches[0];

		relX = touch.pageX - $this.offsetLeft;
		relY = touch.pageY - $this.offsetTop;
	}
	
  gsap.to(target, 1, {
    x: (relX - $this.offsetWidth/2) / $this.offsetWidth * movement,
    y: (relY - $this.offsetHeight/2) / $this.offsetHeight * movement,
    ease: "power4.out"
  });
}

function callParallax(e){
  document.querySelectorAll('[data-move]').forEach(item => {
  	const movement = +item.dataset.move;
  	parallaxIt(e, item, movement);
  });
}


if(window.innerWidth > 1199) {
	document.querySelector('#main').addEventListener('mousemove', (e) => {
		callParallax(e);
	});
}


// if(window.innerWidth < 1200) {
// 	document.querySelector('#main').addEventListener('touchmove', (e) => {
// 		callParallax(e);
// 	});
// }




	
}); // end window load


	