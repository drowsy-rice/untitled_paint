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
        cell.addEventListener("mousemove",() => {
            cell.style.background=selectedColor;
        });
    });
};

makeGrid(32);

var slider= document.getElementById("slider");
document.getElementById("slider").addEventListener("input",(e)=>{
    makeGrid(e.target.value)
});

function changeColor(c){
    selectedColor=c;
}