window.onload = function() {
    console.log('zd3_1_3');
    blocks = document.querySelector("div.blocks");
    blocks.style.border = "1px solid red";
    console.log(blocks);
    console.log(blocks.innerHTML);
    console.log(blocks.outerHTML);

    blocks.innerHTML = "Nowa wartość diva o klasie blocks"; 
    // blocks.outerHTML = "outerHTML";
  }

// Tu był problem bo skrypt wykonywał się za nim wygenerowane zostały wszystkie elementy


// InnerHTML - zmienia tylko zawartość pojemnika
{/* <div class="block" style="background-color: green;">
        <a href="">Start</a>
        <a href="">About</a>
    </div>
    <div class="block">
        <a href="">Service</a>
        <a href="">Portfolio</a>
    </div>
    <div class="block">
        <a href="">Blog</a>
        <a href="">Contact</a>
    </div> */}

// OuterHTML - zmienia równiez poejmnik

{/* <div class="blocks" style="border: 1px solid red;">
            <div class="block" style="background-color: green;">
                <a href="">Start</a>
                <a href="">About</a>
            </div>
            <div class="block">
                <a href="">Service</a>
                <a href="">Portfolio</a>
            </div>
            <div class="block">
                <a href="">Blog</a>
                <a href="">Contact</a>
            </div>
    </div> */}