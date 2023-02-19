type Classe = "6eme" | "5eme" | "4eme" | "3eme" | "2nd" | "1er" | "terminal";

type Sexe = "homme" | "femme" | "non binaire";

type Eleve = {
  nom: string;
  prenom: string;
  age: number;
  sexe: Sexe;
  classe: Classe;
  notes: number[];
};

const john: Eleve = {
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
function getAverage(notes: number[]) {
 
  return notes.reduce(( accumulator,currentNote) =>accumulator+currentNote,0)/notes.length
  
}

/**
 * Faire la fonction de calcule
 */
function getAverage2(eleve: Eleve) {
  
    return eleve.notes.reduce(( accumulator,currentNote) =>accumulator+currentNote,0)/eleve.notes.length

}

// Calculer la myenne de john

// Créer un nouvelle éléve : Rose
// Afficher et calculer la moyenne :)


console.log (getAverage(john.notes))

console.log (getAverage2(john))
