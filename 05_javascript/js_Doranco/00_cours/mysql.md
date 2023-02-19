# Mysql


## utilisation de mysql avec le package knex
 [à télécharger ici](https://www.npmjs.com/package/knex)

 ```sh
 npm install knex --save
 $ npm install mysql
 ```

[la doc est ici](https://knexjs.org/guide/#node-js)

```sh
# Then add one of the following (adding a --save) flag:
$ npm install pg
$ npm install pg-native
$ npm install sqlite3
$ npm install better-sqlite3
$ npm install mysql
$ npm install mysql2
$ npm install oracledb
$ npm install tedious
```

knex connection 

```js
const knex = require('knex')({
  client: 'mysql',
  connection: {
    host : '127.0.0.1',
    port : 3306,
    user : 'your_database_user',
    password : 'your_database_password',
    database : 'myapp_test'
  }
});
```

```sh
npm install knex
npm install mysql
```


knex init

<hr>
## [exemple2 github]



[exemple2 github](https://gist.github.com/NigelEarle/80150ff1c50031e59b872baf0e474977)


```sh
$ mkdir node-knex-demo
$ cd node-knex-demo
$ npm init

```
nécessite les droits root
```sh
$ npm install knex -g

```
```sh
$ npm install knex --save
$ npm install pg --save    
```

??? ca ne marche pas ???????????
```sh
knex init
```

```sh
npm install express --save
```

```sh
$ touch server.js

```

## version3 : 
[technical babaji youtube](https://youtu.be/eIjbSH3Imb8)


```sh
$ node -v 
$ npm -v
$ npm install mysql
```