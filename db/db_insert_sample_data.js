const db = require("./db_connection");

const delete_recipe_table_sql = "DELETE FROM recipe;"

db.execute(delete_recipe_table_sql);

const insert_recipe_sql = `INSERT INTO recipe (recipe_id, name, difficulty, type, origin) VALUES (?, ?, ?, ?, ?)`

const recipe_1 = [1, 'Bibimbap', 2, 'Dinner', 'Korea'];
const recipe_2 = [2, 'Crème brûlée', 4, 'Dessert', 'France'];
const recipe_3 = [3, 'Avocado Toast', 1, 'Breakfast', 'Australia'];

const recipe = [recipe_1, recipe_2, recipe_3];

for (let i=0; i<recipe.length; i++) {
    let r = recipe[i];
    db.execute(insert_recipe_sql, r);
}

db.end();