console.log('zd7_1_3');
const nav_zad7 = document.querySelectorAll('nav li');


const setDataDirection = (elements) => {
    elements.forEach(element => {
        element.dataset.direction = "top";
    });
}
setDataDirection(nav_zad7);