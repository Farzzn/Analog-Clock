var sec = 0;
var min = 0;
var hour = 0;
const d = new Date();

setInterval(function(){
    const d = new Date();
    sec = d.getSeconds() * 6;
    min = d.getMinutes() * 6;
    hour = d.getHours() * 30 + Math.round(min/12);

    document.getElementById("sec").style.transform = "rotate("+ sec +"deg)";
    document.getElementById("min").style.transform = "rotate("+ min +"deg)";
    document.getElementById("hour").style.transform = "rotate("+hour+"deg)";
},1000);
