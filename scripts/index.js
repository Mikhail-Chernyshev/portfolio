// var today = new Date();
// var year = today.getFullYear();
// const footerYear = document.querySelector('.footer__year');
// footerYear.innerHTML = year;

const text = " Mikhail Chernyshev!";
const title = document.querySelector(".wellcome__title_print");
let line = 0;
let count = 0;
let result = "";
function typeLine() {
  let interval = setTimeout(() => {
    result += text[line][count];
    title.innerHTML = result + "|";
    count++;
    if (count >= text[line].length) {
      count = 0;
      line++;
      if (line == text.length) {
        clearTimeout(interval);
        title.innerHTML = result;
        return true;
      } 
    }
    typeLine();
  }, 300);
}
typeLine();

title.addEventListener("click", () => {
  result = " Михаил Чернышев!"; 
  let resultEn = " Mikhail Chernyshev!";
  if (title.textContent === " Mikhail Chernyshev!") {
    title.innerHTML = result;
  } else { title.innerHTML = resultEn}
});

elementsNight = document.querySelectorAll(".night");
const page = document.querySelector(".page");
const buttonTheme = document.querySelector(".header__change-theme");
function changeTheme() {
  elementsNight.forEach((element) => {
    element.classList.toggle("page_theme_dark");
  });
}
buttonTheme.addEventListener("click", () => {
  changeTheme();
  if (buttonTheme.textContent === 'N') {
    buttonTheme.innerHTML = 'D';
  } else {
    buttonTheme.innerHTML = 'N';
  }
});

const goTopBtn = document.querySelector('.footer__up');
function backToTop() {
  if (window.pageYOffset > 0) {
    window.scrollBy(0, -80);
    setTimeout(backToTop, 20);
  }
}
goTopBtn.addEventListener('click', backToTop);