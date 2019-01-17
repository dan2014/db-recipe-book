
exports.up = function(knex, Promise) {
    return knex.schema.createTable("recipe_ingredient",function(tbl){
      // Primary key
      tbl.increments("id");
  
      // Other fields

      tbl
      .integer("ingredient_id")
      .unsigned()
      .references("ingredient_id")
      .inTable("ingredient");

      tbl
      .integer("recipe_id")
      .unsigned()
      .references("recipe_id")
      .inTable("recipe");

      tbl
      .integer("amount")
      .unsigned()
      .notNullable()

      tbl
      .string("unit",255)
      .notNullable()
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("recipe_ingredient");
  };