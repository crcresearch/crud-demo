import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return $.getJSON( "data/properties.json");
  }
});


