
function info(){
    document.getElementById("btn-info").style.display="none";
    document.getElementById("btn-regresar").style.display="inline";
    document.getElementById("stats").style.display="inline";
    document.getElementById("info-schumacher").style.display="none";
    document.getElementById("schumacher").src="sf.jpg";
}

function regresar(){
    document.getElementById("btn-info").style.display="inline";
    document.getElementById("btn-regresar").style.display="none";
    document.getElementById("info-schumacher").style.display="inline-block";
    document.getElementById("schumacher").src="michael.jpeg";
    document.getElementById("stats").style.display="none";
}