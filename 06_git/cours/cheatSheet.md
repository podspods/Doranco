# CheatSheet



## creation de dépôt

## configuration de git 

config au niveau global du system
```bash
$ git config --system user.name "EmileCda"
$ git config --system user.email emile.Cda@gmail.com
```
config au niveau global du user 
```bash
$ git config --global user.name "EmileCda"
$ git config --global user.email emile.Cda@gmail.com
```
config au niveau local du dépot 
```bash
$ git config  user.name "EmileCda"
$ push 
```


pour lister la configuration
```bash
$ git config -l
```


dans l'ordre de priorite

/etc/gitconfig : c'est le fichier créer par l'option --system 

~/.gitconfig  : c'est le fichier créer par l'option  --global

dossier courant (.git/config) 

chaque niveau écrase le précédent : 

(.git/config) ecrase ~/.gitconfig qui ecrase /etc/gitconfig



## creation d'un remote 

il faut que git init soit fait dans le répertoire

??

## creation de dépôt à partir d'un modèle
## creation d'un modèle de dépot dépôt
## duplication de dépôt


## clonage de dépôt

```bash
git clone https://github.com/EmileCda/cocktail-search

```
note1 cette commande est lancé sans rien faire avant dans git ?*
le clone crééer le repertoire .git gi

note 2: sas branche spécifique : git clone le main

clonage d'une branche (develop)

```bash
git clone -b develop https://github.com/EmileCda/cocktail-search

```




## push 




envoyer de toutes les modifications du SST (de la branche courant)
```bash
$ git push nomDuRemote

```

## pull

récuperation de toutes les modifications du SST (de la branche)
```bash
$ git pull nomDuRemote branchDuRemote

```

## configuration du remote 

avec la console 
```bash
git remote add nomDuRemote https://github.com/username/mon-projet

```
ou avec vscode


## clonage de dépôt (remote

```bash
git clone https://github.com/username/mon-projet
$ cd mon-projet
$ code .

```

