const i18Obj = {
  'en': {
    'skills': 'Skills',
    'portfolio': 'Portfolio',
    'video': 'Video',
    'price': 'Price',
    'contacts': 'Contacts',
    'hero-title': 'Alexa Rise',
    'hero-text': 'Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise',
    'hire': 'Hire me',
    'skill-title-1': 'Digital photography',
    'skill-text-1': 'High-quality photos in the studio and on the nature',
    'skill-title-2': 'Video shooting',
    'skill-text-2': 'Capture your moments so that they always stay with you',
    'skill-title-3': 'Rotouch',
    'skill-text-3': 'I strive to make photography surpass reality',
    'skill-title-4': 'Audio',
    'skill-text-4': 'Professional sounds recording for video, advertising, portfolio',
    'winter': 'Winter',
    'spring': 'Spring',
    'summer': 'Summer',
    'autumn': 'Autumn',
    'price-description-1-span-1': 'One location',
    'price-description-1-span-2': '120 photos in color',
    'price-description-1-span-3': '12 photos in retouch',
    'price-description-1-span-4': 'Readiness 2-3 weeks',
    'price-description-1-span-5': 'Make up, visage',
    'price-description-2-span-1': 'One or two locations',
    'price-description-2-span-2': '200 photos in color',
    'price-description-2-span-3': '20 photos in retouch',
    'price-description-2-span-4': 'Readiness 1-2 weeks',
    'price-description-2-span-5': 'Make up, visage',
    'price-description-3-span-1': 'Three locations or more',
    'price-description-3-span-2': '300 photos in color',
    'price-description-3-span-3': '50 photos in retouch',
    'price-description-3-span-4': 'Readiness 1 week',
    'price-description-3-span-5': 'Make up, visage, hairstyle',
    'order': 'Order shooting',
    'contact-me': 'Contact me',
    'send-message': 'Send message'
  },
  'ru': {
    'skills': 'Навыки',
    'portfolio': 'Портфолио',
    'video': 'Видео',
    'price': 'Цены',
    'contacts': 'Контакты',
    'hero-title': 'Алекса Райс',
    'hero-text': 'Сохраните искренние эмоции, романтические переживания и счастливые моменты жизни вместе с профессиональным фотографом',
    'hire': 'Нанять',
    'skill-title-1': 'Фотография',
    'skill-text-1': 'Высококачественные фото в студии и на природе',
    'skill-title-2': 'Видеосъемка',
    'skill-text-2': 'Запечатлите лучшие моменты, чтобы они всегда оставались с вами',
    'skill-title-3': 'Ретушь',
    'skill-text-3': 'Я стремлюсь к тому, чтобы фотография превосходила реальность',
    'skill-title-4': 'Звук',
    'skill-text-4': 'Профессиональная запись звука для видео, рекламы, портфолио',
    'winter': 'Зима',
    'spring': 'Весна',
    'summer': 'Лето',
    'autumn': 'Осень',
    'price-description-1-span-1': 'Одна локация',
    'price-description-1-span-2': '120 цветных фото',
    'price-description-1-span-3': '12 отретушированных фото',
    'price-description-1-span-4': 'Готовность через 2-3 недели',
    'price-description-1-span-5': 'Макияж, визаж',
    'price-description-2-span-1': 'Одна-две локации',
    'price-description-2-span-2': '200 цветных фото',
    'price-description-2-span-3': '20 отретушированных фото',
    'price-description-2-span-4': 'Готовность через 1-2 недели',
    'price-description-2-span-5': 'Макияж, визаж',
    'price-description-3-span-1': 'Три локации и больше',
    'price-description-3-span-2': '300 цветных фото',
    'price-description-3-span-3': '50 отретушированных фото',
    'price-description-3-span-4': 'Готовность через 1 неделю',
    'price-description-3-span-5': 'Макияж, визаж, прическа',
    'order': 'Заказать съёмку',
    'contact-me': 'Свяжитесь со мной',
    'send-message': 'Отправить'
  }
}
console.log(
"Самооценка: 75/85\n1. Смена изображений в секции portfolio (25)\n2. Перевод страницы на два языка (25)\n3. Переключение светлой и тёмной темы (25)"
)

//SHOW ADAPTIVE MENU

const burger = document.querySelector('.burger');
burger.addEventListener('click', burgerToCross);
function burgerToCross() {
  burger.classList.toggle('open');
}
const nav = document.querySelector('.nav');
burger.addEventListener('click', showMenu);
function showMenu() {
  nav.classList.toggle('open');
}
const link = document.querySelectorAll('.menu-item');
link.forEach((el) => el.addEventListener('click', linkClick));
function linkClick() {
  nav.classList.remove('open');
  burger.classList.remove('open');
}

//CHANGE PHOTOS IN PORTFOLIO SECTION

const portBtn = document.querySelector('.port-btn');
const photos = document.querySelectorAll('.photo');
const blockButtons = document.querySelector('.block-buttons');
blockButtons.addEventListener('click', changePhotos);
function changePhotos(event) {
  if(event.target.classList.contains('port-btn')) {
    const folder = event.target.dataset.photos;
    photos.forEach((img, index) => img.src = `./assets/img/${folder}/${index + 1}.jpg`);
  }
}

// CHANGE ACTIVE PORTFOLIO BUTTON STYLE

const portBtns = document.querySelectorAll('.port-btn');
portBtns.forEach((el) => el.addEventListener('click', changeClassActive));
function changeClassActive(event) {
  portBtns.forEach((el) => el.classList.remove('active'));
  event.target.classList.add('active');
}

// CHANGE THEME

const theme = document.querySelector('.theme-switch');
const lines = document.querySelectorAll('.decoration-line');
const elementsArray = document.querySelectorAll('.container, .title');
theme.addEventListener('click', changeTheme);
function changeTheme() {
  theme.classList.toggle('light-theme-icon');
  elementsArray.forEach((el) => el.classList.toggle('light-theme'));
  portBtns.forEach((el) => el.classList.toggle('btns-light-theme'));
  lines.forEach((el) => el.classList.toggle('lines-light-theme'));
  nav.classList.toggle('nav-light-theme');
  link.forEach((el) => el.classList.toggle('menu-light-theme'));
  burger.classList.toggle('light');
}

// CHANGE LANGUAGE

const ru = document.querySelector('.lang-ru');
const en = document.querySelector('.lang-en');
function changeLang (lang) {
  const string = document.querySelectorAll('[data-i18n]');
  string.forEach((el) => el.textContent = i18Obj[lang][el.dataset.i18n]);
}
ru.addEventListener('click', () => {
  changeLang("ru");
  ru.classList.add('active');
  en.classList.remove('active');
});
en.addEventListener('click', () => {
  changeLang("en");
  en.classList.toggle('active');
  ru.classList.remove('active');
});
