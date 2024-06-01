// Импорт функционала ==============================================================================================================================================================================================================================================================================================================================
// import { off } from "svg-sprite";
// import { isMobile } from "./functions.js";
// import { removeClasses } from "./functions.js";
// import { formsModules } from "./forms/forms.js";




const menuIcon = document.querySelector('.icon-menu');
const navBar = document.querySelector('.navbar');



menuIcon.onclick = () => {
	menuIcon.classList.toggle('_active');
	navBar.classList.toggle('active');
}





const sectioons = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
	sectioons.forEach(sec =>{
		let top = window.scrollY;
		let offset = sec.offsetTop - 150;
		let height = sec.offsetHeight;
		let id = sec.getAttribute('id');

		if(top > offset && top < offset + height) {
			navLinks.forEach(links =>{
				links.classList.remove('active');
				document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
			});
		}
	});





	const header = document.querySelector('header');
	header.classList.toggle('sticky', window.scrollY > 100);

	menuIcon.classList.remove('_active');
	navBar.classList.remove('active');
}





ScrollReveal({
	reset: true,
	distance: '100px',
	duration: 2000,
	delay: 100
});

ScrollReveal().reveal('.home-content, .heading', {origin: 'top'});
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', {origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img', {origin: 'left'});
ScrollReveal().reveal('.home-content p, .about-content', {origin: 'right'});







const typed = new Typed('.multiple-text', {
	strings: ['Frontend Developer', 'YouTuber', 'Blogger'],
	loop: true,
	typeSpeed: 100,
	backSpeed: 100,
	backDelay: 1000
})



let a =233