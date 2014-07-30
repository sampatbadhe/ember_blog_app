// in order to see the app running inside the QUnit runner
App.rootElement = '#ember-testing';

// Common test setup
App.setupForTesting();
App.injectTestHelpers();

// common QUnit module declaration
module("Integration tests", {
  setup: function() {
    // before each test, ensure the application is ready to run.
    Ember.run(App, App.advanceReadiness);
  },

  teardown: function() {
    // reset the application state between each test
    App.reset();
  }
});

// QUnit test case
test("/", function() {
  // async helper telling the application to go to the '/' route
  visit("/");

  // helper waiting the application is idle before running the callback
  andThen(function() {
    equal(find("a.brand").text(), "Blogger", "Navigaion header is rendered");
    equal(find("li").length, 2, "There are two items in the list");
  });
});

// QUnit test case
test("#/about", function() {
  // async helper telling the application to go to the '/' route
  visit("/about");

  // helper waiting the application is idle before running the callback
  andThen(function() {
    equal(find(".about p").text(), "Simple Blog Application.", "About template is rendered");
  });
});
