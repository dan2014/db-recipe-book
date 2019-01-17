
exports.up = function(knex, Promise) {
    return knex.schema.createTable("dish",function(tbl){
      // Primary key
      tbl.increments("dish_id");
  
      // Other fields
      tbl
      .string("name",255)
      .notNullable()
      .unique("name","Dish_Name");
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("dish");
  };
  