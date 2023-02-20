# La base de données et son SGBD

Les bases de données sont très célébre et très utilisé. C'est ce qui permet de stocker, récupérer, modifier et supprimer les données sur un serveur, une application etc ...

Pour dévélopper des applications nous avons obligatoirement besoin d'un base de données.

Il éxiste 2 types de bases de données :

- Les bases de données relationnel (**SQL**): C'est le cas de OracleSQL, MySQL, PostGreSQL etc ...
- Les bases de données non relationnel (**NO SQL**) : MongoDB, Cassandra, elasticsearch, algolia etc ...

Chaque base de données vient avec son lôt d'avantages et d'inconvénient :

|        | Les Plus                                                                                                        | Les Moins                                                                                   |
| ------ | --------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| SQL    | Cohérence des données, Un langage universelle pour interargir avec les données, des relations entre nos données | Lenteur, cohérence des données (on ne peux pas tout enregistré sans avoir à la schèmatiser) |
| NO SQL | Pas de cohérence, rapidité, pas de relation                                                                     | pas de cohérence, pas de langage universelle, pas de relation                               |

## Le bases de données relationnel

Ce sont les bases de données les plus populaire. C'est aussi les plus anciennes, elles sont basé sur des concepts simple et efficace.

Il éxiste plusieurs base de données relationnel, ce sont ce qu'on appel des **SGBD** :

- **MySQL** : Très utilisé en php
- **PostGresSQL** : La base de données gratuite la plus puissante du marché.
- **Oracle SQL** : Base de données payante, dite propriétaire développé par la company Oracle.
- **SQL Server** : Base de données payante, développé par microsoft

### Comment ça marche ?

Toutes ces base de données permettent de stocker des données dans des **tableaux** :

![les tables](../image/Les%20tables.png)

Chaque tableaux possède un stsème de **clefs** :

- Les **clefs primaire** : Identifie une entrée de notre table
- Les **clefs étrangère** : Identifie une relation dans une table

![Les clefs](../image/Les%20clefs.png)

## Les champs et leurs types de données !

Chaque case d'une table, est un champ. Ce champs contient une données et, comme dans un langage de programmation, cette données possède un **type** !

Voici quelques types les plus célèbre pour nos données :

### Les types numéraires

Ces types sont utilisé pour stocker des chiffres :

- INT : Stock un chiffre entier (pas de virugule possible) compris entre -2147483648 er 2147483647
- FLOAT : Permet de stocker un chiffre à virgule
- BIGINT : Permet de stocker un très grand nombre
- BOOL : Permet de stocker un 0 ou un 1
- [etc ...](https://www.w3schools.com/sql/sql_datatypes.asp)

### Les types textuelle

Ces types ont utilisé pour stocker du text :

- VARCHAR : Chaîne de caractère limité en taille (255 caractère maximum)
- TEXT : Chaîne de caractère non limité

Il en existe d'autre : https://www.w3schools.com/sql/sql_datatypes.asp

Tout ces types sont présent pour une bonne raison :

1. Placer des contraintes pour que nos données soit cohérente
2. Les performances et la gestion du stockage
