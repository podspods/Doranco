# Howto
comment faire pour commencer un dépot git



1. sur github.com : créer le repository dans github avec la branche main
2. Faire un clone dans un répertoire spécifié
3. Créer la branche develop
4. Faire un readme sur la branche develop
5. commit + push 
6. pull request pour merger avec la branche main (version v0.0.0) 
7. une fois le merge accepté 
8. faire un pull de la brache develop (pour avoir une branche a jour)
9. crééer une branche nommé : feature ou fix
10. se mettre sur cette branche pour commencer à développer
11. pendant les developpement faire autant de commit et push que nécessaire.
12. une fois les dévelopement terminées : faite une pull request dela branche (features ou fix) sur la branche develop.
13. une fois cette branche est mergé sur develop. on peut considéré que cette tâche est fini.



## 1. ## sur github.com : créer le repository dans github avec la branche main
## Faire un clone dans un répertoire spécifié
## Créer la branche develop
## Faire un readme sur la branche develop
## commit + push 
## pull request pour merger avec la branche main (version v0.0.0) 
## une fois le merge accepté 
## faire un pull de la brache develop (pour avoir une branche a jour)
## crééer une branche nommé : feature ou fix
##  se mettre sur cette branche pour commencer à développer
##  pendant les developpement faire autant de commit et push que nécessaire.
##  une fois les dévelopement terminées : faite une pull request dela branche (features ou fix) sur la branche develop.
##  une fois cette branche est mergé sur develop. on peut considéré que cette tâche est fini.
## 


si le repository est private il faut un token 



```bash
git clone https://<token>@github.com/<github-userName>/<repertorie>
<local_directory>

```
exemple 
si le repository est public  

```bash
git clone https://github.com/Djeg/cocktail-search-demo  cocktail-pro
```
si le repository est prive

```bash
git clone https://1234567890à@apze$&12345@github.com/Djeg/cocktail-search-demo  cocktail-pro
```

ensuite créer le brache develop s'il n'existe pas 

je check si la branche existe ?
```bash
git branch
```

je créer la branche
existe ?

```bash
git git checkout -b develop
```


Pull de la branch pour avoir la derniere version


pour connaitre le remote 
```bash
git config -l 
```

exemple de résultat
```bash
remote.origin.url=https://github.com/Djeg/cocktail-search-demo
remote.origin.fetch=+refs/heads/*:refs/remotes/origin/*
branch.main.remote=origin
```


faire le pull

```bash
git pull  origin develop
```


## créer la branche qui permet de faire les modifications

s'il s'agit d'un developpement 
```bash
git git checkout -b features<nom-de-la-fonction-a-developper>
```

s'il s'agit d'un hot-fix 
```bash
git git checkout -b fix<raison-du-fixe>
```







