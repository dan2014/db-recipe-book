
exports.up = function(knex, Promise) {
    return knex.schema.createTable("ingredient",function(tbl){
      // Primary key
      tbl.increments("ingredient_id");
  
      // Other fields
      tbl
      .string("name",255)
      .notNullable()
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("ingredient");
  };