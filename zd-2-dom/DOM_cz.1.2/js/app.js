console.log('zd2_1_3');
const tagSearch = document.querySelectorAll('article.first');
console.log('So the type of tagSearch is ' + typeof(tagSearch));
console.log(tagSearch);
// Object a u nas array

for(var i = 0; i < tagSearch.length; i++){
    const h2Search = tagSearch[i].querySelectorAll('h2');
    console.log(h2Search);
    console.log('A jego listą klasy css jest' + h2Search.classList);
    console.log('Bo nie rzeczywiście nie ma zadnych klas przypiasnych h2');

    console.log(h2Search.length);
}


console.log('Koniec App.js');

// Niestety w tym pliku mamy tylko tagSerch więc wiecej zmiennych nie mam do wyświetlania