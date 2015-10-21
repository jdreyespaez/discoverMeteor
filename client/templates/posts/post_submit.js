Template.postSubmit.events({
  'submit form': function(e) {
    e.preventDefault();
// Esta función utiliza jQuery para analizar los 
// valores de los distintos campos del formulario 
// y rellenar un objeto post con los resultados. 
// Tenemos que asegurarnos de usar ^ preventDefault 
// para que el navegador no intente enviar el 
// formulario si volvemos atrás o adelante después.
    var post = {
      url: $(e.target).find('[name=url]').val(),
      title: $(e.target).find('[name=title]').val()
    };
// Al final, podemos dirigirnos a la página de 
// nuestro nuevo post. La función insert() devuelve 
// el identificador _id del objeto que se ha 
// insertado en la base de datos, que podemos pasar 
// a la función go() del router para que nos lleve 
// a la página correcta.
    post._id = Posts.insert(post);
    Router.go('postPage', post);
  }
});
// 7: CREANDO POSTS El resultado es que el usuario 
// pulsa en submit, se crea un nuevo post, y vamos 
// inmediatamente a la página de discusión de ese 
// nuevo post.