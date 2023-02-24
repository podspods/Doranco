/**store for screen2 : Todo list
 *
 *
 *
 */

import { action, map } from "nanostores";
import { ChangeEvent, MouseEvent, MouseEventHandler } from "react";

export type Item = {
  name: string;
  isDone: boolean;
};

export type TodoList = {
  itemName: string;
  itemList: Item[];
};

export const TodoListStore = map<TodoList>({
  itemName: "",
  itemList: [],
});

export const setItemName = action(
  TodoListStore,
  "setItemName",
  (store, text: string) => {
    store.setKey("itemName", text);
  }
);

export const addItem = action(TodoListStore, "AddItem", (store) => {
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
  TodoListStore,
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
  TodoListStore,
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
