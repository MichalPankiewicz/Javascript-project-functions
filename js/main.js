// zadanie 1

let buitentemperatuur

function checkTemperatuur(temperatuur) {
    if (temperatuur < 10) {
        alert("het is koud")
    }
    else if (temperatuur < 16) {
        document.body.innerHTML += "<p>het is niet warm, drag een jas aan</p>" 
    }
    else if (temperatuur < 24) {
        document.body.innerHTML += "<p>het is niet koud, maar ook niet warm</p>"
    }    
    else if (temperatuur > 24) {
        document.body.innerHTML += "<p>je moet niet vaandag een jas dragen</p>" 
    }
    else if (temperatuur > 30) {
        document.body.innerHTML += "<p>het is beter als je wat zonnebrandolie insmeert</p>" 
    }
}

buitentemperatuur = 18
checkTemperatuur(buitentemperatuur)
buitentemperatuur = 32
checkTemperatuur(buitentemperatuur)
buitentemperatuur = 12
checkTemperatuur(buitentemperatuur)
buitentemperatuur = 26
checkTemperatuur(buitentemperatuur)

// zadanie 2




// zadanie 3
function isEven(value){
    return value % 2 === 0;
}


document.body.innerHTML += isEven(7) + "<br>"
document.body.innerHTML += isEven(12) + "<br>"
document.body.innerHTML += isEven(5) + "<br>"
document.body.innerHTML += isEven(10) + "<br>"