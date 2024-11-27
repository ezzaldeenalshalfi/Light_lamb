// function turn(p) {
//     var onValue = document.getElementById("Light_on"); //on
//     var offValue = document.querySelector("Light_off"); //off


//     if (p == 1) {
//         var rd = document.querySelector("#Lamp_on").style.backgroundColor = onValue;
//         return rd;
//     } else
//         var gra = document.querySelector("#Lamp_off").style.backgroundColor = `${offValue}`;
//     return gra;
// }

//using another way. 
let str = "Hi There it’s " + "\"sunny\"" + " out";
window.alert(str);
window.confirm("The purpose of this assignment is to know the use of (\" and \\).");



function turn(p) {
    var body = document.getElementById("body");

    if (p == 1) {
        body.classList.add("on");
    } else {
        body.classList.remove("on");
    }
}

function askFun() {
    let fun = window.confirm("Do you have fun,when you trurn the light on?");
    if (fun) {
        window.alert("Me too! enjoy your time.");
    } else {
        let reason = window.prompt("Why not?");
        window.alert("Is this " + reason + " The reason that you provide me with");
    }
}


askFun();