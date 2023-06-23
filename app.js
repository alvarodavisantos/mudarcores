//const colors = ["green", "red", "rgba(133,122,200)", "#f15025", "white"];
const colors = [
  "green",
  "red",
  "rgba(133,122,200,0.8)",
  "#f15025",
  "white",
  "blue",
  "yellow",
  "pink",
  "#aabbcc",
  "purple",
  "orange",
  "rgba(255,0,0,0.5)",
  "cyan",
  "magenta",
  "#ff6600",
  "black",
  "brown",
  "rgba(0,255,255,0.7)",
  "#912c8f",
  "gold",
  "rgba(128,128,128,0.3)",
  "#9932cc",
  "teal",
  "rgba(255,165,0,0.6)",
  "#00ffff",
  "silver",
  "maroon",
  "#006400",
  "navy",
  "rgba(255,255,0,0.4)"
];

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
