console.log('zd6_1_3');

var xx = document.querySelector('div.ban');

// console.log(xx.classList);
    
const getClassInfo = (banner) => {
    var tmp = banner.classList;
    console.log(tmp.length);
    var arr = [];
    for(let i=0; i< tmp.length; i++){
        arr[i] = tmp[i];
    }

    return arr;
}





y = getClassInfo(xx);
console.log(y);