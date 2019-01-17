const knex = require("knex");
const knexConfig = require("./knexfile");
const db = knex(knexConfig.development);

module.exports = {
    get:function(){
        const query = db("dish");
        return query;
    },
    getID:function(id){
        const query = db("dish").select().where("id",id).first();
        return query;
    },
    insert:function(name){
        const query =  db("dish").insert(name);
        return query;
    },
    update:function(id,name){
        const query =  db("dish").where({"dish_ID":id}).update({name});
        return query;
    },
    delete:function(id){
        const query =  db("dish").where({"dish_ID":id}).delete();
        return query;
    },
    getIngredients:function(){
        const query = db("ingredient");
        return query;
    },
    getIngredientsByID:function(id){
        const query = db("ingredient").select().where("ingredient_id",id).first();
        return query;
    },
    insertingredient:function(name){
        const query =  db("ingredient").insert(name);
        return query;
    },
    updateingredient:function(id,name){
        const query =  db("ingredient").where({"ingredient_ID":id}).update({name});
        return query;
    },
    deleteingredient:function(id){
        const query =  db("ingredient").where({"ingredient_ID":id}).delete();
        return query;
    }
    ,
    getIngredients:function(){
        const query = db("ingredient");
        return query;
    },
    getIngredientsByID:function(id){
        const query = db("ingredient").select().where("ingredient_id",id).first();
        return query;
    },
    insertIngredient:function(name){
        const query =  db("ingredient").insert(name);
        return query;
    },
    updateIngredient:function(id,name){
        const query =  db("ingredient").where({"ingredient_ID":id}).update({name});
        return query;
    },
    deleteIngredient:function(id){
        const query =  db("ingredient").where({"ingredient_ID":id}).delete();
        return query;
    }
}