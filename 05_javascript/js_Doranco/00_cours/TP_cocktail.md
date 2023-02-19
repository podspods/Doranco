# correction  TP Cocktail

Utiliser les em ou rem pour les tailles de police 


## init css


```css
:root{

dark color
light color
grey color

font1
font2
size_init = 18px

}
```




min-width= 100 vw
min-hight= 100 vh


## em et rem

1em = taille  = 100% size_init

exemple 2em =  18px * 200


# comment diminuer le logo
## créer une classe dans le css

```css
.classMini{
  taille mini

}

.classeMini h1{
  font-size : taille mini
}
```


transistion : all .025s  permet la transition de tous les enfants 

```css
.classGlobal {
transistion : all .025s
}
```


## remove envenlistener sur le splash 
	
```js  
  myLogo.removeEventListener('click', clickLogo);	
```


## test pour  remove child


```js
innerhtml = ""
boucle -> remove

	const oldResultDiv =  document.querySelector(".result");
	if (oldResultDiv !== null){
		myMainContainer.removeChild(oldResultDiv)
```


## ajouter curseur pointer sur les choses cliquable


## panneau latéral 

mettre une div (overlay) dans le contenaire de coctail

### refaire cours css animation

```js

.overlay{
  psoiton : fixed
  top
  background-color
  backdrop-filter: blur (4px)
  dispa : flex
  align-items : stretch :

  max-heigt = 0
}
.overlay .actif{
  max-heigt = auto


}

.overlay .left-panel{

  background-color
  width = 90%
  transform : translateX(-100%)
}
```

```css

@keyframes averlayAnimation{}

0%{
  max hiengt = 0 

}
100%{
  max hiengt = auto


  
}
}

.overlay{

}

.overlay.active {
animation-name : overlayAnimation
animation-duration : .25s

}


.overlay .left-pannel{

  background-color : 

}



Javascript : liste de champ à mettre dans tableau


instruction1
instruction2
instruction3
instruction4
instruction5
instruction6


dans table de 6 cases : 

arrayFrom({length : 5],(v,i) )> ({lable : drink[`instruectuin${i+1}`]})})









```



```html


```






c'est une div 

