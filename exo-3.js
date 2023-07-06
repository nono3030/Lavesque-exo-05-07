// Écrivez un programme JavaScript qui demande à l'utilisateur deux nombres et affiche leur somme dans la console.
const premierNombre = parseFloat(prompt("Entrez le premier nombre :"));
const deuxiemeNombre = parseFloat(prompt("Entrez le deuxième nombre :"));
const somme = premierNombre + deuxiemeNombre;
console.log("La somme des deux nombres est : " + somme);

// j'add parsefloat pour eviter que par exemple 1 + 2 fasse 12 et non 3
