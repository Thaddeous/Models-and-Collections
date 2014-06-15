'use strict';

//====================================================
var IdeaView = Backbone.View.extend({
  className: "idea-view",
  ideasTemplate: _.template($(".idea-template").text()),
    events: {
      "click .garbage": "deleteDataModel",
      "click .share": "shareDataModel"
    },

    initialize: function(){
      this.listenTo(anotherIdeasCollection, "change", this.render);
      $(".first").append(this.el);
        this.render()
        console.log("this is the ideas initialize")
    },

    render: function(){
      var renderedTemplate = this.ideasTemplate(this.model.attributes);
      this.$el.html(renderedTemplate)
      console.log("this is the ideas render function")
      return this;
    }
})


//====================================================
var ApprovedView = Backbone.View.extend({
  className: "data-view",
  approveTemplate: _.template($(".approve-template").text()),
    events: {
      "click .garbage": "deleteDataModel",
      "click .share": "shareDataModel"
    },

    initialize: function(){
      this.listenTo(anotherApprovedCollection, "change", this.render);
      $(".second").append(this.el);
        this.render()
        console.log("this is the approve initialize")
    },

    render: function(){
      var renderedTemplate = this.approveTemplate(this.model.attributes);
      this.$el.html(renderedTemplate)
      console.log("this is the approve render function")
      return this;
    }
})

 