import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var houseUrl = 'http://congress.api.sunlightfoundation.com/committees?chamber=house&subcommittee=false&apikey=c961c668d506457b92bddb7453ac777d&zip=';
    var senateUrl = 'http://congress.api.sunlightfoundation.com/committees?chamber=house&subcommittee=false&apikey=c961c668d506457b92bddb7453ac777d&zip=';

    return Ember.RSVP.hash({
      house: Ember.$.getJSON(houseUrl).then(function(responseJSON) {
        return responseJSON.results;
      }),
      senate: Ember.$.getJSON(senateUrl).then(function(responseJSON) {
        return responseJSON.results;
      })
    });
   }
});
