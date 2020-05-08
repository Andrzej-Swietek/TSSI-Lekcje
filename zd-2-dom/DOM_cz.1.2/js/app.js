const tagSearch = document.querySelectorAll('article.first');
console.log(tagSearch);

for(var i = 0; i < tagSearch.length; i++){
    const h1Search = tagSearch[i].querySelectorAll('h1');
    console.log(h1Search.length);
}