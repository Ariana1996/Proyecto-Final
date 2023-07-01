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

export const setFavouriteRecipe = (idRecipe, isfavourite) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((trx) => {
      trx.executeSql(
        `UPDATE RECIPES SET isfavourite = ${!isfavourite} WHERE id = @idRecipe`,
        [idRecipe],
        (_, result) => {
          resolve(result);
        },
        (_, error) => {
          console.log('error', error);
          reject(error);
        }
      );
    });
  });
  return promise;
};

export const selectRecipes = (favouritePage) => {
  const query = favouritePage
    ? 'SELECT * FROM RECIPES where isfavourite = true'
    : 'SELECT * FROM RECIPES';

  const promise = new Promise((resolve, reject) => {
    db.transaction((trx) => {
      trx.executeSql(
        query,
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
