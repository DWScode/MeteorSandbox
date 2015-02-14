  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.homepage.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.homepage.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });