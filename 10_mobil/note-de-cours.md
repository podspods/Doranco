# position en css

1. position relative
2. position absolue (à éviter dans la mesure du possible)
3. position fixed

pour une fenetre qui prends tout l'ecran

le mettre en fixed
avec top 0 bottom 0 left 0 right 0

onpeut mettre du css imbriqué dans react css

## rappel: démarche développement

1. wire-frame
2. faire un schéma réactif

   1. etat : c'est un variable connecté au visuel. (si l'état change la variable change et vice versa)
   2. action = fonction : permet de changer les etats
   3. effet : conséquence. fonction se fait à l'insue de l'utilisateur. Se déclenche en cas de changement d'état.

3. le composant en 4 parties
   1. les etat
   2. les action
   3. les effet
   4. le visuel
      note. il est recommandé de toujours passer par des actions
4. decoupe en component

!! note : revoir le cours sur les tableaux

# la gestion des états : (state management)

cas d'un état répercuter sur les sibbling

## solution 1: utilisation des props react.

déclarer le state dans le pere et passer les actions dans les fils.

en cas d'utilisation de variable de tpe Funtion
a évite : plutot typer la fonction :

```js
setEmail : (email:string)=> void
```

## solution 2 utliser les contextes (CreateContext)

1. creer le contexte avec `createContexte`
   le conexte contient l'état et l'action (qui modifie l'état)
2. mettre en place un provider de contexte
   exporte le contexte
3. utiliser `useContext` pour acceder

bonus : mettre tous les contextes dans un repertoire `src/context`
creer un provider

### solution 3 utiliser la librairie `pubsub`

Souscrire à la librairie pubsub et à chaque fois qu'un message est publier on le recoit

1. installer `pubsub`

```bash
npn i pubsub-js
```

2. import de pub

3. Publier un message dans un topic

```js
PubSub.publish(nomTopic, contenu);
```

4. souscrire pour récupérer un token

subscripte(..) retourne le dernier message
et se desouscrire en utilisant le token

### solution 4, la plus répandu : centralisation de l'état.

nanostore

- création :
  nanostro:map <=> useState
- utilisation

- action : créer avec la function action de nonostore get et set sur le store.
