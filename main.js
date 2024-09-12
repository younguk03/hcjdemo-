document.getElementById('time').innerHTML = new Date().toLocaleString();

function pink() {
   document.body.style.backgroundColor = 'pink';
}
function yellow() {
   document.body.style.backgroundColor = 'yellow';
}
function lightblue() {
   document.body.style.backgroundColor = 'lightblue';
}
function reset() {
   document.body.style.backgroundColor = 'linen';
}

function showhtml() {
   document.getElementById('fig').src='img/html5.jpg';
   document.getElementById('desc').innerHTML='<b>HTML</b>은 구조적 웹문서를 작성하는데 사용하는 마크업 언어다.';
}
function showcss() {
   document.getElementById('fig').src='img/css3.jpg';
   document.getElementById('desc').innerHTML='<b>CSS</b>은 HTML 문서 스타일을 지정하기 위한 언어다.';
}
function showjs() {
   document.getElementById('fig').src='img/javascript.jpg';
   document.getElementById('desc').innerHTML='<b>Javascript</b>은 웹을 위한 프로그래밍 언어이며 웹 문서에 동작을 실행할 수 있게 한다.';
}

function hide() {
   document.getElementById('fig').src = '';
   document.getElementById('desc').innerHTML = '';
}