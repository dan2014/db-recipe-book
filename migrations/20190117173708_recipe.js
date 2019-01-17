
exports.up = function(knex, Promise) {
    return knex.schema.createTable("recipe",function(tbl){
      // Primary key
      tbl.increments("recipe_id");
  
      // Other fields
      tbl
      .string("name",255)
      .notNullable()
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("recipe");
  };
