const db = require("./db_connection");

const create_recipe_table_sql = `
CREATE TABLE recipe (
    recipe_id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) NULL,
    difficulty INT NULL,
    type VARCHAR(45) NULL,
    origin VARCHAR(45) NULL,
    PRIMARY KEY (recipe_id));`

db.execute(create_recipe_table_sql);
db.end();