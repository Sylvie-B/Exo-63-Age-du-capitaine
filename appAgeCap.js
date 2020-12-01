let txt = document.getElementById("age");

for (let nbr = 1; nbr < 100 ; nbr++){
    txt.innerHTML += "le capitaine a " + nbr + "ans";
    if (nbr < 18){
        txt.innerHTML += ", le capitaine est jeune" + "<br>";
    }
    else if (nbr < 50){
        txt.innerHTML += ", le capitaine n'est pas très vieux" + "<br>";
    }
    else {
        txt.innerHTML += ", le capitaine est vieux" + "<br>";
    }
}
