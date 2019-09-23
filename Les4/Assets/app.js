let Grade = 8;

if (Grade < 6) {
    console.log("Onvoldoende");
} else if (Grade >= 6 && Grade < 7) {
    console.log("Voldoende");
} else if (Grade >= 7 && Grade < 9) {
    console.log("Goed");
} else if (Grade >= 9 && Grade <= 10) {
    console.log("Uitmuntend");
}



switch (Grade) {
    case (Grade >= 9 && Grade < 10):
        console.log("Uitmuntend");
        break;
    case (Grade >= 7 && Grade < 9):
        console.log("Goed");
        break;
    case (Grade >= 6 && Grade < 7):
        console.log("Voldoende");
        break;
    case (Grade < 6):
        console.log("Onvoldoende");
        break;
    default:
        console.log("Deze ken ik niet")
        break;
}



let purchasedBook = true;
let job = "teacher";
let inTrain = true;

if(purchasedBook == true && job == "teacher" && inTrain == true){
    console.log("Je kan eindelijk je boek lezen.");
}  if(purchasedBook == false){
    console.log("Je hebt het boek niet gekocht.")
} if(job !== "teacher"){
    console.log("Je bent geen leraar.")
} if(inTrain == false){
    console.log("Je bent niet in de trein.")
}