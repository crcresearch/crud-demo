export default Ember.Controller.extend(Ember.Evented, {
  actions: {
    toggle: function(direction) {
      alert("Initailizing menu !");
      $('.ui.sidebar').sidebar('toggle');
    }
  }
});
