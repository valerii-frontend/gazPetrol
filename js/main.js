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
	link.addEventListener("mouseover", function (e) {
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

let videoButton = document.querySelector(".player__play");
if (videoButton) {
	let videoMainScreen = document.querySelector(".player");
	let videoPopupBody = document.querySelector(".popup");
	let popupPlayer = document.querySelector(".popup__player");
	let videoPopupContent = document.querySelector(".popup__video");
	videoButton.addEventListener("click", function (e) {
		videoPopupBody.classList.add("_active");
		videoPopupContent.play();
		videoPopupContent.setAttribute("controls", "true");
		videoPopupContent.setAttribute("allowFullScreen", "false");
	});
	let closePopup = document.querySelector(".popup__close");
	if (videoPopupBody) {
		videoPopupBody.addEventListener("click", function (e) {
			if (e.target !== videoPopupContent) {
				videoPopupBody.classList.remove("_active");
				videoPopupContent.pause();
			}
		});
	}
}

// #SPOILER ADVISERS
const adviserSpoilers = document.querySelectorAll(".adviser__title");
const adviserContents = document.querySelectorAll(".adviser__title + .adviser__row");
const adviserlistHeights = [...adviserContents].map((el) => el.offsetHeight);

function adviserSpoilersFunc() {
	adviserSpoilers.forEach((spoiler, i) => {
		adviserContents[i].style.cssText = `overflow:hidden;height:0px;transition:0.3s;`;
		spoiler.addEventListener("click", function (e) {
			if (spoiler.classList.contains("adviser__title_active")) {
				adviserContents[i].style.cssText = `overflow:hidden;height:0px;transition:0.3s;`;
				spoiler.classList.remove("adviser__title_active");
			} else {
				adviserContents[i].style.cssText = `overflow:hidden;height:${adviserlistHeights[i]}px;transition:0.3s;`;
				spoiler.classList.add("adviser__title_active");
			}
		});
	});
}
adviserSpoilersFunc();
console.log(adviserContents[1].offsetHeight);
