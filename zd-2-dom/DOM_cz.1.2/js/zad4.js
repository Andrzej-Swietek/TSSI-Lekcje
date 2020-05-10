//  Cały nasz artykół o klasie first jest fioletowy
const tag = document.querySelector("article.first");
tag.style.backgroundColor = "purple" 

console.log(tag);

const hjedynki = tag.getElementsByTagName("H1");
console.log('h1 w tym artykule mamy dokładnie: ' + hjedynki.length + ' za to jestli chodziło o h2 to jest ich więcej bo: '+ tag.getElementsByTagName("H2").length);
