// var today = new Date();
// var year = today.getFullYear();
// const footerYear = document.querySelector('.footer__year');
// footerYear.innerHTML = year;

const text = ' Mikhail Chernyshev!';
const title = document.querySelector('.wellcome__title_print');
let line = 0;
let count = 0;
let result = '';
function typeLine() {
  let interval = setTimeout(() => {
    result += text[line][count];
    title.innerHTML = result + '|';
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

title.addEventListener('click', () => {
  result = ' Михаил Чернышев!';
  let resultEn = ' Mikhail Chernyshev!';
  if (title.textContent === ' Mikhail Chernyshev!') {
    title.innerHTML = result;
  } else {
    title.innerHTML = resultEn;
  }
});

elementsNight = document.querySelectorAll('.night');
const page = document.querySelector('.page');
const buttonTheme = document.querySelector('.header__change-theme');
function changeTheme() {
  elementsNight.forEach((element) => {
    element.classList.toggle('page_theme_dark');
  });
}
buttonTheme.addEventListener('click', () => {
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
const say = (text) => {
  console.log(text);
};

function midtownNav(start, end) {
  //нам понадобится выяснить номер начала авеню
  //номер начальной улицы
  //префикс начальной улицы
  //все тоже самое с точкой назначения
  let regexForNumberInString = /\d+/g;
  let startAv = start.replace(/(^\d+)(.+$)/i, '$1');
  console.log(startAv);
  let startStFull = start.replace(new RegExp('(.*?and).*'), '$1');
  startStFull = start.replace(startStFull, '');
  console.log(startStFull);
  let startStPref = startStFull[1];
  console.log(startStPref);
  let startStNumber = startStFull.match(regexForNumberInString);
  startStNumber = startStNumber[0];
  console.log(startStNumber);
  let endAv = end.replace(/(^\d+)(.+$)/i, '$1');
  console.log(endAv);
  let endStFull = end.replace(new RegExp('(.*?and).*'), '$1');
  endStFull = end.replace(endStFull, '');
  console.log(endStFull);
  let endStPref = endStFull[1];
  console.log(endStPref);
  let endStNumber = endStFull.match(regexForNumberInString);
  endStNumber = endStNumber[0];
  console.log(endStNumber);
  let blocks1 = startStNumber - endStNumber;
  const returnPositiveNumber = (blocks) => {
    if (blocks > 0) {
      return;
    } else {
      return Math.abs(blocks);
    }
  };
  let soutnOrNorth = blocks1 > 0 ? 'south' : 'north';
  blocks1 =
    blocks1 > 0
      ? `${blocks1} blocks ${soutnOrNorth}`
      : `${returnPositiveNumber(blocks1)} blocks north`;
  console.log(blocks1);
  let blocks2 = startAv - endAv;
  let eastOrWest = blocks2 > 0 ? 'east' : 'west';

  blocks2 =
    blocks2 > 0
      ? `${blocks2} blocks ${eastOrWest}`
      : `${returnPositiveNumber(blocks2)} blocks west`;
  console.log(blocks2);
  return `Walk ${blocks1}, and ${blocks2}`;
}
console.log(midtownNav('8th Ave and W 38th St', '7th Ave and W 36th St'));
