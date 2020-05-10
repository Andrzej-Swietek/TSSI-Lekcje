// kolorki zmieniam zeby sprawdzic czy dobrze złapałem element
const home1 = document.getElementById("home");
const home2 = document.querySelector("#home");

const li = document.querySelector('li[data-direction]');
console.log('Li z atrybutem data-direction zaraz poniej w consol logu')
console.log(li);

// Pierwszy element o klasie block 
const blockClass = document.querySelector(".block");
console.log('Pierwszy element o klasie block console logu')
console.log(blockClass);

home1.style.backgroundColor = "#ABAABB";
home2.style.backgroundColor = "#babbaa"; // poniewaz kolorek sie zmienia po odkomentowaniu linu znaczyz ze dziala
li.style.backgroundColor = "yellow";
blockClass.style.backgroundColor = "green";