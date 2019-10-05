const lapRounds = [2.99, 3.00, 3.01, 4.01, 2.79, 2.88, 3.10, 4.12];

function random() {
    let random = Math.floor(Math.random() * lapRounds.length);
    console.log(lapRounds[random])
}
random();



const allMyRecords = [
    ["The Who - Pinball Wizard", "Rolling Stones - Exile on main street", "Police - Message in a bottle"],
    ["De Dijk - Alle 40 Goed", "Het Goede Doel - Belgie", "Doe Maar - skunk"]
];

for (let i = 0; i < allMyRecords.length; i++) {
    for (let j = 0; j < allMyRecords[i].length; j++) {
        console.table(allMyRecords[i][j]);
    }
}


// De filter functie werkt fijner omdat het veel korter en overzichtelijker is
function filter(value) {
    return value <= 4;
}

console.log(lapRounds.filter(filter));
