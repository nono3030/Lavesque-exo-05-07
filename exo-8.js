const mot = prompt("Entrez un mot :");

const motInverse = mot.split("").reverse().join("");

if (mot === motInverse) {
  console.log(mot + " est un palindrome.");
} else {
  console.log(mot + " n'est pas un palindrome.");
}
