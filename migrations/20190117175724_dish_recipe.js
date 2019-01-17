
exports.up = function(knex, Promise) {
    return knex.schema.createTable("dish_recipe",function(tbl){
      // Primary key
      tbl.increments("id");
  
      // Other fields

      tbl
      .integer("dish_id")
      .unsigned()
      .references("dish_id")
      .inTable("dish");

      tbl
      .integer("recipe_id")
      .unsigned()
      .references("recipe_id")
      .inTable("recipe");
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("recipe_ingredient");
  };
