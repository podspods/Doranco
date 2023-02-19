import React from 'react'
import ReactDOM from 'react-dom/client'

const root = document.querySelector("#root") as HTMLElement;



/**
Avec la constante suivante :
*/
const janeDoe_js: Student = {
  firstname: "Jane",
  lastname: "Doe",
  age: 45,
  sexe: "female",
  notes: [12, 16, 14, 8, 7, 19]
};

/**
Créer un type typescript décrivant ce que contient un objet
éléve. Nommé ce type Student
*/


type Student = {
  firstname:string,
  lastname:string,
  age:number,
  sexe: "female" | "male" |"undefined",
  notes: number[]
};

const janeDoe : Student = { firstname: "Jane",
lastname: "Doe",
age: 45,
sexe: "female",
notes: [12, 16, 14, 8, 7, 19]}

const giJoe : Student = { firstname: "Gi",
age: 45,
sexe: "male",
lastname: "Joe",
notes: [12, 16, 14, 8, 7, 19]}



/*
Créer un composant « DisplayStudent » qui accépte en paramètres
un objet props contenant une clefs `student` de type `Student`.

Il vous faudra créer le type pour les props ou utilisé `any` :/

Dans ce composant, afficher la même chose que l'exercice 1 en utilisant
l'étudiant passé dans les props

Afficher l'étudiant "jane doe" le jsx en utilisant le composant
tout juste créé `DisplayStudent`
*/

type DisplayStudentProps = {
  student: Student;
};

function DisplayStudent({ student }: DisplayStudentProps) {
  return (
    <>
      <h1>
        Bonjour {student.firstname} {student.lastname}
      </h1>
      <p>Vous avez {student.age} ans</p>
      <h2>Vos notes :</h2>
      <ul>
        {student.notes.map((note, index) => (
          <li key={index}>
            Note n°{index + 1} : {note} / 20
          </li>
        ))}
      </ul>
    </>
  );
}

function DisplayTruc(){

  let toto : HTMLElement;
  const nombre : number = 10

  return `<h1><p>houlllaaa ${nombre-1}</p> </h1>`


  
}

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <DisplayStudent student={janeDoe} />
    <DisplayStudent student={giJoe} />
    <DisplayTruc />
  </React.StrictMode>
);




/**exercice 3
* * 
** /
* /**
*Créer 3 variables :
*
*Une constante name égale à "Rose Doe"
*Une constante age égale à 34
*Une constante notes égales à [12, 14, 16, 8, 7, 9]
** /
*
*const name:string = "Rose Doe";
*const age:number = 34;
*const notes:number[] = [12, 14, 16, 8, 7, 9];
*
*
*
* / *
*Dans le JSX,à l'intérieur du composant React.StrictMode,
*Affiche dans une h1 le text suivant :
*
*Bonjour <name> !
*
*Puis dans un paragraph :
*
*Vous avez <age> ans
*
*Puis dans un h2
*
*Vos notes :
*
*Puis dans une balise, réaliser une boucle sur toutes les notes
*et afficher dans une balise la note comme ceci :
*
*Note n°<index + 1> : <note> / 20
** /
*
*ReactDOM.createRoot(root).render(
*  <React.StrictMode>
*    <h1>Bonjour {name}</h1>
*    <p>Vous avez {age} ans</p>
*    <h2>Vos notes :</h2>
*    <ul>
*      {notes.map((note, index) => (
*        <li key={index}>
*          Note n°{index + 1} : {note} / 20
*        </li>
*      ))}
*    </ul>
*  </React.StrictMode>
*);
*
*
*
*/

/**exercice 2 
** * 
** * 
**
**const root = document.querySelector('#root') as HTMLElement
**
**type HelloProps = {
**  name: string
**  age: number
**}
**
**function Hello({name,age}: HelloProps ) {
**
*return (<div><h1>Salut tout le monde et à {name}{age} </h1>
*<p>J'espère que tout le monde va bien</p></div>   )
*
*}
*
*
*
*ReactDOM.createRoot(root).render(
*  <div>
*    <Hello name="john Doe" age=20></Hello>
*    <h1>Coucou les amis</h1>
*    <p>KSHfkdshflsdkhflsdh</p>
*
*  </div>,
*)
* */






/** // exercice 1 
 * 
 * 
 * 
 * 
* * 
* * 
* 
*const parameter = <h1>how are you?</h1>
*const titleZ = <h1>Hi friends</h1>
*
*const block = (
*  <div className="block">
*    <div className="header">
*      <p>Mon block !</p>
*    </div>
*  </div>
*)
*
*const notes = [
*  <li>Note 12 / 20</li>,
*  <li>Note 08 / 20</li>,
*  <li>Note 18 / 20</li>,
*]
*
*const notesz = [12, 8, 14, 16]
*
*
*ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
*  <React.StrictMode>
*    <h1 className='lulu'>Hello word zz</h1>
*    {titleZ}
*    {block}
*    <ul>{notes}</ul>
*
*    <ul>
*      {notesz.map((note, index) => (
*        <li>
*          Note n°{index + 1} : {note} / 20
*        </li>
*      ))}
*    </ul>
*  </React.StrictMode>,
*)
**/
