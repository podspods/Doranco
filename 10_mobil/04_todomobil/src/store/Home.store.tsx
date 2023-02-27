/**store for screen2 : Todo list
 *
 *
 *
 */

import { action, map } from "nanostores";

export type Category = {
  name: string;
  id: number;
  isActif: boolean;
};

export type CategoryList = {
  categoryName: string;
  username: string;
  categoryList: Category[];
};

export const HomeStore = map<CategoryList>({
  categoryName: "",
  username: "",
  categoryList: [],
});

export const setUserNameyName = action(
  HomeStore,
  "setUserNameyName",
  (store, text: string) => {
    store.setKey("username", text);
  }
);

export const addCategory = action(HomeStore, "addCategory", (store) => {
  const { categoryName, categoryList } = store.get();

  const newCategory: Category = {
    name: categoryName,
    id: 10,
    isActif: false,
  };
  // prepend newItem in categoryList
  const newCategoryList = [newCategory, ...categoryList];
  store.setKey("categoryList", newCategoryList);
});

export const toggleIsActif = action(
  HomeStore,
  "toggleIsActif",
  (store, idItem: number) => {
    const { categoryList } = store.get();
    const newCategoryList = categoryList.map((cat, index) => {
      if (idItem === index) {
        const modCat: Category = {
          id: cat.id,
          name: cat.name,
          isActif: !cat.isActif,
        };
        return modCat;
      } else return cat;
    });
    store.setKey("categoryList", newCategoryList);
  }
);
