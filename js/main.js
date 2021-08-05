const body = document.querySelector("body");
const burger = document.querySelector(".header__toogle");
const navMenu = document.querySelector(".header__menu");
const fixedLinks = document.querySelector(".fixed");
const navMainLinks = document.querySelectorAll(".header__menu > li > a");
const navMenuLinks = document.querySelectorAll(".header__link");
const menuBg = document.querySelector(".header__row");
// @@EVENTS
burger.addEventListener("click", function (e) {
	const burgerActive = document.querySelector(".header__toogle_active");
	if (burgerActive) {
		burger.classList.remove("header__toogle_active");
		navMenu.classList.remove("header__menu_active");
		menuBg.classList.remove("header__row_active");
		body.classList.remove("_lock");
		fixedLinks.classList.remove("_hide");
	} else {
		burger.classList.add("header__toogle_active");
		navMenu.classList.add("header__menu_active");
		menuBg.classList.add("header__row_active");
		body.classList.add("_lock");
		fixedLinks.classList.add("_hide");
	}
});
navMenuLinks.forEach((menuLink) => {
	menuLink.addEventListener("click", function (e) {
		if (e.target == menuLink) {
			burger.classList.remove("header__toogle_active");
			navMenu.classList.remove("header__menu_active");
			body.classList.remove("_lock");
			menuBg.classList.remove("header__row_active");
			fixedLinks.classList.remove("_hide");
		}
	});
});

// #PRELOADER

const wrapper = document.querySelector(".wrapper");
wrapper.classList.add("wrapper_load");

// #SPOILERS FOOTER
const spoilers = document.querySelectorAll("._spoiler");
const spoilList = document.querySelectorAll("._spoiler + ul");
const listHeights = [...spoilList].map((el) => el.offsetHeight);

function spoilersFunc() {
	if (window.matchMedia("(max-width: 575.98px)").matches) {
		spoilers.forEach((spoiler, i) => {
			spoilList[i].style.cssText = `overflow:hidden;height:0px;transition:0.3s;margin-bottom:0;`;
			spoiler.addEventListener("click", function (e) {
				if (window.innerWidth < 575.98) {
					if (spoiler.classList.contains("_spoiler_active")) {
						spoilList[i].style.cssText = `overflow:hidden;height:0px;transition:0.3s;margin-bottom:0;`;
						spoiler.classList.remove("_spoiler_active");
					} else {
						spoilList[
							i
						].style.cssText = `overflow:hidden;height:${listHeights[i]}px;transition:0.3s;margin-bottom:10px;`;
						spoiler.classList.add("_spoiler_active");
					}
				}
			});
		});
	}
}
spoilersFunc();
window.onresize = function () {
	location.reload();
};

// #SUBMENU

const menuSub = document.querySelectorAll(".header__menu > li > a + .header__submenu");
navMainLinks.forEach((link) => {
	link.addEventListener("click", function (e) {
		e.preventDefault();
		menuSub.forEach((subList) => {
			subList.classList.add("_hide");
		});
		if (this.classList.contains("_active")) {
			this.classList.remove("_active");
			if (this.nextElementSibling && this.nextElementSibling.classList.contains("header__submenu")) {
				this.nextElementSibling.classList.add("_hide");
			}
		} else {
			navMainLinks.forEach((all) => {
				all.classList.remove("_active");
			});
			this.classList.add("_active");
			if (this.nextElementSibling && this.nextElementSibling.classList.contains("header__submenu")) {
				this.nextElementSibling.classList.remove("_hide");
			}
		}
	});
});

// #VIDEO

let videoButton = document.querySelector(".about__play");
if (videoButton) {
	let videoMainScreen = document.querySelector(".about__player");
	let videoPopupBody = document.querySelector(".popup-about");
	let popupPlayer = document.querySelector(".popup-about__player");
	let videoPopupContent = document.querySelector(".popup-about__video");
	videoButton.addEventListener("click", function (e) {
		videoPopupBody.classList.add("_active");
		videoPopupContent.play();
		videoPopupContent.setAttribute("controls", "true");
		videoPopupContent.setAttribute("allowFullScreen", "false");
	});
	let closePopup = document.querySelector(".popup-about__close");
	if (videoPopupBody) {
		videoPopupBody.addEventListener("click", function (e) {
			if (e.target !== videoPopupContent) {
				videoPopupBody.classList.remove("_active");
				videoPopupContent.pause();
			}
		});
	}
}
