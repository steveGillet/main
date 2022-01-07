'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// node list has forEach
btnsOpenModal.forEach(btn => btn.addEventListener(`click`, openModal));

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

const btnScrollTo = document.querySelector(`.btn--scroll-to`);
const section1 = document.querySelector(`#section--1`);

btnScrollTo.addEventListener(`click`, function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect());

  console.log(`Current scroll(X/Y): `, window.pageXOffset, window.pageYOffset);

  console.log(
    `height/width viewport`,
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  //Scrolling

  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );

  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: `smooth`,
  // });
  // dimensions exclude scroll bars

  // modern
  section1.scrollIntoView({ behavior: `smooth` });
});

// // Page Navigation Event Delegation

// document.querySelectorAll(`.nav__link`).forEach(function (ele) {
//   ele.addEventListener(`click`, function (eve) {
//     eve.preventDefault();
//     const id = this.getAttribute(`href`);
//     console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: `smooth` });
//   });
// });

// add event listener to common parent lement
// determine what element originated the event

document.querySelector(`.nav__links`).addEventListener(`click`, function (eve) {
  eve.preventDefault();

  // matching strategy
  if (eve.target.classList.contains(`nav__link`)) {
    const id = eve.target.getAttribute(`href`);
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: `smooth` });
  }
});

////////////////////////////////////////////////////////////

// DOM Traversing

const h1 = document.querySelector(`h1`);

// going downwards, chilcdren

console.log(h1.querySelectorAll(`.highlight`));
console.log(h1.childNodes);
// child elements
console.log(h1.children);
h1.firstElementChild.style.color = `green`;
h1.lastElementChild.style.color = `yellow`;

// going upwards, parents
console.log(h1.parentNode);
console.log(h1.parentElement);

h1.closest(`.header`).style.background = `var(--gradient-primary)`;
h1.closest(`h1`).style.background = `var(--gradient-primary)`;

// going sideways, siblings

console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);

// finding all siblings by getting children of parents

console.log(h1.parentElement.children);
[...h1.parentElement.children].forEach(function (ele) {
  if (ele !== h1) ele.style.transform = `scale(0.75)`;
});

////////////////////////////////////////////////////////////
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

// const header = document.querySelector(`.header`);
// const sections = document.querySelectorAll(`.section`);
// console.log(sections);

// document.getElementById(`section--1`);
// const buttonsAll = document.getElementsByTagName(`button`);
// console.log(buttonsAll);

// // node lists dont update

// console.log(document.getElementsByClassName(`btn`));

// // creating and inserting elements
// // .insertAdjacentHTML

// const message = document.createElement(`div`);
// message.classList.add(`cookie-message`);
// // message.textContent = `Allow us to use cookies for better performance.`;
// message.innerHTML = `Cookies are good for you and me. Do it. Eat cookie. <button class="btn btn--close-cookie">Cookie!</button>`;

// // header.prepend(message);
// // header.append(message);
// // true = all child elements also cloned
// // header.append(message.cloneNode(true));
// // header.before(message);
// header.after(message);

// // Delete elements
// document
//   .querySelector(`.btn--close-cookie`)
//   .addEventListener(`click`, function () {
//     message.remove();
//     // old way had to remove children
//     // message.parentElement.removeChild(message);
//   });

// // Styles
// // inline styles, styles set directly in the dom
// message.style.backgroundColor = `#37383d`;
// message.style.width = `120%`;

// // only works for styles we set ourselves (inline styles)
// console.log(message.style.height);
// console.log(message.style.width);

// console.log(getComputedStyle(message));
// console.log(getComputedStyle(message).color);
// console.log(getComputedStyle(message).height);

// message.style.height =
//   Number.parseFloat(getComputedStyle(message).height, 10) + 20 + 'px';

// // css custom properties/css variables
// // can use on all properties
// document.documentElement.style.setProperty(`--color-primary`, `orange`);

// // Attributes

// const logo = document.querySelector(`.nav__logo`);
// console.log(logo.src);
// console.log(logo.className);

// logo.alt = `Average Logo`;
// console.log(logo.alt);

// // doesn't work, only works on standard
// console.log(logo.designer);
// console.log(logo.getAttribute(`designer`));
// logo.setAttribute(`company`, `Bankist`);

// // absolute link
// console.log(logo.src);
// // relative link
// console.log(logo.getAttribute(`src`));

// const link = document.querySelector(`.twitter-link`);
// console.log(link.href);
// console.log(link.getAttribute(`href`));

// const link2 = document.querySelector(`.nav__link--btn`);
// console.log(link2.href);
// console.log(link2.getAttribute(`href`));

// // Data attributes
// console.log(logo.dataset.versionNumber);

// // Classes
// logo.classList.add(`a`);
// logo.classList.remove(`b`);
// logo.classList.toggle(`c`);
// logo.classList.contains(`d`);
// console.log(logo);

// // don't use, will override existing classes and only one class
// // logo.className = `steve`;

// const h1 = document.querySelector(`h1`);

// const hAlert = function (e) {
//   alert(`addEventListener: nice heading bro`);
//   // h1.removeEventListener(`mouseenter`, hAlert);
// };

// h1.addEventListener(`mouseenter`, hAlert);

// setTimeout(() => h1.removeEventListener(`mouseenter`, hAlert), 3000);

// // h1.onmouseenter = function (e) {
// //   alert(`addEventListener: nice heading bro`);
// // };

// // can use multiple listeners on one event if you use addEventListener

// // Event Propogation

// // randomcolor rgb(255,255,255)
// const randomInt = (min, max) => Math.round(Math.random() * (max - min) + min);
// const randomColor = () =>
//   `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;
// console.log(randomColor());

// // add event listener only listening for bubbling phase, not capturing phase
// document.querySelector(`.nav__link`).addEventListener(`click`, function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log(`link`, e.target, e.currentTarget);
//   console.log(e.currentTarget === this);

//   // stop progagation
//   // e.stopPropagation();
// });
// document.querySelector(`.nav__links`).addEventListener(`click`, function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log(`container`, e.target);
// });
// // setting third argument to true makes event listener work on capturing phase
// document.querySelector(`.nav`).addEventListener(
//   `click`,
//   function (e) {
//     this.style.backgroundColor = randomColor();
//     console.log(`nav`, e.target);
//   },
//   true
// );
