Posts = new Mongo.Collection('posts');

Posts.allow({
  insert: function(userId, doc) {
    // only allow posting if you are logged in
    return !! userId;
  }
// 7: CREANDO POSTS
// Llamamos a Posts.allow, que le dice a Meteor 
// que “se trata de un conjunto de circunstancias 
// en las que a los clientes se les permite hacer 
// cosas en la colección de Posts”. En este caso, 
// estamos diciendo: “a los clientes se les permite 
// insertar posts siempre y cuando tengan un userId”.
});