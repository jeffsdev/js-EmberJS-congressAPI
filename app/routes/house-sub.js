import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var houseUrl = 'http://congress.api.sunlightfoundation.com/committees?committee_id=' + params.committee_id + '&chamber=house&subcommittee=false&apikey=c961c668d506457b92bddb7453ac777d';
    var subcomUrl = 'http://congress.api.sunlightfoundation.com/committees?chamber=house&subcommittee=true&parent_committee_id=' + params.committee_id + '&apikey=c961c668d506457b92bddb7453ac777d';

    return Ember.RSVP.hash({
      house: Ember.$.getJSON(houseUrl).then(function(responseJSON) {
        return responseJSON.results;
      }),
      subcom: Ember.$.getJSON(subcomUrl).then(function(responseJSON) {
        return responseJSON.results;
      })
    });
  }
});
