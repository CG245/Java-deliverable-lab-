let petName = window.prompt ("What is your pets name?");

let Energy = 0;

let Happiness = 0;

let e = 0;

for (i=0; i<6; i++){
var Action = prompt (petName + " feed, pet, or walk?");
   if (Action === "feed") {
Energy = (Energy + 2);
   } else if (Action === "pet") {
Happiness = (Happiness + 1);
   } else if (Action === "walk")
{
Happiness = (Happiness + 2); 

Energy = (Energy - 1);
   }; 
}; 

console.log (Happiness);

console.log (Energy);

console.log(petName + " has " + Happiness + " happiness and " + Energy + " energy"); 