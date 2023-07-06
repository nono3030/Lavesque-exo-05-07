const mots = ["beande", "connard", "enculé", "salope", "mars", 'lune', 'pute']; 

let motLePlusLong = "";
for (let i = 0; i < mots.length; i++) {
  if (mots[i].length > motLePlusLong.length) {
    motLePlusLong = mots[i];
  }
}

console.log("Le mot le plus long est : " + motLePlusLong);
