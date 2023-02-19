import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Pour chaque constantes present dans ce fichier
 * ajouter le type associé :)
 *
 * exemple :
 *
 * const name = "john"
 *
 * Devient :
 *
 * const name: string = "john"
 */

export const name: string = "Rose Doe";

export const age: number = 42;

export const notes: number[] = [13, 14, 9, 13, 9, 7];

export const isMajor: boolean = true;

/**
 * Pour chaque objet suivant créer un type associé
 * permettant de décrire le contenue de l'objet
 *
 * Exemple :
 *
 * const john = { firstname: 'john', lastname: 'doe' }
 *
 * Devient :
 *
 * type User = { firstname: string, lastname: string }
 * const john: User = { firstname: 'john', lastname: 'doe' }
 */

export const johnz = {
  firstname: "john",
  lastname: "doe",
  age: 42,
  notes: [12, 7, 8, 12, 19],
};

type User = {
  firstname: string;
  lastname: string;
  age: number;
  notes: number[];
};

const john: User = {
  firstname: "john",
  lastname: "doe",
  age: 42,
  notes: [12, 7, 8, 12, 19],
};

export const janeZ = {
  matiere: "Math",
  classes: ["6eme", "5eme", "4eme"],
  firstname: "jane",
  lastname: "doe",
};

type Matiere =
  | "anglais"
  | "espagnol"
  | "francais"
  | "math"
  | "physique & chimie"
  | "arts plastique"
  | "musique"
  | "sport";

type ClassLabel = "6eme" | "5eme" | "4eme";

type Teacher = {
  matiere: Matiere;
  classes: ClassLabel[];
  firstname: string;
  lastname: string;
};

const jane: Teacher = {
  matiere: "math",
  classes: ["6eme", "5eme", "4eme"],
  firstname: "jane",
  lastname: "doe",
};

export const nikez = {
  brand: "nike",
  model: "Air Force One",
  price: 89.99,
  sellBy: {
    firstname: "john",
    lastname: "doe",
    age: 42,
    notes: [12, 7, 8, 12, 19],
  },
};

type Shoes = {
  brand: string;
  model: string;
  price: number;
  sellBy: User;
};

const nike: Shoes = {
  brand: "nike",
  model: "Air Force One",
  price: 89.99,
  sellBy: {
    firstname: "john",
    lastname: "doe",
    age: 42,
    notes: [12, 7, 8, 12, 19],
  },
};

export const musiq: Category = {
  id: 132,
  label: "musique",
  category: "music",
};

type Category = {
  id: number;
  label: string;
  category: string;
};

/**
 * Pour chaque composant, observer le contenue de la fonction
 * et créer le type associé aux « props », ensuite remplacer
 * `any` par votre type !
 */

type HelloPropos = {
  username: string;
  password: string;
};

type TitleProp = {
  title: string;
  className: ClassLabel;
};

export function Helloz({ username }: HelloPropos) {
  return <p>Hello {username}</p>;
}
export function Hello({ username }: HelloPropos) {
  return <p>Hello {username}</p>;
}

export function BigTitleZ({ title, className }: any) {
  return <h1 className={`big ${className}`}>{title}</h1>;
}

export function BigTitle({ title, className }: AwTitlePropard) {
  return <h1 className={`big ${className}`}>{title}</h1>;
}

type Justify = "left" | "right" | "center";
type Align = "bottom" | "top" | "left" | "right";

type CssProperties = {
  isVertical: boolean;
  justify: Justify;
  align: Align;
};

export function Box({ isVertical, justify, align }: CssProperties) {
  return (
    <div
      className={`${isVertical ? "vertical" : ""} ${justify} ${align}`}
    ></div>
  );
}

export type DisplayStudentProp = {
  student: User;
};

export function DisplayStudent({ student }: DisplayStudentProp) {
  return (
    <>
      <h1>
        Élève {student.firstname} {student.lastname}
      </h1>
      <p>Age : {student.age} ans</p>
      <h2>Notes :</h2>
      <ul>
        {student.notes.map((note: any, index: any) => (
          <li key={index}>
            Note n°${index + 1} : {note} / 20
          </li>
        ))}
      </ul>
    </>
  );
}

// le type suivant permet de passer la 'Prop' dans la fonction pour Reac
export type DisplayTeacherProp = {
  teacher: Teacher;
};

export function DisplayTeacher({ teacher }: DisplayTeacherProp) {
  return (
    <>
      <h1>
        Prof : {teacher.firstname} {teacher.lastname}
      </h1>
      <p>Matière : {teacher.matiere}</p>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <DisplayTeacher teacher={jane}></DisplayTeacher>
  </React.StrictMode>
);
