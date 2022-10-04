const text = " Mikhail Chernyshev!";
const title = document.querySelector('.wellcome__title_print')

let line = 0;
let count = 0;
let result = '';

function typeLine() {
    let interval = setTimeout(
    () => {
    result += text[line][count]
    title.innerHTML = result +'|';
    count++;
    if (count >= text[line].length) {
        count = 0;
        line++;
if (line == text.length) {
    clearTimeout(interval);
    title.innerHTML =result;
    return true;
  }
}
typeLine();
    }, 300)
  }
typeLine();
title.addEventListener('click', () => {
  result = ' Михаил Чернышев!';
  title.innerHTML = result;
})