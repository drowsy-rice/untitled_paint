var selectedColor=document.getElementById("selectedColor").value

function makeGrid(e){
    var grid=document.getElementById('grid');
    grid.innerHTML = "";
        grid.style.setProperty("grid-template-columns",'repeat('+e+',1fr)');
        grid.style.setProperty("grid-template-rows",'repeat('+e+',1fr)');
        for (let j=0; j<(e*e); j++){
            var cell=document.createElement('div');
            cell.className="cell";
            grid.appendChild(cell)
        }   
   
    const item=document.querySelectorAll(".cell");
    item.forEach((cell) => {
        cell.addEventListener("mouseover",() => {
            if (mouseDown){
                cell.style.background=selectedColor;
        }});
    });
};

window.addEventListener('mousedown',()=>{
    mouseDown=true;
});

window.addEventListener('mouseup',()=>{
    mouseDown=false;
});


makeGrid(32);

var slider= document.getElementById("slider");
document.getElementById("slider").addEventListener("input",(e)=>{
    makeGrid(e.target.value)
});

function changeColor(c){
    selectedColor=c;
}

var classic=document.getElementById("classic");
var primaries=document.getElementById("primaries");
var nick=document.getElementById("nick");
var kitty=document.getElementById("kitty");
var batman=document.getElementById("batman");

classic.addEventListener("click", function(e){
    document.querySelector("body").style.backgroundImage='url(paint_photos/windowsbg' + '.jpg)';
    document.getElementsByClassName("window")[0].style.backgroundColor="#bdbdbd";
    document.getElementsByClassName("header")[0].style.backgroundColor="#00027c";
    document.getElementsByClassName("header")[0].style.backgroundImage="";
    document.getElementsByClassName("title")[0].style.color="white";
    document.getElementsByClassName("midsection")[0].style.backgroundColor="#2c2c2c";
    document.getElementsByClassName("midsection")[0].style.backgroundImage="";
    document.getElementsByClassName("options")[0].style.backgroundColor="#bdbdbd";
    document.getElementsByClassName("options")[0].style.backgroundImage="";
    document.getElementsByClassName("footer")[0].style.backgroundColor="#2c2c2c";
    document.getElementsByClassName("footer")[0].style.backgroundImage="";
    document.getElementsByClassName("resize")[0].style.backgroundColor="#bdbdbd";
    document.getElementsByClassName("paint")[0].style.backgroundColor="#bdbdbd";
})

primaries.addEventListener("click", function(e){
    document.querySelector("body").style.backgroundImage='url(paint_photos/movingprimaries' + '.gif)';
    document.getElementsByClassName("window")[0].style.backgroundColor="#fffeea";
    document.getElementsByClassName("header")[0].style.backgroundColor="#2860f4";
    document.getElementsByClassName("header")[0].style.backgroundImage="";
    document.getElementsByClassName("title")[0].style.color="#ffc300";
    document.getElementsByClassName("midsection")[0].style.backgroundColor="#ff3e3e";
    document.getElementsByClassName("midsection")[0].style.backgroundImage="";
    document.getElementsByClassName("options")[0].style.backgroundColor="#FFC300";
    document.getElementsByClassName("options")[0].style.backgroundImage="";
    document.getElementsByClassName("footer")[0].style.backgroundColor="#2860f4";
    document.getElementsByClassName("footer")[0].style.backgroundImage="";
    document.getElementsByClassName("resize")[0].style.backgroundColor="#FFC300";
    document.getElementsByClassName("paint")[0].style.backgroundColor="#FFC300";
})

nick.addEventListener("click", function(e){
    document.querySelector("body").style.backgroundImage='url(paint_photos/movingnick' + '.jpg)';
    document.getElementsByClassName("window")[0].style.backgroundColor="#ec610a";
    document.getElementsByClassName("header")[0].style.backgroundImage='url(paint_photos/slime' + '.png)';
    document.getElementsByClassName("title")[0].style.color="#ffc300";
    document.getElementsByClassName("midsection")[0].style.backgroundColor="#ec610a";
    document.getElementsByClassName("midsection")[0].style.backgroundImage="";
    document.getElementsByClassName("options")[0].style.backgroundImage='url(paint_photos/slime' + '.png)';
    document.getElementsByClassName("footer")[0].style.backgroundImage='url(paint_photos/slime' + '.png)';
    document.getElementsByClassName("resize")[0].style.backgroundColor="#FFC300";
    document.getElementsByClassName("paint")[0].style.backgroundColor="#FFC300";
})

kitty.addEventListener("click", function(e){
    document.querySelector("body").style.backgroundImage='url(paint_photos/movingcutekitty' + '.gif)';
    document.getElementsByClassName("window")[0].style.backgroundColor="lightblue";
    document.getElementsByClassName("header")[0].style.backgroundColor="pink";
    document.getElementsByClassName("header")[0].style.backgroundImage="";
    document.getElementsByClassName("title")[0].style.color="white";
    document.getElementsByClassName("midsection")[0].style.backgroundImage='url(paint_photos/movingkitty' + '.gif)';
    document.getElementsByClassName("options")[0].style.backgroundColor="pink";
    document.getElementsByClassName("options")[0].style.backgroundImage="";
    document.getElementsByClassName("footer")[0].style.backgroundColor="pink";
    document.getElementsByClassName("footer")[0].style.backgroundImage="";
    document.getElementsByClassName("resize")[0].style.backgroundColor="lightblue";
    document.getElementsByClassName("resize")[0].style.backgroundImage="";
    document.getElementsByClassName("paint")[0].style.backgroundColor="lightblue";
})

batman.addEventListener("click", function(e){
    document.querySelector("body").style.backgroundImage='url(paint_photos/movingbatmantile' + '.gif)';
    document.getElementsByClassName("window")[0].style.backgroundColor="black";
    document.getElementsByClassName("header")[0].style.backgroundColor="#0e5cad";
    document.getElementsByClassName("header")[0].style.backgroundImage="";
    document.getElementsByClassName("title")[0].style.color="#eed500";
    document.getElementsByClassName("midsection")[0].style.backgroundImage='url(paint_photos/movingcutebatman' + '.gif)';
    document.getElementsByClassName("options")[0].style.backgroundColor="#eed500";
    document.getElementsByClassName("options")[0].style.backgroundImage="";
    document.getElementsByClassName("footer")[0].style.backgroundColor="black";
    document.getElementsByClassName("footer")[0].style.backgroundImage='url(paint_photos/movingcutebatman' + '.gif)';;
    document.getElementsByClassName("resize")[0].style.backgroundColor="#eed500";
    document.getElementsByClassName("paint")[0].style.backgroundColor="#eed500";
})

function minmessage(){
    alert("oh? you're just saving me for later? alright, i'll be wating...")
}

function maxmessage(){
    alert("this is as big as it gets .................................................................................................................................. that's what she said huehuehue")
}

function closemessage(){
    alert("i see how it is, microsoft paint isn't enough for you anymore, is that it?? go ahead, enjoy your twitch.tv or whatever...")
}