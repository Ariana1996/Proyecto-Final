import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('recipes.db');

export const init = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((trx) => {
      trx.executeSql(
        'CREATE TABLE IF NOT EXISTS recipes (id INTEGER PRIMARY KEY NOT NULL,title TEXT NOT NULL,imgUrl TEXT NOT NULL, steps TEXT NOT NULL, ingredients TEXT NOT NULL, isfavourite BOOLEAN NOT NULL DEFAULT 0);',
        [],
        () => {
          resolve();
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });

  return promise;
};

export const insertRecipe = (title, imgUrl, steps, ingredients) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((trx) => {
      trx.executeSql(
        'INSERT INTO RECIPES (title,imgUrl,steps,ingredients) VALUES (?,?,?,?)',
        [title, imgUrl, steps.join(), ingredients.join()],
        (_, result) => {
          resolve(result);
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });

  return promise;
};

export const selectFavouriteRecipe = (idRecipe) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((trx) => {
      trx.executeSql(
        'UPDATE RECIPES SET isfavourite = true WHERE id = @idRecipe',
        [idRecipe],
        (_, result) => {
          resolve(result);
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });
  return promise;
};

export const selectRecipes = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((trx) => {
      trx.executeSql(
        'SELECT * FROM RECIPES',
        [],
        (_, result) => {
          result.rows._array.map(function (receta) {
            receta['ingredients'] = receta['ingredients'].split(',');
            receta['steps'] = receta['steps'].split(',');
            return receta;
          });

          resolve(result);
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });
  return promise;
};
