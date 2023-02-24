/**store for screen2 : Todo list
 *
 *
 *
 */

import { action, map } from "nanostores";
import { ChangeEvent,  } from "react";

// this is a single todo
// has a name and could by done or not 
export type item = {
  name: string;
  isDone: boolean;
};

// this is a list of todo
// it has a name meaning the category (grocery, cleaning , First thing tomorrow, crafting etc) 
// itemname is used to add a new todo

export type todoList = {
  itemName: string;
  itemList: item[];
  todoName : string;
  isCollapse:boolean;
};
// this is a tasklist ; meaning all the todos filed by catégory


export type taskList ={
    taskList : todoList[];
    userName : string;
}
export const homeStore = map<taskList>({
  taskList: [],
  userName :"",

});

// set for each stat : 
// category name, task, isdone,username

export const setUsername = action(homeStore, "setUsername",(store,Event)=>{
    store.setKey("userName", event .currentTarget.value);

})

export const setTodoListname = action(homeStore, "setUsername",(store,idTaskList,name)=>{

    const { taskList} = homeStore.get()
    const myTaskList = taskList.filter(idTaskList) ;
const tasklistName = name;
const taskListLeft = taskList.filter(index !==idTaskList) ;



    store.setKey("setTodoListname", event .currentTarget.value);

})



????
export const setItemName = action(
    cleaningStore,
  "setItemName",
  (store, e: ChangeEvent<HTMLInputElement>) => {
    store.setKey("itemName", e.currentTarget.value);
  }
);

export const addItem = action(cleaningStore, "AddItem", (store) => {
  const { itemName } = store.get();
  const { itemList } = store.get();
  const id: number = itemList.length;

  const newItem: Item = {
    name: itemName,
    isDone: false,
  };
  // prepend value in array
  const newItemList = [newItem, ...itemList];
  store.setKey("itemList", newItemList);
});

export const toggleIsDone = action(
    cleaningStore,
  "AddItem",
  (store, idItem: number) => {
    const { itemList } = store.get();
    const myNewList = itemList.map((item, index) => {
      if (idItem === index) {
        const newItem: Item = {
          name: item.name,
          isDone: !item.isDone,
        };
        return newItem;
      } else return item;
    });
    store.setKey("itemList", myNewList);
  }
);

export const deleteItem = action(
    cleaningStore,
  "DeleteItem",
  (store, idItem: number) => {
    const { itemList } = store.get();

    const myNewList = itemList.filter((item, index) => {
      if (idItem !== index) {
        return item;
      
      }
    });
    store.setKey("itemList", myNewList);
  }
);
