'use strict';

// =======================================================
// =====================Ideas View========================
// ======================================================= 
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



// =======================================================
// ===================Approved View=======================
// ======================================================= 
var ApprovedView = Backbone.View.extend({
  className: "approved-view",
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

// =======================================================
// ===================Progress View=======================
// =======================================================
var InProgressView = Backbone.View.extend({
  className: "in-progress-view",
  progressTemplate: _.template($(".progress-template").text()),
    events: {
      "click .garbage": "deleteDataModel",
      "click .share": "shareDataModel"
    },

    initialize: function(){
      this.listenTo(anotherInProgressCollection, "change", this.render);
      $(".third").append(this.el);
        this.render()
        console.log("this is the progress initialize")
    },

    render: function(){
      var renderedTemplate = this.progressTemplate(this.model.attributes);
      this.$el.html(renderedTemplate)
      console.log("this is the progress render function")
      return this;
    }
})



// =======================================================
// ===================Complete View=======================
// ======================================================= 
var CompletedView = Backbone.View.extend({
  className: "complete-view",
  completeTemplate: _.template($(".complete-template").text()),
    events: {
      "click .garbage": "deleteDataModel",
      "click .share": "shareDataModel"
    },

    initialize: function(){
      this.listenTo(anotherCompletedCollection, "change", this.render);
      $(".fourth").append(this.el);
        this.render()
        console.log("this is the complete initialize")
    },

    render: function(){
      var renderedTemplate = this.completeTemplate(this.model.attributes);
      this.$el.html(renderedTemplate)
      console.log("this is the complete render function")
      return this;
    }
})