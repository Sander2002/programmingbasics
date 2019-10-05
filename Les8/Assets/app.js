const me = {
    name: "Sander",
    age: "17",
    previousDiploma: "Havo",
    favoriteVehicle: {
        sort: "auto",
        brand: "Ford",
        model: "Mustang",
        color: "Rood",
        wheels: 4
    },
    vehicle: function () {
        return `Mijn favoriete vervoersmiddel is een ${this.favoriteVehicle.brand} ${this.favoriteVehicle.model} en heeft ${this.favoriteVehicle.wheels} wielen.`;
    },
    petNames: ["Joop", "Jaap", "Fred", "Evi", "Kiki"],
    petList: function () {
        this.petNames.forEach(function (value) {
            console.log(value);
        })
    }
};

// console.log(me.vehicle());
// me.petList();




//Huiswerk


const lapRounds = [
    { 0: 55.99 },
    { 1: 63.00 },
    { 2: 63.01 },
    { 3: 54.01 },
    { 4: 62.79 },
    { 5: 52.88 },
    { 6: 53.10 },
    { 7: 54.12 }
]

const teachers = [
    {
        name: "Loek",
        profession: "Teacher",
        brand: "Linux",
        hoursPerWeek: 30,
        salary: 800
    },
    {
        name: "Daan",
        profession: "Teacher",
        brand: "Arduino",
        hoursPerWeek: 35,
        salary: 900
    },
    {
        name: "Rimmert",
        profession: "Teacher",
        brand: "Apple",
        hoursPerWeek: 40,
        salary: 1000
    }
]


for (let i = 0; i < teachers.length; i++) {
    console.log(`I have a ${teachers[i].profession} named ${teachers[i].name} and he likes to work on a ${teachers[i].brand} computer.`);

}


for (let i = 0; i < teachers.length; i++) {
    let salaryPerHour = Math.round(teachers[i].salary / teachers[i].hoursPerWeek);
    console.log(`${teachers[i].name} earns ${salaryPerHour} per hour.`);
}