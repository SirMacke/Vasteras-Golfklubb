var nyheter = document.getElementById('nyheter').clientHeight;
var brev = document.getElementById('brev').clientHeight;
var socialaMedier = document.getElementById('sociala-medier').clientHeight;
var footer = document.getElementById('footer').clientHeight;

var svartAside = document.getElementById('svart-aside');
var img = document.getElementById('background');

svartAside.style.height = nyheter + brev + socialaMedier + footer + 'px';
img.style.height = nyheter + brev + socialaMedier + footer + 'px';

console.log('test')
