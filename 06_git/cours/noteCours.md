# note de cours

## 07 février 2023


## Ignorer les fichiers 
 
 .gitignore

fichier à la racine
une ligne par fichier ou répertoire à ignorer
caractere spécial * = jokercard


commentaire = `#`


???? a voir sématique versionning
release.

[semver](https://semver.org/)

<hr>

## README.md

dans les projets : Mettre les instructions d'installation

<hr>

## Github et gitflow


## pull resquest

demande de merge


 ## exercice compteur 

1. Commencer par cloner le projet (https://github.com/Djeg/test002.git)

 ```bash
git clone https://github.com/Djeg/test002.git
```
2. 
Changer de branche pour la branche compteur (si cette branche n'est pas présente, rendez-vous dans l'onglet source de controle, puis les trois petits points puis fetch)

4. Créer votre branche avec au moins votre nom d'utilisateur
2) change de branche
check des branches exitant
```bash
git branch
```
changer de  branche exitant
```bash
git checkout -b emileBranch
```



## 08 février 2023


déconseillé d'utilise width et height : a éviter 
plutot utiliser min-width et max-width vw et vh
plutot utiliser min-height et max-height vw et vh


comment récuperer les branches : fetch en anglais ou récupération en français


en css width et heigth à bannir à utiliser margin et padding

css : utilisation de grid à étudier 


## utilisation de google font

aller chercher les fonts dans 

https://fonts.google.com/

```html
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&display=swap"
    rel="stylesheet">
```

a mettre avant le css perso


```html

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Black+Ops+One&display=swap" rel="stylesheet">
```
a utiliser dans le css

```css
:root{

  --regular-font: 'Black Ops One', cursive;
  --extra-font: verdana, cursive;


}

.font-ext p{

  font-family: var(--regular-font);
  font-size:xx-large
}


```


### stripe paiement en ligne 

https://stripe.com/en-fr
note: a relir 


### a faire un template pour html


### doc sur sticky nav bar








## api pour requette mysql 
 il faut creer une api js et fetch 



# git flow 

<hr>
 

# 9 février 2023 


## création du répertory projet

licence MIT en préférentiel



## clonner le projet 

attention : si le repository est private il faut un token pour y acceder
[le token est à généré sur github doc](https://docs.github.com/fr/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)




merge des branches => la branche disparait

## tag
le tag permet de figer la version 
une fois figé ca créer le zip et le gz




