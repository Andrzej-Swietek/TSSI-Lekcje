console.log('zd1_1_3');
const li_other = document.querySelectorAll("li");
// console.log(li_other)

const getDatasInfo = (links) => {
    let array = [];
    for(i=0;i < links.length; i++){
        array.push(links[i].dataset);
    } 
    return array;
}

// Poniewaz mozemy nie wiedziec ile i jakie sa nasze datasety to zostawiamy lub jeden li moze miec ich wiecej to w postaci tablic 
let wynik = getDatasInfo(li_other);
console.log(wynik)