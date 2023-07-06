const nombreAleatoire = Math.floor(Math.random() * 100) + 1;
let proposition = parseInt(prompt("Devine un nombre entre 1 et 100 :"));

while (proposition !== nombreAleatoire) {
  if (proposition < nombreAleatoire) {
    console.log("Trop petit !");
  } else {
    console.log("Trop grand !");
  }
  
  proposition = parseInt(prompt("Réessayez :"));
}

console.log("Bravo ! Vous avez deviné le nombre " + nombreAleatoire + ".");
