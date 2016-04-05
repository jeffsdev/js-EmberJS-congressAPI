import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var billUrl = 'http://congress.api.sunlightfoundation.com/bills?apikey=c961c668d506457b92bddb7453ac777d';
    var senateUrl = 'http://congress.api.sunlightfoundation.com/committees?chamber=house&subcommittee=false&apikey=c961c668d506457b92bddb7453ac777d&zip=';

    return Ember.RSVP.hash({
      bill: Ember.$.getJSON(billUrl).then(function(responseJSON) {
        return responseJSON.results;
      }),
      senate: Ember.$.getJSON(senateUrl).then(function(responseJSON) {
        return responseJSON.results;
      })
    });
   }
});
