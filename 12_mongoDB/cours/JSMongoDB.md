# MongoDB avec Javascript

installation de fastify/mongodb

```js
npm i @fastify/mongodb
```

initialiser la connexion avec la base de donnée

les variables d'environnement dsont dans .env

```js
import fastifyMongodb from "@fastify/mongodb";
import fastify from "fastify";

const myApp = fastify();

myApp.register(fastifyMongodb, {
  url: process.env.MONGODB_URL,
  database: process.env.DATABASE,
});
// myApp.mongo.db
```

## CRUD

### add document (create)

```js
const result = await myApp.mongo.db?.collection.pizzaCollection).insertOne(newPizza);
```

```sh
POST http://127.0.0.1:5555/pizzas
Content-Type: application/json

 {
    "name": "Sicilian",
    "price": 11.2,
    "description": "pizza Sicilian description",
    "image": "https://cdn.pixabay.com/photo/2021/07/19/16/04/pizza-6478478__340.jpg"
 }

```

### Retreive document

```js
await myApp.mongo.db?.collection("calculatrices").find({}).toArray();
```

ToArray() permet de retourner les valeurs

```sh
# retrreive all pizza in an array
GET  http://127.0.0.1:5555/pizzas?name=Romana
```

find() envoie un curseur a mongodb

### Patch document (UPDATE)

id est passé en params
et ce qu'il faut updater est dans le body

```js
  const id = new ObjectId(request.params.id);
  const result = await myApp.mongo.db?.collection(pizzaCollection).updateOne(
      {
        _id: new ObjectId(request.params.id),
      },
      {
        $set: updatePizza,
      }
```

```sh
### request for modifing  a pizza
Patch http://127.0.0.1:5555/pizzas/6401e94702528eb0be864a0a
Content-Type: application/json

{
    "name": "Napolitain.2.0"
}
```

### Delete document

```js
const id = new ObjectId(request.params.id);
const result = await myApp.mongo.db
  ?.collection("pizzas")
  .deleteOne({ _id: id });
```

l'id est passé dans le params
il faut convertir avec ObjectId

```sh
###
DELETE http://127.0.0.1:5555/pizzas/6401e86904953cbd07122e94
```
