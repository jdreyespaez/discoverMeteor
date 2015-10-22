Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function() { return Meteor.subscribe('posts'); }
});

Router.route('/', {name: 'postsList'});

Router.route('/posts/:_id', {
  name: 'postPage',
  data: function() { return Posts.findOne(this.params._id); }
});

Router.route('/submit', {name: 'postSubmit'});

// 7: CREANDO POSTS Una acción intercepta el proceso 
// de enrutamiento y, potencialmente, cambia la 
// acción que lleva acabo el router. Puedes pensar 
// en él como en un guardia de seguridad que verifica 
// tus credenciales antes de dejarte entrar.
var requireLogin = function() {
  if (! Meteor.user()) {
    this.render('accessDenied');
  } else {
    this.next();
  }
}

Router.onBeforeAction('dataNotFound', {only: 'postPage'});
// 7: Aquí se requiere que esté loggeado.
Router.onBeforeAction(requireLogin, {only: 'postSubmit'});
