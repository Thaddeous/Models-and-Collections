'use strict';

var DataView = Backbone.View.extend({
  className: "data-view",
  template: _.template($(".idea-template").text()),
    events: {
      "click .garbage": "deleteDataModel",
      "click .share": "shareDataModel"
    },

    initialize: function(){
      this.listenTo(anotherIdeasCollection, "change", this.render);
      $(".first").append(this.el);
        this.render()
        console.log("this is the initialize")
    },

    render: function(){
      var renderedTemplate = this.template(this.model.attributes);
      this.$el.html(renderedTemplate)
      console.log("this is the render function")
      return this;
    }
})


 