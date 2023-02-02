function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}
let random = getRndInteger(1,100);
let input;
do {
    input = parseInt(prompt("Doan di em"));
    if(input < random){
        alert("May can so lon hon, MAY NGU");
    }
    else if(input > random){
        alert("May can so nho hon, MAY NGU");
    }
    else{
        alert("Dung roi, MAY GAY");
        console.log("Ket qua la " + random);
    }
} while (input !== random);