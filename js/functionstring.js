//Fonctions String

var s = "bonJOUr tout le monde  je rajoute quel chose";

console.log(s.length);//Taille de ma chaine
console.log(s.toUpperCase());
console.log(s.toLowerCase().startsWith("bonjour")); // Vérifie si la chaine commence par
console.log(s.toLowerCase().endsWith("bonjour")); // Vérifie si la chaine fini par
console.log("Includes " + s.includes("tout"));

console.log(s.trimEnd().length);//Supprime l'espace à la fin de la chaine
console.log(s.trimStart());//Supprime l'espace au début  de la chaine
console.log(s.trim());//Supprimer l'espace au début et fin de la chaine

console.log(s.substr(7,5)); // Récuperer une partie de la chaine (début, combien après)
console.log(s.substring(7,10));  // Récuperer une partie de la chaine (début, fin)



console.log(s.charAt(9)); // Récupère le caractère à la position

console.log(s.toLowerCase().replaceAll("o",'a')); // Remplacer les mots dans la chaine de catactère par des nouveaux

console.log(s.substr(s.indexOf("tout")+"tout".length));

console.log(s.padEnd(100,"0")); // Comblez le vide à la fin par des caractère
console.log(s.padStart(105,"0"));//Comblez le vide au début par des caractère