const colors = ["green", "red", "rgba(133,122,200)", "#f15025", "white"];
const btn = document.getElementById("btn");

btn.addEventListener('click', function(){
    const randomNumber = getRandonNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    document.getElementById("color").style.color = colors[randomNumber];
    document.getElementById("color").textContent = colors[randomNumber];
});

function getRandonNumber() {
    return Math.floor(Math.random() * colors.length);
}
