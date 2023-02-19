var john = {
    nom: "Doe",
    prenom: "John",
    age: 14,
    sexe: "non binaire",
    classe: "4eme",
    notes: [12, 14, 8, 17, 0]
};
/**
 * Faire la fonction de calcule
 */
function getAverage(notes) {
    return notes.reduce(function (accumulator, currentNote) { return accumulator + currentNote; }, 0) / notes.length;
}
/**
 * Faire la fonction de calcule
 */
function getAverage2(eleve) {
    return eleve.notes.reduce(function (accumulator, currentNote) { return accumulator + currentNote; }, 0) / eleve.notes.length;
}
// Calculer la myenne de john
// Créer un nouvelle éléve : Rose
// Afficher et calculer la moyenne :)
console.log(getAverage(john.notes));
console.log(getAverage2(john));
