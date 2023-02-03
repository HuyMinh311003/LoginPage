function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}
let random = getRndInteger(1,100);
let input;
do {
    input = parseInt(prompt("Moi ban doan so, pham vi tu 1 toi 100"));
    if(input < random){
        alert("Ban can so lon hon");
    }
    else if(input > random){
        alert("Ban can so nho hon");
    }
    else{
        alert("CHUC MUNG BAN DA DOAN DUNG !!");
        console.log("Ket qua la " + random);
    }
} while (input !== random);