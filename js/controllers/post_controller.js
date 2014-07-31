App.PostController = Ember.ObjectController.extend({
  isEditing: false,

  actions: {
    edit: function() {
      this.set('isEditing', true);
    },

    update: function() {
      this.set('isEditing', false);
    }
  }
});
