const title = document.querySelector('.title');

const getDataAnimation = (title) => {
    let dataAnimationValue = title.getAttribute('data-animation');
    alert(dataAnimationValue);
    return dataAnimationValue;
}

getDataAnimation(title);


