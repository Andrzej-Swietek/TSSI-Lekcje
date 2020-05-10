console.log('zd5_1_3');
var xxxx = document.getElementById("home");
// console.log(xxxx.childNodes);
const getTags = (childElements) => {
    var dzieciory = [];
    let tmp = childElements.childNodes;

    for(let i=0; i< tmp.length; i++){
        dzieciory[i] = tmp[i];
    }
    return dzieciory;
}

var y = getTags(xxxx);
console.log(y);